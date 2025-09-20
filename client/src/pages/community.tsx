import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Users, MessageCircle, Send, Github, Heart, Calendar, Trophy, Zap } from "lucide-react";

export default function Community() {
  const communityChannels = [
    {
      name: "Discord Server",
      description: "Join our main community hub for real-time discussions, support, and announcements.",
      icon: MessageCircle,
      link: "https://discord.gg/arbitrum",
      members: "2.5K+",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Telegram Group",
      description: "Quick updates, trading discussions, and community alerts in our Telegram channel.",
      icon: Send,
      link: "https://t.me/arbflow",
      members: "1.8K+",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "GitHub Repository",
      description: "Contribute to our open-source development, report bugs, and propose new features.",
      icon: Github,
      link: "https://github.com/arbflow",
      members: "150+",
      color: "from-gray-700 to-gray-800"
    }
  ];

  const communityStats = [
    {
      icon: Users,
      label: "Active Members",
      value: "4.5K+"
    },
    {
      icon: MessageCircle,
      label: "Daily Messages",
      value: "500+"
    },
    {
      icon: Trophy,
      label: "Contributors",
      value: "80+"
    },
    {
      icon: Calendar,
      label: "Community Events",
      value: "12/month"
    }
  ];

  const communityHighlights = [
    {
      title: "Weekly Community Calls",
      description: "Join us every Thursday at 3 PM UTC for project updates, Q&A sessions, and community discussions.",
      icon: Calendar,
      time: "Thursdays 3 PM UTC"
    },
    {
      title: "Developer Bounties",
      description: "Earn rewards by contributing to ArbFlow development, documentation, and community tools.",
      icon: Trophy,
      reward: "Up to $500"
    },
    {
      title: "Community Governance",
      description: "Participate in protocol decisions and help shape the future of ArbFlow through our governance system.",
      icon: Users,
      status: "Coming Soon"
    },
    {
      title: "Ambassador Program",
      description: "Become an ArbFlow ambassador and help grow our community while earning exclusive rewards.",
      icon: Heart,
      spots: "Open"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-500/5 to-red-500/10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
              <Users className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Join Our Growing Community</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent mb-6">
              Connect, Collaborate, Create
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of DeFi enthusiasts, developers, and traders building the future of automated arbitrage on Arbitrum.
            </p>
            
            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {communityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/10 mb-3">
                    <stat.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Channels */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join Our Community Channels
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose your preferred platform to connect with the ArbFlow community and stay updated on the latest developments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {communityChannels.map((channel, index) => (
                <Card key={index} className="relative overflow-hidden bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300 group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${channel.color}`}>
                        <channel.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{channel.members} members</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{channel.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {channel.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <Button 
                      onClick={() => window.open(channel.link, "_blank")}
                      className={`w-full bg-gradient-to-r ${channel.color} hover:opacity-90 text-white`}
                    >
                      Join {channel.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Highlights */}
        <section className="py-20 px-6 bg-card/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Community Highlights
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the various ways you can engage with our community and contribute to the ArbFlow ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {communityHighlights.map((highlight, index) => (
                <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400/10 mr-4">
                        <highlight.icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-foreground">{highlight.title}</CardTitle>
                        {highlight.time && (
                          <span className="text-sm text-yellow-400 font-medium">{highlight.time}</span>
                        )}
                        {highlight.reward && (
                          <span className="text-sm text-green-400 font-medium">{highlight.reward}</span>
                        )}
                        {highlight.status && (
                          <span className="text-sm text-blue-400 font-medium">{highlight.status}</span>
                        )}
                        {highlight.spots && (
                          <span className="text-sm text-purple-400 font-medium">{highlight.spots}</span>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {highlight.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Become part of the ArbFlow community today and help shape the future of DeFi automation on Arbitrum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open("https://discord.gg/arbitrum", "_blank")}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://t.me/arbflow", "_blank")}
                className="border-border/50 hover:bg-card/50"
              >
                <Send className="w-5 h-5 mr-2" />
                Join Telegram
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}