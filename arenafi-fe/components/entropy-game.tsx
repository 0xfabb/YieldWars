"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Select component not available, using native select
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Trophy, Clock, Coins } from "lucide-react";
import { ethers } from "ethers";
import { arenaAPI } from "@/lib/arenaVault/arenaVault";

interface LuckyGame {
  id: string;
  player: string;
  entryFee: string;
  gameType: string;
  guess: number;
  minRange: number;
  maxRange: number;
  randomNumber?: number;
  resolved: boolean;
  winner: boolean;
  createdAt: number;
  expiresAt: number;
}

interface GameType {
  id: string;
  name: string;
  description: string;
  minRange: number;
  maxRange: number;
  icon: React.ReactNode;
}

interface EntropyGameProps {
  user: {
    connectedWallet?: string;
  } | null;
}

const gameTypes: GameType[] = [
  {
    id: "dice",
    name: "Dice Roll",
    description: "Guess the dice roll (1-6)",
    minRange: 1,
    maxRange: 6,
    icon: <Dice1 className="h-4 w-4" />
  },
  {
    id: "coin",
    name: "Coin Flip",
    description: "Heads (1) or Tails (0)",
    minRange: 0,
    maxRange: 1,
    icon: <Coins className="h-4 w-4" />
  },
  {
    id: "lottery",
    name: "Lucky Number",
    description: "Pick a number (1-100)",
    minRange: 1,
    maxRange: 100,
    icon: <Trophy className="h-4 w-4" />
  }
];

export default function EntropyGame({ user }: EntropyGameProps) {
  const [games, setGames] = useState<LuckyGame[]>([]);
  const [isLoadingGames, setIsLoadingGames] = useState(false);
  const [isCreatingGame, setIsCreatingGame] = useState(false);

  // Game creation form
  const [entryFee, setEntryFee] = useState("0.001");
  const [selectedGameType, setSelectedGameType] = useState("dice");
  const [guess, setGuess] = useState("1");

  // Get current game type details
  const currentGameType = gameTypes.find(gt => gt.id === selectedGameType) || gameTypes[0];

  // Fetch games from API
  const fetchGames = useCallback(async () => {
    if (!user?.connectedWallet) return;
    
    setIsLoadingGames(true);
    try {
      const response = await arenaAPI.getLuckyGames();
      if (response.success) {
        // Filter games for current user
        const userGames = (response.games || []).filter((game: LuckyGame) => 
          game.player.toLowerCase() === user.connectedWallet?.toLowerCase()
        );
        setGames(userGames);
      } else {
        console.error("Failed to fetch games:", response.error);
        setGames([]);
      }
    } catch (error) {
      console.error("Failed to fetch games:", error);
      setGames([]);
    } finally {
      setIsLoadingGames(false);
    }
  }, [user?.connectedWallet]);

  // Auto-refresh games
  useEffect(() => {
    if (user?.connectedWallet) {
      fetchGames();
      
      const interval = setInterval(() => {
        fetchGames();
      }, 5000); // Refresh every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [user?.connectedWallet, fetchGames]);

  // Create a new lucky game via API
  const handleCreateGame = async () => {
    if (!user?.connectedWallet) {
      alert("Please connect your MetaMask wallet first!");
      return;
    }

    if (!entryFee || parseFloat(entryFee) <= 0) {
      alert("Please enter a valid entry fee!");
      return;
    }

    const guessNum = parseInt(guess);
    if (isNaN(guessNum) || guessNum < currentGameType.minRange || guessNum > currentGameType.maxRange) {
      alert(`Please enter a valid guess between ${currentGameType.minRange} and ${currentGameType.maxRange}!`);
      return;
    }

    setIsCreatingGame(true);
    
    try {
      // Request payment from user's wallet
      if (!window.ethereum) {
        throw new Error("MetaMask not found");
      }

      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      // Send ETH to the server wallet for the game
      const entryFeeWei = ethers.parseEther(entryFee);
      const serverWallet = "0x1Be31A94361a391bBaFB2a4CCd704F57dc04d4bb"; // ArenaFi server wallet
      
      const tx = await signer.sendTransaction({
        to: serverWallet,
        value: entryFeeWei
      });

      console.log("Payment transaction sent:", tx.hash);
      await tx.wait();
      console.log("Payment confirmed");

      // Create game via API
      const gameData = {
        userAddress: user.connectedWallet,
        entryFee: entryFeeWei.toString(),
        gameType: selectedGameType,
        guess: guessNum
      };

      const response = await arenaAPI.createQuickLuckyGame(gameData);
      
      if (response.success) {
        console.log("Lucky game created successfully:", response.game);
        
        // Clear form
        setGuess("1");
        setEntryFee("0.001");
        
        // Refresh games
        await fetchGames();
        
        alert("Lucky game created successfully! It will auto-resolve shortly.");
      } else {
        throw new Error(response.error || "Failed to create game");
      }
      
    } catch (error: unknown) {
      console.error("Failed to create game:", error);
      
      let errorMessage = "Failed to create game. ";
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
      setIsCreatingGame(false);
    }
  };

  // Format time remaining
  const formatTimeRemaining = (game: LuckyGame) => {
    const now = Math.floor(Date.now() / 1000);
    const remaining = game.expiresAt - now;
    
    if (remaining <= 0) {
      return "Expired";
    }
    
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Format entry fee
  const formatEntryFee = (feeWei: string) => {
    try {
      return parseFloat(ethers.formatEther(feeWei)).toFixed(4);
    } catch {
      return "0.0000";
    }
  };

  // Get dice icon for number
  const getDiceIcon = (num: number) => {
    const icons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
    const IconComponent = icons[Math.min(num - 1, 5)] || Dice1;
    return <IconComponent className="h-4 w-4" />;
  };

  // Get game type icon
  const getGameTypeIcon = (gameType: string, number?: number) => {
    switch (gameType) {
      case "dice":
        return number ? getDiceIcon(number) : <Dice1 className="h-4 w-4" />;
      case "coin":
        return <Coins className="h-4 w-4" />;
      case "lottery":
        return <Trophy className="h-4 w-4" />;
      default:
        return <Dice1 className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Create Game Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Create Lucky Game
          </CardTitle>
          <CardDescription>
            Test your luck with entropy-based random number games. Server handles resolution automatically.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Entry Fee (ETH)</label>
              <Input
                type="number"
                step="0.001"
                min="0.001"
                value={entryFee}
                onChange={(e) => setEntryFee(e.target.value)}
                placeholder="0.001"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Game Type</label>
              <select 
                value={selectedGameType} 
                onChange={(e) => setSelectedGameType(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Select game type"
              >
                {gameTypes.map((gameType) => (
                  <option key={gameType.id} value={gameType.id}>
                    {gameType.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">
              Your Guess ({currentGameType.minRange}-{currentGameType.maxRange})
            </label>
            <Input
              type="number"
              min={currentGameType.minRange}
              max={currentGameType.maxRange}
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder={currentGameType.minRange.toString()}
            />
            <div className="text-xs text-muted-foreground mt-1">
              {currentGameType.description}
            </div>
          </div>

          <Button
            onClick={handleCreateGame}
            disabled={isCreatingGame || !user?.connectedWallet}
            className="w-full"
          >
            {isCreatingGame ? "Creating..." : "Create Lucky Game"}
          </Button>
        </CardContent>
      </Card>

      {/* Active Games */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Your Lucky Games
          </CardTitle>
          <CardDescription>
            Track your active and completed lucky games
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoadingGames ? (
            <div className="text-center py-4">Loading games...</div>
          ) : games.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground">
              No games found. Create your first lucky game above!
            </div>
          ) : (
            <div className="space-y-4">
              {games.map((game) => (
                <div key={game.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Badge variant={game.resolved ? "secondary" : "default"}>
                        {game.resolved ? "Resolved" : "Active"}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">
                        {gameTypes.find(gt => gt.id === game.gameType)?.name || game.gameType}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        {formatEntryFee(game.entryFee)} ETH
                      </div>
                      {!game.resolved && (
                        <div className="text-sm text-muted-foreground">
                          {formatTimeRemaining(game)}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Your Guess:</span>
                      <div className="flex items-center gap-1">
                        {getGameTypeIcon(game.gameType, game.guess)}
                        {game.guess}
                      </div>
                    </div>
                    {game.resolved && game.randomNumber !== undefined && (
                      <div>
                        <span className="text-muted-foreground">Result:</span>
                        <div className="flex items-center gap-1">
                          {getGameTypeIcon(game.gameType, game.randomNumber)}
                          {game.randomNumber}
                        </div>
                      </div>
                    )}
                  </div>

                  {game.resolved && (
                    <div className="mt-2 pt-2 border-t">
                      <Badge variant={game.winner ? "default" : "destructive"}>
                        {game.winner ? "Won!" : "Lost"}
                      </Badge>
                      {game.winner && (
                        <div className="text-sm text-muted-foreground mt-1">
                          Prize: {parseFloat(ethers.formatEther(game.entryFee)) * 2} ETH
                        </div>
                      )}
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
