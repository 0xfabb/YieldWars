"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Target, Zap } from "lucide-react";
import { ethers } from "ethers";
import { fetchLatestPrice, formatPythPrice, ETH_USD_PRICE_FEED_ID, PythPrice } from "@/lib/hermes/hermes";
import { getArenaVaultContract } from "@/lib/arenaVault/arenaVault";
import PriceChart from "@/components/price-chart";

interface Battle {
  id: bigint;
  player1: string;
  player2: string;
  stake: bigint;
  resolved: boolean;
  prediction1: bigint;
  prediction2: bigint;
  finalPrice: bigint;
  winner: string;
  participants: number;
}

interface RawBattle {
  player1: string;
  player2: string;
  stake: bigint;
  resolved: boolean;
  prediction1: bigint;
  prediction2: bigint;
  finalPrice: bigint;
  winner: string;
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
  const [isJoiningBattle, setIsJoiningBattle] = useState(false);
  const [selectedBattle, setSelectedBattle] = useState<string | null>(null);
  
  // Battle creation form
  const [stakeAmount, setStakeAmount] = useState("0.01");
  const [prediction, setPrediction] = useState("");
  
  // Individual predictions for each battle (battleId -> prediction)
  const [battlePredictions, setBattlePredictions] = useState<Map<string, string>>(new Map());
  
  // Individual resolve states for each battle (battleId -> isResolving)
  const [resolvingBattles, setResolvingBattles] = useState<Map<string, boolean>>(new Map());
  
  // Price data
  const [currentPrice, setCurrentPrice] = useState<PythPrice | null>(null);
  const [priceHistory, setPriceHistory] = useState<number[]>([]);

  // Fetch current ETH price
  const fetchCurrentPrice = useCallback(async () => {
    const price = await fetchLatestPrice(ETH_USD_PRICE_FEED_ID);
    if (price) {
      setCurrentPrice(price);
      const formattedPrice = formatPythPrice(price.price, price.expo);
      setPriceHistory(prev => [...prev.slice(-19), formattedPrice]);
    }
  }, []);

  const fetchBattles = useCallback(async () => {
    if (!user?.connectedWallet) return;
    
    setIsLoadingBattles(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum!);
      const vault = getArenaVaultContract(provider);
      
      console.log("🏗️ Fetching battles from contract:", await vault.getAddress());
      
      const allBattles = await vault.getAllBattles();
      console.log("📊 Raw battles from contract:", allBattles);
      console.log("📊 Number of battles:", allBattles.length);
      
      // Handle empty battles array
      if (!allBattles || allBattles.length === 0) {
        console.log("✨ No battles found - this is expected for a new contract!");
        setBattles([]);
        return;
      }
      
      const formattedBattles = allBattles.map((battle: RawBattle, index: number) => ({
        id: BigInt(index),
        player1: battle.player1,
        player2: battle.player2,
        stake: battle.stake,
        resolved: battle.resolved,
        prediction1: battle.prediction1,
        prediction2: battle.prediction2,
        finalPrice: battle.finalPrice,
        winner: battle.winner,
        participants: battle.player2 === ethers.ZeroAddress ? 1 : 2
      }));
      
      setBattles(formattedBattles);
    } catch (error) {
      console.error("Failed to fetch battles:", error);
    } finally {
      setIsLoadingBattles(false);
    }
  }, [user?.connectedWallet]);

  // Fetch battles on component mount and when user changes
  useEffect(() => {
    if (user?.connectedWallet) {
      fetchBattles();
      fetchCurrentPrice();
      
      // Set up polling to refresh battles every 15 seconds
      const interval = setInterval(() => {
        fetchBattles();
        fetchCurrentPrice();
      }, 15000);
      
      return () => clearInterval(interval);
    }
  }, [user?.connectedWallet, fetchBattles, fetchCurrentPrice]);

  // Create a new battle
  const handleCreateBattle = async () => {
    if (!user?.connectedWallet || !window.ethereum!) {
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
      await window.ethereum!.request({ method: 'eth_requestAccounts' });
      
      const provider = new ethers.BrowserProvider(window.ethereum!);
      const signer = await provider.getSigner();
      const vault = getArenaVaultContract(signer);
      
      console.log("Creating battle with:", {
        stakeAmount,
        prediction,
        contractAddress: vault.target
      });
      
      // Convert prediction price to int64 format (scaled by 1e8)
      const predictionScaled = Math.floor(parseFloat(prediction) * 1e8);
      
      // For int64, we need to ensure it fits in the range
      if (predictionScaled > 9223372036854775807 || predictionScaled < -9223372036854775808) {
        alert("Prediction value is too large for int64. Please enter a smaller price.");
        setIsCreatingBattle(false);
        return;
      }
      
      console.log(" Creating battle with parameters:", {
        prediction: prediction,
        predictionScaled: predictionScaled,
        stakeWei: ethers.parseEther(stakeAmount).toString()
      });
      
      const tx = await vault.createBattle(predictionScaled, {
        value: ethers.parseEther(stakeAmount)
      });
      
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Battle created successfully!");
      
      await fetchBattles();
      
      // Reset form
      setPrediction("");
      setStakeAmount("0.01");
      
      alert(" Battle created successfully! Waiting for opponents...");
      
    } catch (error: unknown) {
      console.error("Failed to create battle:", error);
      
      let errorMessage = "Failed to create battle. ";
      if (error && typeof error === 'object' && 'code' in error && (error.code === 4001 || error.code === 'ACTION_REJECTED')) {
        errorMessage = "Transaction was rejected by user.";
      } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
        if (error.message.includes("insufficient funds")) {
          errorMessage += "Insufficient ETH balance in wallet.";
        } else if (error.message.includes("user denied") || error.message.includes("rejected")) {
          errorMessage = "Transaction was rejected by user.";
        } else {
          errorMessage += error.message;
        }
      } else {
        errorMessage += "Unknown error occurred.";
      }
      alert(errorMessage);
    } finally {
      setIsCreatingBattle(false);
    }
  };

  // Join an existing battle
  const handleJoinBattle = async (battleId: bigint) => {
    if (!user?.connectedWallet || !window.ethereum!) {
      alert("Please connect your MetaMask wallet first!");
      return;
    }

    const battlePrediction = battlePredictions.get(battleId.toString()) || "";
    if (!battlePrediction || parseFloat(battlePrediction) <= 0) {
      alert("Please enter your price prediction for this battle!");
      return;
    }

    const battle = battles.find(b => b.id === battleId);
    if (!battle) return;

    setIsJoiningBattle(true);
    setSelectedBattle(battleId.toString());
    
    try {
      await window.ethereum!.request({ method: 'eth_requestAccounts' });
      
      const provider = new ethers.BrowserProvider(window.ethereum!);
      const signer = await provider.getSigner();
      const vault = getArenaVaultContract(signer);
      
      // Convert prediction price to int64 format (scaled by 1e8)
      const predictionScaled = Math.floor(parseFloat(battlePrediction) * 1e8);
      
      console.log("Joining battle:", battleId.toString(), "with prediction:", battlePrediction, "scaled:", predictionScaled);
      
      // Send transaction with ETH value matching the battle stake
      const tx = await vault.joinBattle(battleId, predictionScaled, {
        value: battle.stake
      });
      
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Joined battle successfully!");
      
      await fetchBattles();
      
      // Clear the prediction for this battle
      const newPredictions = new Map(battlePredictions);
      newPredictions.delete(battleId.toString());
      setBattlePredictions(newPredictions);
      
      alert("Joined battle successfully! Battle is now active!");
      
    } catch (error: unknown) {
      console.error("Failed to join battle:", error);
      
      let errorMessage = "Failed to join battle. ";
      if (error && typeof error === 'object' && 'code' in error && (error.code === 4001 || error.code === 'ACTION_REJECTED')) {
        errorMessage = "Transaction was rejected by user.";
      } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
        if (error.message.includes("insufficient funds")) {
          errorMessage += "Insufficient ETH balance in wallet.";
        } else if (error.message.includes("user denied") || error.message.includes("rejected")) {
          errorMessage = "Transaction was rejected by user.";
        } else if (error.message.includes("Already full")) {
          errorMessage += "This battle is already full.";
        } else if (error.message.includes("Stake mismatch")) {
          errorMessage += "ETH amount doesn't match the required stake.";
        } else {
          errorMessage += error.message;
        }
      } else {
        errorMessage += "Unknown error occurred.";
      }
      alert(errorMessage);
    } finally {
      setIsJoiningBattle(false);
      setSelectedBattle(null);
    }
  };

  // Function to fetch Pyth price update data
  const fetchPriceUpdateData = async (): Promise<string[]> => {
    try {
      const response = await fetch(
        `https://hermes.pyth.network/v2/updates/price/latest?ids[]=${ETH_USD_PRICE_FEED_ID}&encoding=hex`
      );
      
      if (!response.ok) {
        throw new Error(`Failed to fetch price data: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data.binary.data || [];
    } catch (error) {
      console.error("Error fetching price update data:", error);
      return []; // Return empty array as fallback
    }
  };

  // Resolve battle using Pyth price data
  const handleResolveBattle = async (battleId: bigint) => {
    console.log("🎯 Starting battle resolution for:", battleId.toString());
    
    if (!user?.connectedWallet || !window.ethereum!) {
      alert("Please connect your wallet first");
      return;
    }

    // Set resolving state for this specific battle
    const newResolvingBattles = new Map(resolvingBattles);
    newResolvingBattles.set(battleId.toString(), true);
    setResolvingBattles(newResolvingBattles);
    
    try {
      console.log("🔗 Requesting wallet access...");
      await window.ethereum!.request({ method: 'eth_requestAccounts' });
      
      console.log("🌐 Creating provider and signer...");
      const provider = new ethers.BrowserProvider(window.ethereum!);
      const signer = await provider.getSigner();
      const vault = getArenaVaultContract(signer);
      
      console.log("📋 Contract address:", await vault.getAddress());
      console.log("👤 Signer address:", await signer.getAddress());
      console.log("💰 Wallet balance:", ethers.formatEther(await provider.getBalance(await signer.getAddress())), "ETH");
      
      console.log("⚔️ Resolving battle:", battleId.toString());
      
      // Fetch real Pyth price update data from Hermes API
      console.log("📡 Fetching price update data from Hermes...");
      const priceUpdateData = await fetchPriceUpdateData();
      console.log("📊 Price update data fetched:", priceUpdateData);
      console.log("📊 Price update data length:", priceUpdateData.length);
      
      // Calculate the exact fee required by Pyth for this update
      console.log("Calculating Pyth update fee...");
      
      // Create Pyth contract instance to get update fee
      const pythAddress = "0x2880aB155794e7179c9eE2e38200202908C17B43"; // Pyth on Sepolia
      const pythAbi = [
        "function getUpdateFee(bytes[] calldata updateData) external view returns (uint feeAmount)"
      ];
      const pythContract = new ethers.Contract(pythAddress, pythAbi, provider);
      
      const updateFee = await pythContract.getUpdateFee(priceUpdateData);
      console.log("Pyth update fee:", ethers.formatEther(updateFee), "ETH");
      
      const tx = await vault.resolveBattle(battleId, priceUpdateData, {
        value: updateFee // Send exact fee required by Pyth
      });
      
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Battle resolved successfully!");
      
      await fetchBattles();
      alert("Battle resolved successfully!");
      
    } catch (error: unknown) {
      console.error("Failed to resolve battle:", error);
      
      let errorMessage = "Failed to resolve battle. ";
      if (error && typeof error === 'object' && 'code' in error && error.code === 4001) {
        errorMessage += "Transaction was rejected.";
      } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
        errorMessage += error.message;
      } else {
        errorMessage += "Unknown error occurred.";
      }
      alert(errorMessage);
    } finally {
      // Clear resolving state for this specific battle
      const newResolvingStates = new Map(resolvingBattles);
      newResolvingStates.delete(battleId.toString());
      setResolvingBattles(newResolvingStates);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className="space-y-6">
      {/* Current ETH Price */}
      <Card className="arena-border-glow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span>ETH Price Prediction</span>
          </CardTitle>
          <CardDescription>
            Live price data powered by Pyth Network
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PriceChart 
            priceHistory={priceHistory} 
            currentPrice={currentPrice ? formatPythPrice(currentPrice.price, currentPrice.expo) : 0}
          />
        </CardContent>
      </Card>

      {/* Create Battle */}
      <Card className="arena-border-glow">
        <CardHeader>
          <CardTitle>Create Prediction Battle</CardTitle>
          <CardDescription>
            Stake ETH and predict the future price of ETH/USD
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Stake Amount (ETH)</label>
              <Input
                type="number"
                step="0.01"
                min="0.01"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="0.01"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Price Prediction (USD)</label>
              <Input
                type="number"
                step="0.01"
                min="0"
                value={prediction}
                onChange={(e) => setPrediction(e.target.value)}
                placeholder="3500.00"
              />
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Creating a battle will send {stakeAmount} ETH directly from your wallet</p>
            <p>Make sure you have enough ETH in your wallet for the stake + gas fees</p>
          </div>
          
          <Button 
            onClick={handleCreateBattle}
            disabled={isCreatingBattle || !user?.connectedWallet || !currentPrice}
            className="w-full"
          >
            {isCreatingBattle ? "Creating..." : "Create Battle"}
          </Button>
        </CardContent>
      </Card>

      {/* Active Prediction Battles */}
      <Card className="arena-border-glow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>Prediction Battles</span>
          </CardTitle>
          <CardDescription>Join active prediction battles or view results</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoadingBattles ? (
            <div className="text-center text-muted-foreground">Loading battles...</div>
          ) : battles.length === 0 ? (
            <div className="text-center text-muted-foreground">No battles found. Create the first one!</div>
          ) : (
            <div className="space-y-4">
              {battles.map((battle) => {
                const stakeAmountEth = ethers.formatEther(battle.stake);
                const canJoin = !battle.resolved && battle.participants === 1 && 
                              battle.player1.toLowerCase() !== user?.connectedWallet?.toLowerCase();
                const isActive = !battle.resolved && battle.participants === 2;
                const isResolved = battle.resolved;
                const canResolve = isActive; // Anyone can resolve when both players joined

                return (
                  <div key={battle.id.toString()} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Badge className={isResolved ? 'bg-gray-500' : canJoin ? 'bg-blue-500' : 'bg-green-500'}>
                            {isResolved ? 'Resolved' : canJoin ? 'Open' : 'Active'}
                          </Badge>
                          <span className="text-sm font-medium">Battle #{battle.id.toString()}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Stake: {stakeAmountEth} ETH | Players: {battle.participants}/2
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        {isActive && (
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Ready to resolve</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {battle.participants === 2 && (
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <div className="font-medium">Player 1</div>
                          <div className="text-muted-foreground">
                            {battle.player1.slice(0, 6)}...{battle.player1.slice(-4)}
                          </div>
                          <div>Prediction: {formatPrice(Number(battle.prediction1) / 1e8)}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="font-medium">Player 2</div>
                          <div className="text-muted-foreground">
                            {battle.player2.slice(0, 6)}...{battle.player2.slice(-4)}
                          </div>
                          <div>Prediction: {formatPrice(Number(battle.prediction2) / 1e8)}</div>
                        </div>
                      </div>
                    )}

                    {isResolved && battle.finalPrice > BigInt(0) && (
                      <div className="text-sm space-y-1">
                        <div>Final Price: {formatPrice(Number(battle.finalPrice) / 1e8)}</div>
                      </div>
                    )}

                    {isResolved && battle.winner !== ethers.ZeroAddress && (
                      <div className="text-sm">
                        <Badge variant="outline" className="text-green-400">
                          Winner: {battle.winner.slice(0, 6)}...{battle.winner.slice(-4)}
                        </Badge>
                      </div>
                    )}

                    <div className="flex space-x-2">
                      {canJoin && (
                        <div className="flex-1 space-y-2">
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            value={battlePredictions.get(battle.id.toString()) || ""}
                            onChange={(e) => {
                              const newPredictions = new Map(battlePredictions);
                              newPredictions.set(battle.id.toString(), e.target.value);
                              setBattlePredictions(newPredictions);
                            }}
                            placeholder="Your prediction ($)"
                            className="text-sm"
                          />
                          <Button 
                            size="sm" 
                            className="w-full"
                            disabled={!user?.connectedWallet || isJoiningBattle || !battlePredictions.get(battle.id.toString())}
                            onClick={() => handleJoinBattle(battle.id)}
                          >
                            {selectedBattle === battle.id.toString() && isJoiningBattle ? "Joining..." : 
                             !user?.connectedWallet ? "Connect Wallet" :
                             "Join Battle"}
                          </Button>
                        </div>
                      )}
                      
                      {canResolve && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          disabled={resolvingBattles.get(battle.id.toString()) || !user?.connectedWallet}
                          onClick={() => handleResolveBattle(battle.id)}
                        >
                          {resolvingBattles.get(battle.id.toString()) ? "Resolving..." : "Resolve Battle"}
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
