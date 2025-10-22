
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Trophy, Code, Gamepad2, Coins, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen arena-gradient">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center arena-glow">
              <Gamepad2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold arena-text-glow">ArenaFi</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#platform" className="text-muted-foreground hover:text-primary transition-colors">Platform</a>
            <a href="#arena" className="text-muted-foreground hover:text-primary transition-colors">Arena</a>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="outline" className="arena-border-glow">Login</Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button className="arena-glow">Enter Arena</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 arena-glow" variant="secondary">
            <Zap className="w-4 h-4 mr-2" />
            DeFi Gaming Revolution
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 arena-text-glow">
            Where Gaming Meets
            <span className="text-primary block">DeFi</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            ArenaFi is where the thrill of gaming collides with the power of decentralized finance — 
            a blazing, on-chain battlefield where every ETH you stake becomes your fighter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/sign-up">
              <Button size="lg" className="text-lg px-8 py-6 arena-glow">
                <Trophy className="w-5 h-5 mr-2" />
                Start Battling
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 arena-border-glow">
              <Code className="w-5 h-5 mr-2" />
              View Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Battle-Tested Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed for the ultimate DeFi gaming experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 arena-border-glow hover:arena-glow transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Staking</h3>
            <p className="text-muted-foreground">
              Your ETH is protected by battle-tested smart contracts with full transparency on Ethereum.
            </p>
          </Card>

          <Card className="p-6 arena-border-glow hover:arena-glow transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">PvP Battles</h3>
            <p className="text-muted-foreground">
              Challenge opponents in instant DeFi battles where strategy and timing determine victory.
            </p>
          </Card>

          <Card className="p-6 arena-border-glow hover:arena-glow transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Leaderboards</h3>
            <p className="text-muted-foreground">
              Climb the ranks and earn $ARENA tokens as you dominate the competition.
            </p>
          </Card>

          <Card className="p-6 arena-border-glow hover:arena-glow transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Coins className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real Rewards</h3>
            <p className="text-muted-foreground">
              Every victory earns you real rewards. Watch your vault grow with each successful battle.
            </p>
          </Card>

          <Card className="p-6 arena-border-glow hover:arena-glow transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-muted-foreground">
              Join a thriving community of DeFi gamers, strategists, and thrill-seekers.
            </p>
          </Card>

          <Card className="p-6 arena-border-glow hover:arena-glow transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dynamic Yields</h3>
            <p className="text-muted-foreground">
              Your staked assets work harder through our innovative yield optimization strategies.
            </p>
          </Card>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4" variant="secondary">
              <Code className="w-4 h-4 mr-2" />
              Developer Platform
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-primary">Developers</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              ArenaFi provides a complete SDK and API suite for developers to build custom gaming experiences on top of our DeFi infrastructure.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>TypeScript SDK with full type safety</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Real-time WebSocket APIs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Smart contract templates</span>
              </div>
            </div>
          </div>
          <Card className="p-6 arena-border-glow">
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-primary mb-2">{`// Initialize ArenaFi SDK`}</div>
              <div className="text-muted-foreground">
                <span className="text-blue-400">import</span> {`{ ArenaFi }`} <span className="text-blue-400">from</span> <span className="text-green-400">&apos;@arenafi/sdk&apos;</span>
              </div>
              <br />
              <div className="text-muted-foreground">
                <span className="text-blue-400">const</span> arena = <span className="text-blue-400">new</span> <span className="text-yellow-400">ArenaFi</span>({`{`}
              </div>
              <div className="text-muted-foreground ml-4">
                apiKey: <span className="text-green-400">&apos;your-api-key&apos;</span>,
              </div>
              <div className="text-muted-foreground ml-4">
                network: <span className="text-green-400">&apos;ethereum&apos;</span>
              </div>
              <div className="text-muted-foreground">{`}`})</div>
              <br />
              <div className="text-primary mb-2">{`// Create a battle`}</div>
              <div className="text-muted-foreground">
                <span className="text-blue-400">const</span> battle = <span className="text-blue-400">await</span> arena.<span className="text-yellow-400">createBattle</span>({`{`}
              </div>
              <div className="text-muted-foreground ml-4">
                stake: <span className="text-orange-400">1.5</span>, <span className="text-primary">{`// ETH`}</span>
              </div>
              <div className="text-muted-foreground ml-4">
                gameMode: <span className="text-green-400">&apos;pvp&apos;</span>
              </div>
              <div className="text-muted-foreground">{`}`})</div>
            </div>
          </Card>
        </div>
      </section>

      {/* Arena Stats */}
      <section id="arena" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Arena Statistics</h2>
          <p className="text-xl text-muted-foreground">
            Real-time metrics from the battlefield
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="p-6 text-center arena-border-glow">
            <div className="text-3xl font-bold text-primary mb-2">$2.4M</div>
            <div className="text-muted-foreground">Total Value Locked</div>
          </Card>
          <Card className="p-6 text-center arena-border-glow">
            <div className="text-3xl font-bold text-primary mb-2">15,847</div>
            <div className="text-muted-foreground">Active Fighters</div>
          </Card>
          <Card className="p-6 text-center arena-border-glow">
            <div className="text-3xl font-bold text-primary mb-2">89,234</div>
            <div className="text-muted-foreground">Battles Won</div>
          </Card>
          <Card className="p-6 text-center arena-border-glow">
            <div className="text-3xl font-bold text-primary mb-2">$847K</div>
            <div className="text-muted-foreground">Rewards Distributed</div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-primary arena-text-glow">Dominate</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of fighters in the ultimate DeFi gaming arena. 
            Your journey to crypto glory starts now.
          </p>
          <Link href="/auth/sign-up">
            <Button size="lg" className="text-lg px-12 py-6 arena-glow">
              <Trophy className="w-5 h-5 mr-2" />
              Enter the Arena
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">ArenaFi</span>
              </div>
              <p className="text-muted-foreground text-sm">
                The ultimate DeFi gaming platform where every battle counts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Battle Arena</div>
                <div>Staking Pools</div>
                <div>Leaderboards</div>
                <div>Rewards</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Documentation</div>
                <div>SDK</div>
                <div>API Reference</div>
                <div>Smart Contracts</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Discord</div>
                <div>Twitter</div>
                <div>GitHub</div>
                <div>Blog</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 ArenaFi. All rights reserved. Built on Ethereum.
          </div>
        </div>
      </footer>
    </div>
  );
}
