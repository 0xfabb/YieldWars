"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Wallet, ExternalLink, Copy, Trophy, Coins, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import MetaMaskSDK from "@metamask/sdk";

interface User {
  id: string; 
  name: string;
  email: string;
  walletAddress: string;
  connectedWallet: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnectingWallet, setIsConnectingWallet] = useState(false);
  const [balance, setBalance] = useState<string | null>(null);
  const [isCheckingBalance, setIsCheckingBalance] = useState(false);
  const router = useRouter();
  const supabase = createClient();





  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
        console.log(session);
      if (!session) {
        router.push("/auth/login");
        return;
      }

      // Fetch user data from database
      try {
        const email =  session.user.email;
        console.log(email);
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

  const handleConnectWallet = async () => {
    setIsConnectingWallet(true);
    try {
          const MMSDK = new MetaMaskSDK({
            dappMetadata: {
              name: "Next.js Dapp",
              url: typeof window !== "undefined" ? window.location.href : "",
            },
            infuraAPIKey: "f302b612a16e4208b8f64973e42e3b84",
          });
    
          const ethereum = MMSDK.getProvider();
          console.log(ethereum);
          const accounts = await MMSDK.connect();
          console.log(accounts);
          console.log(accounts[0]);
          if (user) {
            setUser({
              ...user,
              connectedWallet: accounts[0]
            });
          }
        } catch (err) {
          console.error("MetaMask connection failed", err);
        }
        setIsConnectingWallet(false);
  };


  const handleCheckBalance = async () => {
    if (!user?.connectedWallet) {
      alert("No wallet connected");
      return;
    }

    setIsCheckingBalance(true);
    try {
      const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/f302b612a16e4208b8f64973e42e3b84");
      const balanceWei = await provider.getBalance(user.connectedWallet);
      const balanceEth = ethers.formatEther(balanceWei);
      setBalance(balanceEth);
      console.log(`Balance: ${balanceEth} ETH`);
    } catch (error) {
      console.error("Error fetching balance:", error);
      alert("Failed to fetch balance. Please try again.");
    } finally {
      setIsCheckingBalance(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen arena-gradient flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center arena-glow mx-auto mb-4">
            <Gamepad2 className="w-8 h-8 text-primary-foreground animate-pulse" />
          </div>
          <p className="text-muted-foreground">Loading your arena...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen arena-gradient flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4 animate-in duration-500">Welcome to ArenaFi</p>
          <Button onClick={() => router.push("/auth/create-wallet")}>Create a New Wallet</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen arena-gradient">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center arena-glow">
              <Gamepad2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl sm:text-2xl font-bold arena-text-glow">ArenaFi</span>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="hidden sm:block text-sm text-muted-foreground">Welcome, {user.name}</span>
            <span className="sm:hidden text-xs text-muted-foreground">{user.name}</span>
            <Button variant="outline" onClick={handleLogout} size="sm" className="text-xs sm:text-sm">
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Welcome Section */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 arena-text-glow">
            Welcome to the Arena, {user.name}!
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            Your DeFi gaming dashboard is ready. Connect your external wallet to start battling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Wallet Section */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Native Wallet */}
            <Card className="arena-border-glow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wallet className="w-5 h-5 text-primary" />
                  <span>Native ArenaFi Wallet</span>
                  <Badge variant="secondary" className="arena-glow">Active</Badge>
                </CardTitle>
                <CardDescription>
                  Your secure, built-in wallet created during signup
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Wallet Address</label>
                    <div className="flex items-center space-x-2 mt-1">
                      <code className="flex-1 p-2 bg-muted rounded text-xs sm:text-sm font-mono break-all">
                        {user.walletAddress}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(user.walletAddress)}
                        className="shrink-0"
                      >
                        <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-primary">0.00</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">ETH Balance</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-primary">0</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">$ARENA Tokens</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* External Wallet Connection */}
            <Card className="arena-border-glow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <span>External Wallet</span>
                  {user.connectedWallet && (
                    <Badge variant="secondary" className="arena-glow">Connected</Badge>
                  )}
                </CardTitle>
                <CardDescription>
                  Connect your MetaMask, WalletConnect, or other Web3 wallet
                </CardDescription>
              </CardHeader>
              <CardContent>
                {user.connectedWallet ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Connected Wallet</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <code className="flex-1 p-2 bg-muted rounded text-xs sm:text-sm font-mono break-all">
                          {user.connectedWallet}
                        </code>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(user.connectedWallet)}
                          className="shrink-0"
                        >
                          <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <Button variant="outline" className="w-full text-xs sm:text-sm">
                        Disconnect Wallet
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full text-xs sm:text-sm bg-primary text-primary-foreground" 
                        onClick={handleCheckBalance}
                        disabled={isCheckingBalance}
                      >
                        {isCheckingBalance ? "Checking..." : "Check Balance"}
                      </Button>
                    </div>
                    {balance && (
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="text-xs sm:text-sm text-muted-foreground">Current Balance</div>
                        <div className="text-base sm:text-lg font-bold text-primary">{parseFloat(balance).toFixed(4)} ETH</div>
                      </div>
                    )}  
                  </div>
              ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Wallet className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      No external wallet connected
                    </p>
                    <Button 
                      onClick={handleConnectWallet} 
                      disabled={isConnectingWallet}
                      className="arena-glow"
                    >
                      {isConnectingWallet ? "Connecting..." : "Connect Wallet"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Stats & Actions */}
          <div className="space-y-4 sm:space-y-6">
            {/* Battle Stats */}
            <Card className="arena-border-glow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span>Battle Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-muted-foreground">Battles Won</span>
                  <span className="text-sm sm:text-base font-bold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-muted-foreground">Total Staked</span>
                  <span className="text-sm sm:text-base font-bold">0 ETH</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-muted-foreground">Rewards Earned</span>
                  <span className="text-sm sm:text-base font-bold text-primary">0 $ARENA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-muted-foreground">Arena Rank</span>
                  <span className="text-sm sm:text-base font-bold">#--</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="arena-border-glow">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <Button className="w-full arena-glow text-xs sm:text-sm" disabled={!user.connectedWallet}>
                  <Coins className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Start Battle
                </Button>
                <Button variant="outline" className="w-full arena-border-glow text-xs sm:text-sm">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  View Leaderboard
                </Button>
                <Button variant="outline" className="w-full arena-border-glow text-xs sm:text-sm">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Join Community
                </Button>
              </CardContent>
            </Card>

            {/* Getting Started */}
            <Card className="arena-border-glow">
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  <div>
                    <div className="font-medium text-xs sm:text-sm">Connect External Wallet</div>
                    <div className="text-muted-foreground text-xs">Link your MetaMask or other Web3 wallet</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  <div>
                    <div className="font-medium text-xs sm:text-sm">Fund Your Wallet</div>
                    <div className="text-muted-foreground text-xs">Add ETH to start battling</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                  <div>
                    <div className="font-medium text-xs sm:text-sm">Enter Your First Battle</div>
                    <div className="text-muted-foreground text-xs">Stake ETH and challenge opponents</div>
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
