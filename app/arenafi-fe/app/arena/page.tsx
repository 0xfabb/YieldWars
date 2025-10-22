"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gamepad2, 
  Wallet, 
  Trophy, 
  Coins, 
  Zap, 
  Users, 
  ArrowLeft,
  Crown,
  Target,
  Flame,
  Sparkles
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { getArenaVaultContract } from "@/lib/arenaVault/arenaVault";

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      isMetaMask?: boolean;
    };
  }
}

interface User {
  id: string; 
  name: string;
  email: string;
  walletAddress: string;
  connectedWallet: string;
}

interface Battle {
  id: number;
  player1: string;
  player2: string;
  stake: string;
  winner: string;
  status: number; // 0 = Open, 1 = Ongoing, 2 = Completed
  stakeAmount?: string; // For display
  participants?: number; // For display
  maxParticipants?: number; // For display
  creator?: string; // For display
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  address: string;
  wins: number;
  totalEarnings: string;
  streak: number;
}

export default function BattleArena() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [balance, setBalance] = useState<string | null>(null);
  const [vaultBalance, setVaultBalance] = useState<string | null>(null);
  const [isLoadingBalances, setIsLoadingBalances] = useState(false);
  const [battles, setBattles] = useState<Battle[]>([]);
  const [isLoadingBattles, setIsLoadingBattles] = useState(false);
  const [isJoiningBattle, setIsJoiningBattle] = useState(false);
  const [selectedBattle, setSelectedBattle] = useState<string | null>(null);
  const [battleAnimation, setBattleAnimation] = useState(false);
  const [winnerAnimation, setWinnerAnimation] = useState(false);
  const [stakeAmount, setStakeAmount] = useState<string>("0.1");
  const [isCreatingBattle, setIsCreatingBattle] = useState(false);
  const [isSettlingBattle, setIsSettlingBattle] = useState(false);
  
  const router = useRouter();
  const supabase = createClient();

  const mockLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'CryptoKing', address: '0x123...abc', wins: 15, totalEarnings: '2.45', streak: 5 },
    { rank: 2, name: 'EthWarrior', address: '0x456...def', wins: 12, totalEarnings: '1.89', streak: 3 },
    { rank: 3, name: 'DeFiMaster', address: '0x789...ghi', wins: 8, totalEarnings: '1.23', streak: 2 },
  ];

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/auth/login");
        return;
      }

      try {
        const email = session.user.email;
        const response = await fetch(`/api/user/${email}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router, supabase.auth]);

  // Fetch wallet balance from Sepolia
  const fetchWalletBalance = useCallback(async () => {
    if (!user?.connectedWallet) return;
    
    try {
      const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/f302b612a16e4208b8f64973e42e3b84");
      const balanceWei = await provider.getBalance(user.connectedWallet);
      const balanceEth = ethers.formatEther(balanceWei);
      setBalance(balanceEth);
      console.log(`Wallet Balance: ${balanceEth} ETH`);
    } catch (error) {
      console.error("Error fetching wallet balance:", error);
    }
  }, [user?.connectedWallet]);

  // Fetch vault balance from contract
  const fetchVaultBalance = useCallback(async () => {
    if (!user?.connectedWallet) return;
    
    try {
      const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/f302b612a16e4208b8f64973e42e3b84");
      const vault = getArenaVaultContract(provider);
      const balance = await vault.getBalance(user.connectedWallet);
      const balanceEth = ethers.formatEther(balance);
      setVaultBalance(balanceEth);
      console.log("Vault balance:", balanceEth);
    } catch (error) {
      console.error("Failed to fetch vault balance:", error);
    }
  }, [user?.connectedWallet]);

  // Fetch both balances when user connects
  const fetchAllBalances = useCallback(async () => {
    if (!user?.connectedWallet) return;
    
    setIsLoadingBalances(true);
    try {
      await Promise.all([
        fetchWalletBalance(),
        fetchVaultBalance()
      ]);
    } finally {
      setIsLoadingBalances(false);
    }
  }, [user?.connectedWallet, fetchWalletBalance, fetchVaultBalance]);

  // Fetch battles from contract
  const fetchBattles = useCallback(async () => {
    if (!user?.connectedWallet) return;
    
    setIsLoadingBattles(true);
    try {
      const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/f302b612a16e4208b8f64973e42e3b84");
      const vault = getArenaVaultContract(provider);
      
      // Get all battles from contract
      const allBattles = await vault.getAllBattles();
      console.log("Raw battles from contract:", allBattles);
      
      // Transform contract data to our interface
      const transformedBattles: Battle[] = allBattles.map((battle: [string, string, bigint, string, number], index: number) => ({
        id: index,
        player1: battle[0],
        player2: battle[1],
        stake: ethers.formatEther(battle[2]),
        winner: battle[3],
        status: battle[4],
        // Display properties
        stakeAmount: ethers.formatEther(battle[2]),
        participants: battle[1] === ethers.ZeroAddress ? 1 : 2,
        maxParticipants: 2,
        creator: battle[0]
      }));
      
      setBattles(transformedBattles);
      console.log("Transformed battles:", transformedBattles);
    } catch (error) {
      console.error("Failed to fetch battles:", error);
    } finally {
      setIsLoadingBattles(false);
    }
  }, [user?.connectedWallet]);

  // Fetch balances and battles when user is loaded
  useEffect(() => {
    if (user?.connectedWallet) {
      fetchAllBalances();
      fetchBattles();
    }
  }, [user?.connectedWallet, fetchAllBalances, fetchBattles]);

  const handleJoinBattle = async (battleId: number) => {
    if (!user?.connectedWallet || !window.ethereum) {
      alert("Please connect your MetaMask wallet first!");
      return;
    }

    setIsJoiningBattle(true);
    setSelectedBattle(battleId.toString());
    setBattleAnimation(true);

    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // Create provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const vault = getArenaVaultContract(signer);
      
      console.log("Joining battle:", battleId);
      
      // Join the battle
      const tx = await vault.joinBattle(battleId);
      console.log("Transaction sent:", tx.hash);
      
      // Wait for transaction confirmation
      await tx.wait();
      console.log("Battle joined successfully!");
      
      // Refresh battles and balances
      await Promise.all([
        fetchBattles(),
        fetchAllBalances()
      ]);
      
      setBattleAnimation(false);
      setWinnerAnimation(true);
      
      setTimeout(() => {
        setWinnerAnimation(false);
        setIsJoiningBattle(false);
        setSelectedBattle(null);
        alert("🎮 Battle joined successfully! Good luck!");
      }, 2000);
      
    } catch (error: unknown) {
      console.error("Failed to join battle:", error);
      setBattleAnimation(false);
      setIsJoiningBattle(false);
      setSelectedBattle(null);
      
      let errorMessage = "Failed to join battle. ";
      if (error && typeof error === 'object' && 'code' in error && (error.code === 4001 || error.code === 'ACTION_REJECTED')) {
        errorMessage = "Transaction was rejected by user.";
      } else if (error && typeof error === 'object' && 'reason' in error && error.reason === 'rejected') {
        errorMessage = "Transaction was rejected by user.";
      } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
        if (error.message.includes("insufficient") || error.message.includes("Not enough balance")) {
          errorMessage += "Insufficient balance in vault. Please deposit more ETH.";
        } else if (error.message.includes("user denied") || error.message.includes("rejected")) {
          errorMessage = "Transaction was rejected by user.";
        } else if (error.message.includes("Battle not open")) {
          errorMessage += "This battle is no longer available to join.";
        } else if (error.message.includes("Cannot join own battle")) {
          errorMessage += "You cannot join your own battle.";
        } else {
          errorMessage += error.message;
        }
      } else {
        errorMessage += "Unknown error occurred.";
      }
      alert(errorMessage);
    }
  };

  const handleCreateBattle = async () => {
    if (!user?.connectedWallet || !window.ethereum) {
      alert("Please connect your MetaMask wallet first!");
      return;
    }

    if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
      alert("Please enter a valid stake amount!");
      return;
    }

    // Check vault balance before attempting transaction
    if (!vaultBalance || parseFloat(vaultBalance) < parseFloat(stakeAmount)) {
      alert(`Insufficient vault balance! You have ${vaultBalance || '0'} ETH in vault but need ${stakeAmount} ETH. Please deposit more ETH first.`);
      return;
    }

    setIsCreatingBattle(true);
    
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // Create provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const vault = getArenaVaultContract(signer);
      
      const stakeWei = ethers.parseEther(stakeAmount);
      console.log("Creating battle with stake:", stakeAmount, "ETH (", stakeWei.toString(), "wei)");
      console.log("Current vault balance:", vaultBalance, "ETH");
      
      // Check balance again from contract to be sure
      const contractBalance = await vault.balances(user.connectedWallet);
      const contractBalanceEth = ethers.formatEther(contractBalance);
      console.log("Contract balance check:", contractBalanceEth, "ETH");
      
      if (parseFloat(contractBalanceEth) < parseFloat(stakeAmount)) {
        throw new Error(`Insufficient vault balance. Contract shows ${contractBalanceEth} ETH but need ${stakeAmount} ETH.`);
      }
      
      // Estimate gas first to catch errors early
      try {
        const gasEstimate = await vault.createBattle.estimateGas(stakeWei);
        console.log("Gas estimate:", gasEstimate.toString());
      } catch (gasError) {
        console.error("Gas estimation failed:", gasError);
        throw new Error("Transaction would fail. Please check your vault balance and try again.");
      }
      
      // Create the battle
      const tx = await vault.createBattle(stakeWei);
      console.log("Transaction sent:", tx.hash);
      
      // Wait for transaction confirmation
      await tx.wait();
      console.log("Battle created successfully!");
      
      // Refresh battles and balances
      await Promise.all([
        fetchBattles(),
        fetchAllBalances()
      ]);
      
      setIsCreatingBattle(false);
      alert("🎮 Battle created successfully! Waiting for opponents...");
      
    } catch (error: unknown) {
      console.error("Failed to create battle:", error);
      setIsCreatingBattle(false);
      
      let errorMessage = "Failed to create battle. ";
      if (error && typeof error === 'object' && 'code' in error && (error.code === 4001 || error.code === 'ACTION_REJECTED')) {
        errorMessage = "Transaction was rejected by user.";
      } else if (error && typeof error === 'object' && 'reason' in error && error.reason === 'rejected') {
        errorMessage = "Transaction was rejected by user.";
      } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
        if (error.message.includes("insufficient") || error.message.includes("Not enough balance")) {
          errorMessage += "Insufficient balance in vault. Please deposit more ETH.";
        } else if (error.message.includes("user denied") || error.message.includes("rejected")) {
          errorMessage = "Transaction was rejected by user.";
        } else if (error.message.includes("missing revert data") || error.message.includes("CALL_EXCEPTION")) {
          errorMessage += "Contract rejected the transaction. This usually means insufficient vault balance or invalid parameters. Please check your vault balance and try again.";
        } else if (error.message.includes("estimateGas")) {
          errorMessage += "Transaction would fail. Please check your vault balance and ensure you have enough ETH deposited.";
        } else {
          errorMessage += error.message;
        }
      } else {
        errorMessage += "Unknown error occurred.";
      }
      alert(errorMessage);
    }
  };

  // Settle battle function (for testing)
  const handleSettleBattle = async (battleId: number) => {
    if (!user?.connectedWallet || !window.ethereum) {
      alert("Please connect your MetaMask wallet first!");
      return;
    }

    setIsSettlingBattle(true);
    
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // Create provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const vault = getArenaVaultContract(signer);
      
      console.log("Settling battle:", battleId);
      
      // Settle the battle
      const tx = await vault.settleBattle(battleId);
      console.log("Transaction sent:", tx.hash);
      
      // Wait for transaction confirmation
      await tx.wait();
      console.log("Battle settled successfully!");
      
      // Refresh battles and balances
      await Promise.all([
        fetchBattles(),
        fetchAllBalances()
      ]);
      
      alert("🏆 Battle settled successfully!");
      
    } catch (error: unknown) {
      console.error("Failed to settle battle:", error);
      
      let errorMessage = "Failed to settle battle. ";
      if (error && typeof error === 'object' && 'code' in error && error.code === 4001) {
        errorMessage += "Transaction was rejected.";
      } else {
        errorMessage += (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') ? error.message : "Unknown error occurred.";
      }
      alert(errorMessage);
    } finally {
      setIsSettlingBattle(false);
    }
  };

  // Deposit to vault function
  const handleDepositToVault = async (amount: string) => {
    if (!user?.connectedWallet || !window.ethereum) {
      alert("Please connect your MetaMask wallet first!");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid deposit amount!");
      return;
    }

    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // Create provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const vault = getArenaVaultContract(signer);
      
      const depositWei = ethers.parseEther(amount);
      console.log("Depositing to vault:", amount, "ETH");
      
      // Deposit to vault
      const tx = await vault.deposit({ value: depositWei });
      console.log("Transaction sent:", tx.hash);
      
      // Wait for transaction confirmation
      await tx.wait();
      console.log("Deposit successful!");
      
      // Refresh balances
      await fetchAllBalances();
      
      alert(`💰 Successfully deposited ${amount} ETH to your vault!`);
      
    } catch (error: unknown) {
      console.error("Failed to deposit:", error);
      
      let errorMessage = "Failed to deposit. ";
      if (error && typeof error === 'object' && 'code' in error && error.code === 4001) {
        errorMessage += "Transaction was rejected.";
      } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string' && error.message.includes("insufficient")) {
        errorMessage += "Insufficient wallet balance.";
      } else {
        errorMessage += (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') ? error.message : "Unknown error occurred.";
      }
      alert(errorMessage);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen arena-gradient flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center arena-glow mx-auto mb-4 animate-pulse">
            <Gamepad2 className="w-8 h-8 text-primary-foreground" />
          </div>
          <p className="text-muted-foreground">Loading the Arena...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen arena-gradient flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Please login to access the Battle Arena</p>
          <Button onClick={() => router.push("/auth/login")}>Login</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen arena-gradient relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/40 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-border/40 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.push('/dashboard')} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center arena-glow">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl sm:text-2xl font-bold arena-text-glow">Battle Arena</span>
            </div>
          </div>
          
          {/* HUD - Top Bar */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Wallet className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Wallet:</span>
                <span className={`font-bold text-primary ${isLoadingBalances ? 'animate-pulse' : ''}`}>
                  {isLoadingBalances ? 'Loading...' : balance ? parseFloat(balance).toFixed(4) : '0.00'} ETH
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Coins className="w-4 h-4 text-yellow-500" />
                <span className="text-muted-foreground">Vault:</span>
                <span className={`font-bold text-yellow-500 ${isLoadingBalances ? 'animate-pulse' : ''}`}>
                  {isLoadingBalances ? 'Loading...' : vaultBalance ? parseFloat(vaultBalance).toFixed(4) : '0.00'} ETH
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="arena-border-glow text-xs"
                onClick={() => {
                  const amount = prompt("Enter amount to deposit (ETH):", "0.1");
                  if (amount) handleDepositToVault(amount);
                }}
              >
                 Deposit
              </Button>
              <Badge variant="secondary" className="arena-glow">
                <Crown className="w-3 h-3 mr-1" />
                Rank #--
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Battle Queue/Lobby Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="arena-border-glow bg-background/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Battle Queue</span>
                </CardTitle>
                <CardDescription>
                  Join an active battle or create your own
                  <br />
                  <span className="text-xs text-muted-foreground">
                     Battles use your vault balance, not wallet balance
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Create Battle */}
                <div className="p-3 border border-primary/20 rounded-lg bg-primary/5">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">Stake Amount (ETH)</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      className="w-full p-2 bg-muted rounded text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter stake amount"
                      aria-label="Stake amount in ETH"
                    />
                    <Button 
                      onClick={handleCreateBattle}
                      disabled={isCreatingBattle || !user?.connectedWallet || !vaultBalance || parseFloat(vaultBalance) < parseFloat(stakeAmount)}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs arena-glow"
                    >
                      {isCreatingBattle ? "Creating..." : 
                       !user?.connectedWallet ? "Connect Wallet" :
                       !vaultBalance || parseFloat(vaultBalance) < parseFloat(stakeAmount) ? "Insufficient Vault Balance" :
                       "Create Battle"}
                    </Button>
                    {vaultBalance && parseFloat(vaultBalance) < parseFloat(stakeAmount) && (
                      <p className="text-xs text-red-400 mt-1">
                         Deposit more ETH to your vault to create this battle
                      </p>
                    )}
                    <div className="text-xs text-muted-foreground mt-1 space-y-1">
                      <p> Creating a battle will deduct {stakeAmount} ETH from your vault balance</p>
                      <p className={`${vaultBalance && parseFloat(vaultBalance) >= parseFloat(stakeAmount) ? 'text-green-400' : 'text-red-400'}`}>
                         Vault: {vaultBalance || '0'} ETH | Required: {stakeAmount} ETH
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active Battles */}
                <div className="space-y-2">
                  {isLoadingBattles ? (
                    <div className="text-center py-4">
                      <div className="animate-pulse text-sm text-muted-foreground">Loading battles...</div>
                    </div>
                  ) : battles.length === 0 ? (
                    <div className="text-center py-4">
                      <div className="text-sm text-muted-foreground">No battles available</div>
                      <div className="text-xs text-muted-foreground mt-1">Create the first battle!</div>
                    </div>
                  ) : (
                    battles.map((battle) => {
                      const statusText = battle.status === 0 ? 'Open' : battle.status === 1 ? 'Ongoing' : 'Completed';
                      const statusVariant = battle.status === 0 ? 'secondary' : battle.status === 1 ? 'default' : 'outline';
                      const canJoin = battle.status === 0 && battle.player1.toLowerCase() !== user?.connectedWallet?.toLowerCase();
                      
                      return (
                        <div key={battle.id} className="p-3 border border-border/40 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center space-x-2">
                              <Coins className="w-4 h-4 text-yellow-500" />
                              <span className="font-bold text-yellow-500">{parseFloat(battle.stakeAmount || '0').toFixed(4)} ETH</span>
                            </div>
                            <Badge variant={statusVariant as "secondary" | "default" | "outline"}>
                              {statusText}
                            </Badge>
                          </div>
                          <div className="text-xs text-muted-foreground mb-2">
                            <div>Creator: {battle.creator?.slice(0, 6)}...{battle.creator?.slice(-4)}</div>
                            <div>{battle.participants}/{battle.maxParticipants} players</div>
                            {battle.status === 1 && battle.winner !== ethers.ZeroAddress && (
                              <div className="text-green-400">Winner: {battle.winner.slice(0, 6)}...{battle.winner.slice(-4)}</div>
                            )}
                          </div>
                          <div className="space-y-1">
                            <Button 
                              size="sm" 
                              className="w-full text-xs"
                              disabled={!canJoin || isJoiningBattle || !user?.connectedWallet}
                              onClick={() => handleJoinBattle(battle.id)}
                            >
                              {selectedBattle === battle.id.toString() && isJoiningBattle ? "Joining..." : 
                               !user?.connectedWallet ? "Connect Wallet" :
                               battle.status !== 0 ? `Battle ${statusText}` :
                               battle.player1.toLowerCase() === user?.connectedWallet?.toLowerCase() ? "Your Battle" :
                               "Join Battle"}
                            </Button>
                            {battle.status === 1 && battle.participants === 2 && (
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="w-full text-xs"
                                disabled={isSettlingBattle || !user?.connectedWallet}
                                onClick={() => handleSettleBattle(battle.id)}
                              >
                                {isSettlingBattle ? "Settling..." : "🏆 Settle Battle"}
                              </Button>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Mini Leaderboard */}
            <Card className="arena-border-glow bg-background/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span>Top Warriors</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {mockLeaderboard.slice(0, 3).map((entry) => (
                  <div key={entry.rank} className="flex items-center justify-between p-2 rounded bg-muted/20">
                    <div className="flex items-center space-x-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        entry.rank === 1 ? 'bg-yellow-500 text-black' : 
                        entry.rank === 2 ? 'bg-gray-400 text-black' : 
                        'bg-orange-600 text-white'
                      }`}>
                        {entry.rank}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{entry.name}</div>
                        <div className="text-xs text-muted-foreground">{entry.wins} wins</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-primary">{entry.totalEarnings} ETH</div>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <Flame className="w-3 h-3 mr-1 text-orange-500" />
                        {entry.streak}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Arena Center - Main Battle Area */}
          <div className="lg:col-span-3">
            <Card className="arena-border-glow bg-background/90 backdrop-blur-sm min-h-[600px] relative overflow-hidden">
              <CardContent className="p-0">
                {/* Battle Arena Ring */}
                <div className="relative h-[600px] flex items-center justify-center">
                  
                  {/* Central ETH Pot */}
                  <div className={`absolute z-20 ${battleAnimation ? 'battle-pulse' : 'eth-float'}`}>
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center arena-glow shadow-2xl neon-flicker">
                      <div className="text-center">
                        <Coins className="w-8 h-8 text-black mx-auto mb-1" />
                        <div className="text-black font-bold text-sm">ETH POT</div>
                        <div className="text-black font-bold text-xs">0.5 ETH</div>
                      </div>
                    </div>
                  </div>

                  {/* Player Avatars */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                    <div className={`w-20 h-20 bg-primary rounded-full flex items-center justify-center arena-glow ${winnerAnimation ? 'victory-sparkle' : 'battle-pulse'}`}>
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-sm font-bold arena-text-glow">You</div>
                      <Badge variant="secondary" className="text-xs arena-glow">Ready</Badge>
                    </div>
                  </div>

                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                    <div className={`w-20 h-20 bg-red-500 rounded-full flex items-center justify-center arena-glow ${battleAnimation ? 'cyber-glitch' : 'battle-pulse'}`}>
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-sm font-bold arena-text-glow">Opponent</div>
                      <Badge variant="destructive" className="text-xs arena-glow">Waiting</Badge>
                    </div>
                  </div>

                  {/* Battle Animation Effects */}
                  {battleAnimation && (
                    <>
                      <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Zap className="w-16 h-16 text-yellow-500 animate-spin" />
                      </div>
                    </>
                  )}

                  {/* Winner Animation */}
                  {winnerAnimation && (
                    <div className="absolute inset-0 flex items-center justify-center bg-green-500/20">
                      <div className="text-center">
                        <Sparkles className="w-24 h-24 text-yellow-500 animate-bounce mx-auto mb-4" />
                        <div className="text-4xl font-bold text-green-500 animate-pulse">VICTORY!</div>
                        <div className="text-xl text-muted-foreground">You won 0.5 ETH!</div>
                      </div>
                    </div>
                  )}

                  {/* Arena Ring Visual */}
                  <div className="absolute inset-8 border-4 border-primary/30 rounded-full arena-ring-pulse"></div>
                  <div className="absolute inset-16 border-2 border-primary/20 rounded-full arena-ring-pulse arena-ring-delay-1"></div>
                  <div className="absolute inset-24 border border-primary/10 rounded-full arena-ring-pulse arena-ring-delay-2"></div>
                </div>

                {/* Battle Status Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-sm border-t border-border/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary" className="arena-glow">
                        <Target className="w-3 h-3 mr-1" />
                        Arena Status: Active
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        Next battle starts in: <span className="font-bold text-primary">--:--</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="arena-border-glow">
                        <Trophy className="w-4 h-4 mr-1" />
                        View Stats
                      </Button>
                      <Button size="sm" className="arena-glow">
                        <Zap className="w-4 h-4 mr-1" />
                        Quick Battle
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
