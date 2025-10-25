"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Target, Zap, TrendingUp, TrendingDown } from "lucide-react";
import { ethers } from "ethers";
import { fetchLatestPrice, formatPythPrice, ETH_USD_PRICE_FEED_ID, PythPrice } from "@/lib/hermes/hermes";
import { arenaAPI } from "@/lib/arenaVault/arenaVault";
import PriceChart from "@/components/price-chart";

interface Battle {
  id: string;
  player: string;
  prediction: string;
  isHigher: boolean;
  stake: string;
  startTime: number;
  duration: number;
  resolved: boolean;
  finalPrice?: string;
  winner?: string;
  createdAt: number;
  expiresAt: number;
}

interface PredictionBattleProps {
  user: {
    connectedWallet?: string;
  } | null;
}

export default function PredictionBattle({ user }: PredictionBattleProps) {
  const [battles, setBattles] = useState<Battle[]>([]);
  const [isLoadingBattles, setIsLoadingBattles] = useState(false);
  const [isCreatingBattle, setIsCreatingBattle] = useState(false);
  
  // Battle creation form
  const [stakeAmount, setStakeAmount] = useState("0.01");
  const [prediction, setPrediction] = useState("");
  const [isHigherPrediction, setIsHigherPrediction] = useState(true);
  const [duration, setDuration] = useState(300); // 5 minutes default
  
  // Price data
  const [currentPrice, setCurrentPrice] = useState<PythPrice | null>(null);
  const [priceHistory, setPriceHistory] = useState<number[]>([]);

  // Fetch current ETH price
  const fetchCurrentPrice = useCallback(async () => {
    try {
      console.log("Fetching current price...");
      const price = await fetchLatestPrice(ETH_USD_PRICE_FEED_ID);
      console.log("Received price:", price);
      
      if (price) {
        setCurrentPrice(price);
        const formattedPrice = formatPythPrice(price.price, price.expo);
        console.log("Formatted price:", formattedPrice);
        setPriceHistory(prev => [...prev.slice(-19), formattedPrice]);
      } else {
        console.log("No price received from Pyth");
      }
    } catch (error) {
      console.error("Failed to fetch current price:", error);
    }
  }, []);

  // Fetch battles from API
  const fetchBattles = useCallback(async () => {
    if (!user?.connectedWallet) return;
    
    setIsLoadingBattles(true);
    try {
      const response = await arenaAPI.getBattles();
      if (response.success) {
        setBattles(response.battles || []);
      } else {
        console.error("Failed to fetch battles:", response.error);
        setBattles([]);
      }
    } catch (error) {
      console.error("Failed to fetch battles:", error);
      setBattles([]);
    } finally {
      setIsLoadingBattles(false);
    }
  }, [user?.connectedWallet]);

  // Auto-refresh data
  useEffect(() => {
    // Always fetch current price, regardless of wallet connection
    fetchCurrentPrice();
    
    // Only fetch battles if wallet is connected
    if (user?.connectedWallet) {
      fetchBattles();
    }
    
    const interval = setInterval(() => {
      fetchCurrentPrice(); // Always fetch price
      if (user?.connectedWallet) {
        fetchBattles(); // Only fetch battles if wallet connected
      }
    }, 5000); // Refresh every 5 seconds
    
    return () => clearInterval(interval);
  }, [user?.connectedWallet, fetchBattles, fetchCurrentPrice]);

  // Create a new battle via API
  const handleCreateBattle = async () => {
    if (!user?.connectedWallet) {
      alert("Please connect your MetaMask wallet first!");
      return;
    }

    if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
      alert("Please enter a valid stake amount!");
      return;
    }

    if (!prediction || parseFloat(prediction) <= 0) {
      alert("Please enter your price prediction!");
      return;
    }

    setIsCreatingBattle(true);
    
    try {
      // Request payment from user's wallet
      if (!window.ethereum) {
        throw new Error("MetaMask not found");
      }

      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      // Send ETH to the server wallet for the battle
      const stakeWei = ethers.parseEther(stakeAmount);
      const serverWallet = "0x1Be31A94361a391bBaFB2a4CCd704F57dc04d4bb"; // ArenaFi server wallet
      
      const tx = await signer.sendTransaction({
        to: serverWallet,
        value: stakeWei
      });

      console.log("Payment transaction sent:", tx.hash);
      await tx.wait();
      console.log("Payment confirmed");

      // Create battle via API (temporary V1 format for compatibility)
      const battleData = {
        userAddress: user.connectedWallet,
        stakeWei: stakeWei.toString(),
        predictionValue: prediction,
        durationSec: duration
      };

      const response = await arenaAPI.createBattle(battleData);
      console.log("Battle creation response:", JSON.stringify(response, null, 2));
      
      if (response.success) {
        console.log("Battle created successfully:", response);
        
        // Clear form
        setPrediction("");
        setStakeAmount("0.01");
        setIsHigherPrediction(true);
        setDuration(300);
        
        // Refresh battles
        await fetchBattles();
        
        alert(`Battle created successfully! It will auto-resolve in ${duration / 60} minutes.`);
      } else {
        throw new Error(response.error || "Failed to create battle");
      }
      
    } catch (error: unknown) {
      console.error("Failed to create battle:", error);
      
      let errorMessage = "Failed to create battle. ";
      const err = error as { code?: number | string; message?: string };
      
      if (err.code === 4001 || err.code === 'ACTION_REJECTED') {
        errorMessage = "Transaction was rejected by user.";
      } else if (err.message?.includes("insufficient funds")) {
        errorMessage += "Insufficient ETH balance in wallet.";
      } else if (err.message?.includes("user denied") || err.message?.includes("rejected")) {
        errorMessage = "Transaction was rejected by user.";
      } else {
        errorMessage += err.message || "Unknown error occurred.";
      }
      alert(errorMessage);
    } finally {
      setIsCreatingBattle(false);
    }
  };

  // Format time remaining
  const formatTimeRemaining = (battle: Battle) => {
    const now = Math.floor(Date.now() / 1000);
    const remaining = battle.expiresAt - now;
    
    if (remaining <= 0) {
      return "Expired";
    }
    
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Format stake amount
  const formatStake = (stakeWei: string) => {
    try {
      return parseFloat(ethers.formatEther(stakeWei)).toFixed(4);
    } catch {
      return "0.0000";
    }
  };

  // Format prediction price
  const formatPredictionPrice = (prediction: string) => {
    try {
      return parseFloat(prediction).toFixed(2);
    } catch {
      return "0.00";
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Price Display */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Current ETH Price
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentPrice ? (
            <div className="space-y-4">
              <div className="text-3xl font-bold">
                ${formatPythPrice(currentPrice.price, currentPrice.expo).toFixed(2)}
              </div>
              {priceHistory.length > 1 && (
                <PriceChart 
                  priceHistory={priceHistory} 
                  currentPrice={formatPythPrice(currentPrice.price, currentPrice.expo)} 
                />
              )}
            </div>
          ) : (
            <div className="text-muted-foreground">Loading price...</div>
          )}
        </CardContent>
      </Card>

      {/* Create Battle Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Create Price Prediction
          </CardTitle>
          <CardDescription>
            Predict where ETH price will be in the next few minutes. Server handles resolution automatically.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Stake Amount (ETH)</label>
              <Input
                type="number"
                step="0.001"
                min="0.001"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="0.01"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Duration (seconds)</label>
              <Input
                type="number"
                min="60"
                max="3600"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value) || 300)}
                placeholder="300"
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Price Prediction ($)</label>
            <Input
              type="number"
              step="0.01"
              min="0"
              value={prediction}
              onChange={(e) => setPrediction(e.target.value)}
              placeholder="2500.00"
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant={isHigherPrediction ? "default" : "outline"}
              onClick={() => setIsHigherPrediction(true)}
              className="flex-1"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Higher
            </Button>
            <Button
              variant={!isHigherPrediction ? "default" : "outline"}
              onClick={() => setIsHigherPrediction(false)}
              className="flex-1"
            >
              <TrendingDown className="h-4 w-4 mr-2" />
              Lower
            </Button>
          </div>

          <Button
            onClick={handleCreateBattle}
            disabled={isCreatingBattle || !user?.connectedWallet}
            className="w-full"
          >
            {isCreatingBattle ? "Creating..." : "Create Prediction Battle"}
          </Button>
        </CardContent>
      </Card>

      {/* Active Battles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Your Battles
          </CardTitle>
          <CardDescription>
            Track your active and completed prediction battles
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoadingBattles ? (
            <div className="text-center py-4">Loading battles...</div>
          ) : battles.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">
              No battles found. Create your first prediction battle above!
            </div>
          ) : (
            <div className="space-y-4">
              {battles.map((battle) => (
                <div key={battle.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Badge variant={battle.resolved ? "secondary" : "default"}>
                        {battle.resolved ? "Resolved" : "Active"}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">
                        Battle #{battle.id}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        {formatStake(battle.stake)} ETH
                      </div>
                      {!battle.resolved && (
                        <div className="text-sm text-muted-foreground">
                          {formatTimeRemaining(battle)}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Prediction:</span>
                      <div className="flex items-center gap-1">
                        {battle.isHigher ? (
                          <TrendingUp className="h-3 w-3 text-green-500" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-red-500" />
                        )}
                        ${formatPredictionPrice(battle.prediction)}
                      </div>
                    </div>
                    {battle.resolved && battle.finalPrice && (
                      <div>
                        <span className="text-muted-foreground">Final Price:</span>
                        <div>${formatPredictionPrice(battle.finalPrice)}</div>
                      </div>
                    )}
                  </div>

                  {battle.resolved && (
                    <div className="mt-2 pt-2 border-t">
                      <Badge variant={battle.winner === battle.player ? "default" : "destructive"}>
                        {battle.winner === battle.player ? "Won!" : "Lost"}
                      </Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
