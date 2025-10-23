"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Trophy, Clock, Users, Coins } from "lucide-react";
import { ethers } from "ethers";
import { getArenaVaultContract } from "@/lib/arenaVault/arenaVault";

interface EntropyGame {
  gameId: bigint;
  creator: string;
  entryFee: bigint;
  prizePool: bigint;
  minGuess: bigint;
  maxGuess: bigint;
  winningNumber: bigint;
  winner: string;
  isActive: boolean;
  isSettled: boolean;
  startTime: bigint;
  endTime: bigint;
  playerCount: bigint;
}


interface EntropyGameProps {
  user: {
    connectedWallet?: string;
  } | null;
}

export default function EntropyGame({ user }: EntropyGameProps) {
  const [games, setGames] = useState<EntropyGame[]>([]);
  const [isLoadingGames, setIsLoadingGames] = useState(false);
  const [selectedGame, setSelectedGame] = useState<EntropyGame | null>(null);
  const [playerGuess, setPlayerGuess] = useState("");
  const [isSubmittingGuess, setIsSubmittingGuess] = useState(false);
  const [isCreatingGame, setIsCreatingGame] = useState(false);
  const [isSettlingGame, setIsSettlingGame] = useState(false);

  // Game creation form
  const [newGameEntryFee, setNewGameEntryFee] = useState("0.001");
  const [newGameMinGuess, setNewGameMinGuess] = useState("1");
  const [newGameMaxGuess, setNewGameMaxGuess] = useState("1000");
  const [newGameDuration, setNewGameDuration] = useState("300"); // 5 minutes


  // Fetch active games
  const fetchActiveGames = useCallback(async () => {
    if (!user?.connectedWallet) return;

    setIsLoadingGames(true);
    try {
      const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/f302b612a16e4208b8f64973e42e3b84");
      const vault = getArenaVaultContract(provider);
      
      // Get total number of games
      const gameCount = await vault.getLuckyGameCount();
      const games: EntropyGame[] = [];
      
      // Fetch each game using split functions
      for (let i = 0; i < Number(gameCount); i++) {
        try {
          const [basicData, detailsData, timingData] = await Promise.all([
            vault.getLuckyGameBasic(i),
            vault.getLuckyGameDetails(i),
            vault.getLuckyGameTiming(i)
          ]);
          
          games.push({
            gameId: basicData.gameId,
            creator: basicData.creator,
            entryFee: basicData.entryFee,
            prizePool: basicData.prizePool,
            playerCount: basicData.playerCount,
            minGuess: detailsData.minGuess,
            maxGuess: detailsData.maxGuess,
            winningNumber: detailsData.winningNumber,
            winner: detailsData.winner,
            isActive: detailsData.isActive,
            isSettled: detailsData.isSettled,
            startTime: timingData.startTime,
            endTime: timingData.endTime
          });
        } catch (error) {
          console.error(`Failed to fetch game ${i}:`, error);
        }
      }

      setGames(games);
    } catch (error) {
      console.error("Failed to fetch games:", error);
    } finally {
      setIsLoadingGames(false);
    }
  }, [user?.connectedWallet]);

  useEffect(() => {
    if (user?.connectedWallet) {
      fetchActiveGames();
      
      // Set up polling to refresh games every 15 seconds
      const interval = setInterval(() => {
        fetchActiveGames();
      }, 15000);
      
      return () => clearInterval(interval);
    }
  }, [user?.connectedWallet, fetchActiveGames]);

  // Create new game
  const handleCreateGame = async () => {
    if (!user?.connectedWallet || !window.ethereum) {
      alert("Please connect your MetaMask wallet first!");
      return;
    }

    if (!newGameEntryFee || parseFloat(newGameEntryFee) <= 0) {
      alert("Please enter a valid entry fee!");
      return;
    }

    if (parseInt(newGameMinGuess) >= parseInt(newGameMaxGuess)) {
      alert("Max guess must be greater than min guess!");
      return;
    }

    setIsCreatingGame(true);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const vault = getArenaVaultContract(signer);

      console.log("Creating entropy game:", {
        entryFee: newGameEntryFee,
        minGuess: newGameMinGuess,
        maxGuess: newGameMaxGuess,
        duration: newGameDuration
      });

      const tx = await vault.createLuckyGame(
        ethers.parseEther(newGameEntryFee),
        BigInt(newGameMinGuess),
        BigInt(newGameMaxGuess),
        BigInt(newGameDuration),
        {
          value: ethers.parseEther(newGameEntryFee)
        }
      );
      
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Game created successfully!");
      
      await fetchActiveGames();
      alert("🎮 Lucky Number game created successfully!");
      
    } catch (error) {
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

  // Submit guess
  const handleSubmitGuess = async (game: EntropyGame) => {
    if (!user?.connectedWallet || !window.ethereum) {
      alert("Please connect your MetaMask wallet first!");
      return;
    }

    if (!playerGuess || parseInt(playerGuess) < Number(game.minGuess) || parseInt(playerGuess) > Number(game.maxGuess)) {
      alert(`Please enter a guess between ${game.minGuess.toString()} and ${game.maxGuess.toString()}`);
      return;
    }

    const entryFeeEth = ethers.formatEther(game.entryFee);

    setIsSubmittingGuess(true);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const vault = getArenaVaultContract(signer);

      console.log("Submitting guess:", {
        gameId: game.gameId.toString(),
        guess: playerGuess,
        entryFee: entryFeeEth
      });

      const tx = await vault.joinLuckyGame(
        game.gameId,
        BigInt(playerGuess),
        {
          value: game.entryFee
        }
      );
      
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Guess submitted successfully!");
      
      await fetchActiveGames();
      setPlayerGuess("");
      alert("🎯 Guess submitted successfully!");
      
    } catch (error) {
      console.error("Failed to submit guess:", error);
      
      let errorMessage = "Failed to submit guess. ";
      if (error && typeof error === 'object' && 'code' in error && (error.code === 4001 || error.code === 'ACTION_REJECTED')) {
        errorMessage = "Transaction was rejected by user.";
      } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
        if (error.message.includes("insufficient funds")) {
          errorMessage += "Insufficient ETH balance in wallet.";
        } else if (error.message.includes("user denied") || error.message.includes("rejected")) {
          errorMessage = "Transaction was rejected by user.";
        } else if (error.message.includes("Already joined")) {
          errorMessage += "You have already joined this game.";
        } else if (error.message.includes("Game has ended")) {
          errorMessage += "This game has already ended.";
        } else {
          errorMessage += error.message;
        }
      } else {
        errorMessage += "Unknown error occurred.";
      }
      alert(errorMessage);
    } finally {
      setIsSubmittingGuess(false);
    }
  };

  // Settle game with Pyth Entropy
  const handleSettleGame = async (game: EntropyGame) => {
    if (!user?.connectedWallet || !window.ethereum) {
      alert("Please connect your MetaMask wallet first!");
      return;
    }

    setIsSettlingGame(true);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const vault = getArenaVaultContract(signer);

      console.log("Requesting random number for game:", {
        gameId: game.gameId.toString()
      });

      // Request random number (uses fallback randomness on Sepolia)
      const tx = await vault.requestRandomNumber(game.gameId, {
        value: ethers.parseEther("0") // No fee required for fallback randomness
      });
      
      console.log("Transaction sent:", tx.hash);
      await tx.wait();
      console.log("Random number requested successfully!");
      
      await fetchActiveGames();
      alert("🎲 Random number generated! The game has been settled automatically.");
      
    } catch (error) {
      console.error("Failed to settle game:", error);
      
      let errorMessage = "Failed to request random number. ";
      if (error && typeof error === 'object' && 'code' in error && (error.code === 4001 || error.code === 'ACTION_REJECTED')) {
        errorMessage = "Transaction was rejected by user.";
      } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
        if (error.message.includes("insufficient funds")) {
          errorMessage += "Insufficient ETH balance for entropy fee.";
        } else if (error.message.includes("user denied") || error.message.includes("rejected")) {
          errorMessage = "Transaction was rejected by user.";
        } else if (error.message.includes("Game has not ended")) {
          errorMessage += "Game is still active. Wait for it to end first.";
        } else if (error.message.includes("Random number already requested")) {
          errorMessage += "Random number has already been requested for this game.";
        } else {
          errorMessage += error.message;
        }
      } else {
        errorMessage += "Unknown error occurred.";
      }
      alert(errorMessage);
    } finally {
      setIsSettlingGame(false);
    }
  };

  // Calculate time remaining
  const getTimeRemaining = (endTime: bigint) => {
    const now = Math.floor(Date.now() / 1000);
    const remaining = Number(endTime) - now;
    if (remaining <= 0) return "Ended";
    
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Get random dice icon
  const getDiceIcon = (gameId: bigint) => {
    const diceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
    const index = Number(gameId) % diceIcons.length;
    const DiceIcon = diceIcons[index];
    return <DiceIcon className="w-5 h-5" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold arena-text-glow flex items-center justify-center gap-2">
          <Dice3 className="w-6 h-6 text-purple-400" />
          Lucky Number Arena
        </h2>
        <p className="text-muted-foreground">
          Powered by Pyth Entropy - Provably fair random number generation
        </p>
      </div>

      {/* Create Game Section */}
      <Card className="arena-border-glow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Dice1 className="w-5 h-5 text-purple-400" />
            Create New Game
          </CardTitle>
          <CardDescription>
            Start a new guessing game with Pyth Entropy randomness
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium">Entry Fee (ETH)</label>
              <Input
                type="number"
                step="0.001"
                min="0.001"
                value={newGameEntryFee}
                onChange={(e) => setNewGameEntryFee(e.target.value)}
                placeholder="0.001"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Min Guess</label>
              <Input
                type="number"
                min="1"
                value={newGameMinGuess}
                onChange={(e) => setNewGameMinGuess(e.target.value)}
                placeholder="1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Max Guess</label>
              <Input
                type="number"
                min="2"
                value={newGameMaxGuess}
                onChange={(e) => setNewGameMaxGuess(e.target.value)}
                placeholder="1000"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Duration (sec)</label>
              <Input
                type="number"
                min="60"
                value={newGameDuration}
                onChange={(e) => setNewGameDuration(e.target.value)}
                placeholder="300"
              />
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Creating a game requires {newGameEntryFee} ETH from your wallet</p>
            <p className="text-muted-foreground">
              Make sure you have enough ETH in your wallet for the entry fee + gas fees
            </p>
          </div>

          <Button 
            onClick={handleCreateGame}
            disabled={isCreatingGame || !user?.connectedWallet}
            className="w-full arena-glow"
          >
            {isCreatingGame ? "Creating..." : "Create Game"}
          </Button>
        </CardContent>
      </Card>

      {/* Active Games */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          Active Games
        </h3>

        {isLoadingGames ? (
          <div className="text-center py-8">
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
            <p className="text-muted-foreground">Loading games...</p>
          </div>
        ) : games.length === 0 ? (
          <Card className="text-center py-8">
            <CardContent>
              <Dice6 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">No active games found</p>
              <p className="text-sm text-muted-foreground">Create the first game to get started!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {games.map((game) => {
              const timeRemaining = getTimeRemaining(game.endTime);
              const isEnded = timeRemaining === "Ended";
              const prizePoolEth = ethers.formatEther(game.prizePool);
              const entryFeeEth = ethers.formatEther(game.entryFee);

              return (
                <Card key={game.gameId.toString()} className="arena-border-glow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        {getDiceIcon(game.gameId)}
                        <div>
                          <CardTitle className="text-lg">Game #{game.gameId.toString()}</CardTitle>
                          <CardDescription>
                            Guess between {game.minGuess.toString()} - {game.maxGuess.toString()}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant={isEnded ? "destructive" : "default"}>
                        {isEnded ? "Ended" : "Active"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Game Stats */}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Coins className="w-4 h-4 text-yellow-500" />
                        <span>Prize: {prizePoolEth} ETH</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span>Players: {game.playerCount.toString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-purple-500" />
                        <span>{timeRemaining}</span>
                      </div>
                    </div>

                    {/* Progress bar for time */}
                    {!isEnded && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Time Remaining</span>
                          <span>{timeRemaining}</span>
                        </div>
                        <Progress 
                          value={Math.max(0, (Number(game.endTime) - Math.floor(Date.now() / 1000)) / (Number(game.endTime) - Number(game.startTime)) * 100)} 
                          className="h-2"
                        />
                      </div>
                    )}

                    {/* Guess Input */}
                    {!isEnded && (
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Input
                            type="number"
                            min={game.minGuess.toString()}
                            max={game.maxGuess.toString()}
                            value={selectedGame?.gameId === game.gameId ? playerGuess : ""}
                            onChange={(e) => {
                              setSelectedGame(game);
                              setPlayerGuess(e.target.value);
                            }}
                            placeholder={`Enter guess (${game.minGuess.toString()}-${game.maxGuess.toString()})`}
                            className="flex-1"
                          />
                          <Button
                            onClick={() => handleSubmitGuess(game)}
                            disabled={isSubmittingGuess || !user?.connectedWallet}
                            className="arena-glow"
                          >
                            {isSubmittingGuess ? "Submitting..." : "Submit Guess"}
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Entry fee: {entryFeeEth} ETH | Range: {game.minGuess.toString()}-{game.maxGuess.toString()}
                        </p>
                      </div>
                    )}

                    {/* Settle Game Button */}
                    {isEnded && !game.isSettled && (
                      <Button
                        onClick={() => handleSettleGame(game)}
                        disabled={isSettlingGame}
                        className="w-full arena-glow"
                        variant="outline"
                      >
                        {isSettlingGame ? "Settling with Pyth Entropy..." : "🎲 Settle Game with Pyth Entropy"}
                      </Button>
                    )}

                    {/* Winner Display */}
                    {game.isSettled && game.winner !== ethers.ZeroAddress && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-green-400">
                          <Trophy className="w-4 h-4" />
                          <span className="font-medium">Winner!</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {game.winner.slice(0, 6)}...{game.winner.slice(-4)} won {prizePoolEth} ETH
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Winning number: {game.winningNumber.toString()}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
