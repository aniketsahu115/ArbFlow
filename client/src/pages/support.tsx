import Header from "@/components/header";
import Footer from "@/components/footer";
import BackgroundElements from "@/components/background-elements";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Mail,
  FileText,
  Book,
  Users,
  ExternalLink,
  Clock,
  Zap,
  Shield,
} from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <BackgroundElements />
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-6 pt-32 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-gradient">Support Center</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              Get help, find answers, and connect with our community. We're here
              to support your DeFi journey.
            </p>
          </div>

          {/* Quick Help Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-card/30 border border-border/30 hover:bg-card/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Book className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Documentation
                </CardTitle>
                <CardDescription>
                  Comprehensive guides and technical documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => (window.location.href = "/documentation")}
                >
                  View Documentation
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/30 border border-border/30 hover:bg-card/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-xl font-bold">FAQ</CardTitle>
                <CardDescription>
                  Quick answers to frequently asked questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => (window.location.href = "/faq")}
                >
                  Browse FAQ
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/30 border border-border/30 hover:bg-card/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-xl font-bold">Community</CardTitle>
                <CardDescription>
                  Join our Discord and connect with other users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => (window.location.href = "/community")}
                >
                  Join Community
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">
              <span className="text-gradient">Get Direct Support</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Discord Support */}
              <Card className="bg-card/30 border border-border/30">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Discord Support</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        Real-time help
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get instant help from our community and support team on
                    Discord. Best for quick questions and real-time
                    troubleshooting.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                      Average response time: 5-15 minutes
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-blue-400" />
                      Active community support
                    </div>
                  </div>
                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600"
                    onClick={() =>
                      window.open("https://discord.gg/arbitrum", "_blank")
                    }
                  >
                    Join Discord Server
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Email Support */}
              <Card className="bg-card/30 border border-border/30">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Email Support</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        24-48 hours
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Send us a detailed message for complex issues or business
                    inquiries. Perfect for bug reports and feature requests.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 mr-2 text-green-400" />
                      Detailed technical support
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FileText className="w-4 h-4 mr-2 text-purple-400" />
                      Bug reports & feature requests
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      window.open("mailto:support@arbflow.io", "_blank")
                    }
                  >
                    Send Email
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Common Issues */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">
              <span className="text-gradient">Common Issues & Solutions</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card/30 border border-border/30">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Wallet Connection Issues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Make sure your wallet is on Arbitrum network</li>
                    <li>• Clear browser cache and cookies</li>
                    <li>• Try refreshing the page</li>
                    <li>• Check if wallet extension is updated</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/30 border border-border/30">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Transaction Failures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Ensure sufficient ETH for gas fees</li>
                    <li>• Check token balances before swapping</li>
                    <li>• Verify slippage tolerance settings</li>
                    <li>• Wait for network congestion to clear</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/30 border border-border/30">
                <CardHeader>
                  <CardTitle className="text-lg">Slow Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Check your internet connection</li>
                    <li>• Close unnecessary browser tabs</li>
                    <li>• Switch to a different RPC endpoint</li>
                    <li>• Try using a different browser</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/30 border border-border/30">
                <CardHeader>
                  <CardTitle className="text-lg">Missing Tokens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Check if you're on the correct network</li>
                    <li>• Add token contract address manually</li>
                    <li>• Verify transaction was confirmed</li>
                    <li>• Contact support if funds are missing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/30 border border-border/30">
                <CardHeader>
                  <CardTitle className="text-lg">High Gas Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Wait for network to be less congested</li>
                    <li>• Use batch transactions when possible</li>
                    <li>• Check gas price recommendations</li>
                    <li>• Consider transaction timing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/30 border border-border/30">
                <CardHeader>
                  <CardTitle className="text-lg">Security Concerns</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Never share your private keys</li>
                    <li>• Always verify transaction details</li>
                    <li>• Use hardware wallets for large amounts</li>
                    <li>• Report suspicious activity immediately</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-red-400">
              Security Emergency?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you suspect a security issue, have lost access to funds, or
              encountered a critical bug, contact us immediately through Discord
              or email with "URGENT" in the subject line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="destructive"
                onClick={() =>
                  window.open("https://discord.gg/arbitrum", "_blank")
                }
              >
                Emergency Discord
                <MessageCircle className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "mailto:security@arbflow.io?subject=URGENT - Security Issue",
                    "_blank"
                  )
                }
              >
                Emergency Email
                <Mail className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
