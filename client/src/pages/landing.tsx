import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackgroundElements from "@/components/background-elements";
import { ArbFlowLogoLarge, ArbitrumLockup } from "@/components/ui/arbflow-logo";
import {
  TokenSwapIcon,
  YieldFarmingIcon,
  PortfolioIcon,
  FastBridgeIcon,
} from "@/components/ui/defi-icons";

export default function Landing() {
  const [, setLocation] = useLocation();

  const handleLaunchApp = () => {
    setLocation("/app");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <BackgroundElements />
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="font-display text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Your Soverign Modern DeFi
            <br />
            <span className="text-gradient">AI-Agent</span>
          </h1>

          {/* Subtitle */}
          <p className="text-subtitle mb-12 max-w-2xl mx-auto">
            Make DeFi as simple as having a conversation. State your goal,
            review the plan, approve with one click.
          </p>

          {/* Chat Input */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="relative">
              <textarea
                placeholder="I want to take 2 ETH and earn a stable yield on it... (or 'swap 1 ETH for USDC and find the best stablecoin yield')"
                className="w-full min-h-[120px] p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl text-foreground placeholder-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all shadow-lg"
                rows={4}
              />
              <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                <button
                  className="p-2 hover:bg-accent/50 rounded-lg transition-colors"
                  title="Attach wallet"
                  onClick={() => {
                    // Scroll to wallet connect button in header or trigger wallet modal
                    const connectButton = document.querySelector(
                      '[data-testid="rk-connect-button"]'
                    );
                    if (connectButton) {
                      (connectButton as HTMLElement).click();
                    }
                  }}
                >
                  <svg
                    className="w-5 h-5 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </button>
                <button
                  className="p-2 hover:bg-accent/50 rounded-lg transition-colors"
                  title="Help & Examples"
                  onClick={() => {
                    // Scroll to how-it-works section
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <svg
                    className="w-5 h-5 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <Button
                onClick={handleLaunchApp}
                className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg"
                size="sm"
              >
                Start Chat
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <img
                src="/logos/AF_logomark.svg"
                alt="Arbitrum"
                className="w-4 h-4"
              />
              <span>Arbitrum Native</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Non-Custodial</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <button
              onClick={() => setLocation("/app?action=swap")}
              className="p-4 bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl hover:bg-card/50 transition-all group"
            >
              <div className="text-blue-500 mb-2">
                <TokenSwapIcon className="w-6 h-6 mx-auto" />
              </div>
              <p className="text-sm font-medium text-foreground group-hover:text-blue-400 transition-colors">
                Token Swap
              </p>
            </button>

            <button
              onClick={() => setLocation("/app?action=yield")}
              className="p-4 bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl hover:bg-card/50 transition-all group"
            >
              <div className="text-green-500 mb-2">
                <YieldFarmingIcon className="w-6 h-6 mx-auto" />
              </div>
              <p className="text-sm font-medium text-foreground group-hover:text-green-400 transition-colors">
                Yield Farming
              </p>
            </button>

            <button
              onClick={() => setLocation("/app?action=portfolio")}
              className="p-4 bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl hover:bg-card/50 transition-all group"
            >
              <div className="text-purple-500 mb-2">
                <PortfolioIcon className="w-6 h-6 mx-auto" />
              </div>
              <p className="text-sm font-medium text-foreground group-hover:text-purple-400 transition-colors">
                Portfolio
              </p>
            </button>

            <button
              onClick={() => setLocation("/app?action=bridge")}
              className="p-4 bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl hover:bg-card/50 transition-all group"
            >
              <div className="text-orange-500 mb-2">
                <FastBridgeIcon className="w-6 h-6 mx-auto" />
              </div>
              <p className="text-sm font-medium text-foreground group-hover:text-orange-400 transition-colors">
                Fast Bridge
              </p>
            </button>
          </div>
        </div>
      </main>

      {/* Features Section - Inspired by Project Aetherius */}
      <section id="features" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Sovereign DeFi Intelligence</span>
            </h2>
            <p className="text-subtitle max-w-3xl mx-auto">
              Experience true user sovereignty with AI-powered DeFi strategies,
              transparent transaction simulation, and decentralized data
              ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Transaction Simulator */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/70 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                Transaction Simulator
              </h3>
              <p className="text-body text-muted-foreground mb-4">
                See exact outcomes before signing. Gas fees, token outputs, and
                risk analysis - complete transparency in every transaction.
              </p>
              <div className="text-code">Simulate → Review → Execute</div>
            </div>

            {/* Risk Management */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/70 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                Intelligent Risk Management
              </h3>
              <p className="text-body text-muted-foreground mb-4">
                AI-powered risk assessment with customizable parameters. Your
                risk tolerance, your rules, stored sovereignly.
              </p>
              <div className="text-code">Assess → Protect → Optimize</div>
            </div>

            {/* Strategy Engine */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/70 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                Multi-Protocol Strategies
              </h3>
              <p className="text-body text-muted-foreground mb-4">
                Atomic execution across Uniswap, Aave, GMX, and Pendle. One
                transaction, multiple protocols, maximum efficiency.
              </p>
              <div className="text-code">Compose → Bundle → Execute</div>
            </div>
          </div>

          {/* User Sovereignty Banner */}
          <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-semibold mb-4">
              <span className="text-gradient">True User Sovereignty</span>
            </h3>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Your data, your strategies, your control. All transaction history
              and preferences are stored decentrally, accessible only by you,
              portable across platforms.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-24 px-6 bg-card/20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">How ArbFlow Works</span>
            </h2>
            <p className="text-subtitle max-w-3xl mx-auto">
              Our "Plan, Simulate, Approve" workflow ensures you're always in
              full control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl font-bold text-blue-400">
                  1
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                State Your Goal
              </h3>
              <p className="text-body text-muted-foreground">
                Simply type your financial goal in plain English: "Take 2 ETH
                and earn stable yield" or "What's the risk score for GMX V3
                pools?"
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl font-bold text-green-400">
                  2
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                Review the Plan
              </h3>
              <p className="text-body text-muted-foreground">
                ArbFlow analyzes your request and presents a clear execution
                plan with protocols, estimated APY, network costs, and risk
                assessment.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl font-bold text-purple-400">
                  3
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                Approve & Execute
              </h3>
              <p className="text-body text-muted-foreground">
                If satisfied with the plan, click approve and sign a single
                transaction. ArbFlow executes the entire strategy atomically.
              </p>
            </div>
          </div>

          {/* Example Flow */}
          <div className="mt-16 bg-card/50 border border-border/50 rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold mb-6 text-center">
              Example Execution Plan
            </h3>
            <div className="bg-background/50 rounded-xl p-6 font-mono text-sm">
              <div className="text-green-400 mb-2">ArbFlow's Proposed Flow</div>
              <div className="text-muted-foreground mb-4">
                <div>Steps:</div>
                <div className="ml-4">
                  1. Swap 2 ETH for ~7,000 USDC on Uniswap
                </div>
                <div className="ml-4">
                  2. Deposit ~7,000 USDC into Aave's lending pool
                </div>
              </div>
              <div className="text-muted-foreground mb-4">
                <div>Summary:</div>
                <div className="ml-4">Estimated APY: 5.2%</div>
                <div className="ml-4">Network Cost: ~$0.85</div>
                <div className="ml-4">Risk: Low</div>
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded">
                  Approve
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            <span className="text-gradient">Our Core Principles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                User Sovereignty
              </h3>
              <p className="text-body text-muted-foreground">
                Your wallet, your assets, your data. ArbFlow is non-custodial -
                we never control your funds, and your preferences are tied to
                your identity, not our servers.
              </p>
            </div>
            <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                Trust Through Transparency
              </h3>
              <p className="text-body text-muted-foreground">
                No black boxes. Every action is explained, every fee disclosed,
                and every risk highlighted before you sign any transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Documentation */}
      <section id="documentation" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Project Documentation</span>
            </h2>
            <p className="text-subtitle max-w-3xl mx-auto">
              Understanding ArbFlow's mission, technology, and vision for the
              future of DeFi
            </p>
          </div>

          {/* Vision & Problem Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold">
                  Our Vision
                </h3>
              </div>
              <p className="text-body text-muted-foreground leading-relaxed">
                ArbFlow is a{" "}
                <strong className="text-foreground">
                  sovereign AI co-pilot for the decentralized economy
                </strong>
                , built on the Arbitrum network. We're making interacting with
                DeFi as simple and safe as having a conversation with a trusted
                expert, unlocking the full potential of decentralized finance
                for everyone.
              </p>
            </div>

            <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L4.18 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold">
                  The Problem
                </h3>
              </div>
              <div className="space-y-4 text-body text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">
                      Overwhelming Complexity:
                    </strong>{" "}
                    Users must master dozens of protocols with different
                    interfaces and risks
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Hidden Risks:</strong>{" "}
                    Smart contract vulnerabilities, impermanent loss, and
                    transaction failures are poorly explained
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">
                      Fragmented Experience:
                    </strong>{" "}
                    Simple strategies require navigating multiple websites and
                    confusing transactions
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Innovation */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-border/50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl font-bold mb-4">
                <span className="text-gradient">
                  Core Innovation: Plan, Simulate, Approve
                </span>
              </h3>
              <p className="text-subtitle max-w-4xl mx-auto">
                Our breakthrough workflow ensures users are always in complete
                control and fully aware of outcomes before committing funds
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-semibold mb-2">
                  Conversational Interface
                </h4>
                <p className="text-body text-muted-foreground text-sm">
                  Express goals in plain English - no need to understand complex
                  DeFi terminology
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-semibold mb-2">
                  AI-Powered Analysis
                </h4>
                <p className="text-body text-muted-foreground text-sm">
                  Intelligent strategy formulation with real-time protocol
                  scanning and optimization
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-semibold mb-2">
                  Transparent Execution
                </h4>
                <p className="text-body text-muted-foreground text-sm">
                  Complete transaction preview with costs, risks, and outcomes
                  before signing
                </p>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold">
                  DeFi-Curious Newcomers
                </h3>
              </div>
              <p className="text-body text-muted-foreground">
                Individuals interested in DeFi's potential but intimidated by
                complexity and risks. ArbFlow provides a safe, guided entry
                point with clear explanations and risk management.
              </p>
            </div>

            <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold">
                  Experienced DeFi Users
                </h3>
              </div>
              <p className="text-body text-muted-foreground">
                Power users seeking portfolio efficiency and time savings
                through automated, multi-step strategies with advanced features
                like proactive optimization.
              </p>
            </div>
          </div>

          {/* Technical Features */}
          <div className="bg-card/20 border border-border/30 rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">
              <span className="text-gradient">Technical Architecture</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h4 className="font-medium mb-2">Non-Custodial</h4>
                <p className="text-sm text-muted-foreground">
                  Your keys, your assets. We never control your funds.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-medium mb-2">Arbitrum Native</h4>
                <p className="text-sm text-muted-foreground">
                  Built specifically for the Arbitrum ecosystem and its
                  protocols.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="font-medium mb-2">Risk Management</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive risk scoring and transparent fee disclosure.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h4 className="font-medium mb-2">Sovereign Profile</h4>
                <p className="text-sm text-muted-foreground">
                  User-controlled preferences and identity tied to your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 px-6 bg-card/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Development Roadmap</span>
            </h2>
            <p className="text-subtitle max-w-3xl mx-auto">
              Our journey to make DeFi accessible to everyone
            </p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold mb-2">
                  Phase 1: Launch (Current)
                </h3>
                <p className="text-body text-muted-foreground mb-4">
                  Core conversational AI with swap and single-protocol
                  staking/lending integrations on Arbitrum.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    Conversational Interface
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    Basic Swaps
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    Lending Integration
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold mb-2">
                  Phase 2: Expansion
                </h3>
                <p className="text-body text-muted-foreground mb-4">
                  Integration with wider range of DeFi protocols (yield
                  aggregators, derivatives). Advanced token research and market
                  analysis commands.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    Yield Aggregators
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    Derivatives
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    Market Analysis
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold mb-2">
                  Phase 3: Enhanced Proactive Intelligence
                </h3>
                <p className="text-body text-muted-foreground mb-4">
                  Advanced machine learning models for predictive analytics,
                  yield forecasting, and impermanent loss prediction. Shift from
                  reactive execution to proactive DeFi strategy optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    ML Yield Forecasting
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    IL Prediction & Mitigation
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    Predictive Analytics
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    Auto-Optimization
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold mb-2">
                  Phase 4: Guardian Agent Security
                </h3>
                <p className="text-body text-muted-foreground mb-4">
                  AI-driven security layer with real-time risk assessment of
                  DeFi protocols. Automated due diligence before capital
                  deployment, building trust through verifiable security
                  analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                    Real-time Risk Assessment
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                    Automated Due Diligence
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                    Protocol Security Scoring
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                    Trust Verification
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold mb-2">
                  Phase 5: Agentic Swarm Framework
                </h3>
                <p className="text-body text-muted-foreground mb-4">
                  Multi-agent coordination system with specialized,
                  collaborating agents. Solves DeFi fragmentation by enabling
                  complex, multi-step financial strategies across different
                  protocols and chains.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    Multi-Agent Coordination
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    Cross-Protocol Strategies
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    Chain Abstraction
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    Specialized Agents
                  </span>
                </div>
              </div>
            </div>

            {/* Phase 6 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold mb-2">
                  Phase 6: Sovereign AI DeFi
                </h3>
                <p className="text-body text-muted-foreground mb-4">
                  Full convergence of all systems into a unified, sovereign DeFi
                  intelligence. Complete automation of complex financial
                  strategies with human-level reasoning and cross-chain
                  execution.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400 rounded-full text-sm">
                    Unified AI Intelligence
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-purple-400 rounded-full text-sm">
                    Autonomous Strategies
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-400 rounded-full text-sm">
                    Human-Level Reasoning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
