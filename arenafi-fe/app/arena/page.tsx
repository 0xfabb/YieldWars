"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Crown,
  Target,
  Gamepad2,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { useRouter } from "next/navigation";
import PredictionBattle from "@/components/prediction-battle";
import EntropyGame from "@/components/entropy-game";

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


export default function BattleArena() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const router = useRouter();
  const supabase = createClient();


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
          console.log("User data loaded:", userData);
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




  if (isLoading) {
    return (
      <div className="min-h-screen arena-gradient flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center arena-glow mx-auto mb-4 animate-pulse">
            <Gamepad2 className="w-8 h-8 text-primary-foreground" />
          </div>
          <p className="text-muted-foreground">Loading YieldWars...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen arena-gradient flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Please login to access YieldWars</p>
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
              <span className="text-xl sm:text-2xl font-bold arena-text-glow">YieldWars Arena</span>
            </div>
          </div>
          
          {/* HUD - Top Bar */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {!user?.connectedWallet && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="arena-border-glow text-xs"
                  onClick={async () => {
                    if (window.ethereum) {
                      try {
                        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }) as string[];
                        if (accounts && accounts.length > 0) {
                          // Update user object with connected wallet
                          setUser(prev => prev ? { ...prev, connectedWallet: accounts[0] } : null);
                          console.log("Wallet connected:", accounts[0]);
                        }
                      } catch (error) {
                        console.error("Failed to connect wallet:", error);
                      }
                    } else {
                      alert("Please install MetaMask!");
                    }
                  }}
                >
                  Connect Wallet
                </Button>
              )}
              <Badge variant="secondary" className="arena-glow">
                <Crown className="w-3 h-3 mr-1" />
                Rank #--
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Game Interface */}
          <Card className="arena-border-glow bg-background/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <span>Battle Arena</span>
              </CardTitle>
              <CardDescription>
                Choose your game type and compete for ETH rewards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="prediction" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="prediction" className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Price Prediction</span>
                  </TabsTrigger>
                  <TabsTrigger value="lucky-numbers" className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Lucky Numbers</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="prediction" className="mt-6">
                  <PredictionBattle 
                    user={user}
                  />
                </TabsContent>
                
                <TabsContent value="lucky-numbers" className="mt-6">
                  <EntropyGame 
                    user={user}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
