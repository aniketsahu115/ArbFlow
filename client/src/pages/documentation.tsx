import Header from "@/components/header";
import Footer from "@/components/footer";
import BackgroundElements from "@/components/background-elements";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Documentation() {
  const [, setLocation] = useLocation();

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
              <span className="text-gradient">ArbFlow Documentation</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              Comprehensive guide to understanding ArbFlow's architecture,
              features, and implementation
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-card/30 border border-border/30 rounded-2xl p-8 mb-16">
            <h2 className="font-display text-2xl font-bold mb-6">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="#overview"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card/50 transition-colors"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-foreground hover:text-blue-400">
                  Project Overview
                </span>
              </a>
              <a
                href="#architecture"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card/50 transition-colors"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-foreground hover:text-green-400">
                  Technical Architecture
                </span>
              </a>
              <a
                href="#core-features"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card/50 transition-colors"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-foreground hover:text-purple-400">
                  Core Features
                </span>
              </a>
              <a
                href="#user-journey"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card/50 transition-colors"
              >
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-foreground hover:text-orange-400">
                  User Journey
                </span>
              </a>
              <a
                href="#ai-workflow"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card/50 transition-colors"
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-foreground hover:text-yellow-400">
                  AI Workflow
                </span>
              </a>
              <a
                href="#security"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card/50 transition-colors"
              >
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-foreground hover:text-red-400">
                  Security & Principles
                </span>
              </a>
            </div>
          </div>

          {/* Project Overview */}
          <section id="overview" className="mb-16">
            <h2 className="font-display text-4xl font-bold mb-8">
              <span className="text-gradient">Project Overview</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                  DeFi as simple and safe as having a conversation with a
                  trusted expert, unlocking the full potential of decentralized
                  finance for everyone.
                </p>
              </div>

              <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-semibold">
                    Core Innovation
                  </h3>
                </div>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Our breakthrough{" "}
                  <strong className="text-foreground">
                    "Plan, Simulate, Approve"
                  </strong>{" "}
                  workflow ensures users are always in complete control and
                  fully aware of outcomes before committing funds. No black
                  boxes, complete transparency.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-border/50 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-4">
                The Problem We're Solving
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-red-400"
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
                  <h4 className="font-display text-lg font-semibold mb-2 text-red-400">
                    Overwhelming Complexity
                  </h4>
                  <p className="text-body text-muted-foreground text-sm">
                    Users must master dozens of protocols with different
                    interfaces and risks
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-display text-lg font-semibold mb-2 text-orange-400">
                    Hidden Risks
                  </h4>
                  <p className="text-body text-muted-foreground text-sm">
                    Smart contract vulnerabilities, impermanent loss, and
                    transaction failures are poorly explained
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-yellow-400"
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
                  <h4 className="font-display text-lg font-semibold mb-2 text-yellow-400">
                    Fragmented Experience
                  </h4>
                  <p className="text-body text-muted-foreground text-sm">
                    Simple strategies require navigating multiple websites and
                    confusing transactions
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Architecture */}
          <section id="architecture" className="mb-16">
            <h2 className="font-display text-4xl font-bold mb-8">
              <span className="text-gradient">Technical Architecture</span>
            </h2>

            <div className="bg-card/20 border border-border/30 rounded-2xl p-8 mb-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-center">
                System Architecture Diagram
              </h3>

              <div className="flex justify-center mb-8">
                <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-2xl">
                  <img
                    src="/architecture.png"
                    alt="ArbFlow Technical Architecture"
                    className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>

              <div className="text-center">
                <p className="text-body text-muted-foreground mb-4">
                  ArbFlow's modular architecture ensures scalability, security,
                  and seamless integration with the Arbitrum ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      const link = document.createElement("a");
                      link.href = "/architecture.svg";
                      link.target = "_blank";
                      link.rel = "noopener noreferrer";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-blue-500 hover:bg-blue-600 transition-all transform hover:scale-105"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Architecture (SVG)
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      const link = document.createElement("a");
                      link.href = "/architecture.png";
                      link.target = "_blank";
                      link.rel = "noopener noreferrer";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-green-500 hover:bg-green-600 transition-all transform hover:scale-105"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    View Architecture (PNG)
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      const link = document.createElement("a");
                      link.href = "/architecture.svg";
                      link.download = "arbflow-architecture.svg";
                      link.style.display = "none";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-purple-500 hover:bg-purple-600 transition-all transform hover:scale-105"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download SVG
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      const link = document.createElement("a");
                      link.href = "/architecture.png";
                      link.download = "arbflow-architecture.png";
                      link.style.display = "none";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-amber-500 hover:bg-amber-600 transition-all transform hover:scale-105"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download PNG
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  View the architecture diagram in high resolution or download
                  it for offline reference
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-semibold mb-3 text-center">
                  Conversational AI
                </h4>
                <p className="text-body text-muted-foreground text-sm text-center">
                  Natural language processing engine that understands user
                  intents and DeFi terminology
                </p>
              </div>

              <div className="bg-card/30 border border-border/30 rounded-2xl p-6">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-semibold mb-3 text-center">
                  Strategy Engine
                </h4>
                <p className="text-body text-muted-foreground text-sm text-center">
                  Intelligent protocol analysis and optimization for maximum
                  yield and minimal risk
                </p>
              </div>

              <div className="bg-card/30 border border-border/30 rounded-2xl p-6">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-semibold mb-3 text-center">
                  Transaction Simulator
                </h4>
                <p className="text-body text-muted-foreground text-sm text-center">
                  Advanced simulation engine for risk assessment and outcome
                  prediction
                </p>
              </div>

              <div className="bg-card/30 border border-border/30 rounded-2xl p-6">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-semibold mb-3 text-center">
                  Arbitrum Integration
                </h4>
                <p className="text-body text-muted-foreground text-sm text-center">
                  Deep integration with Arbitrum's DeFi ecosystem and protocol
                  landscape
                </p>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section id="core-features" className="mb-16">
            <h2 className="font-display text-4xl font-bold mb-8">
              <span className="text-gradient">Core Features</span>
            </h2>

            <div className="space-y-8">
              <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3">
                      Conversational AI Interface
                    </h3>
                    <p className="text-body text-muted-foreground mb-4">
                      The primary interface is a simple chat box where users can
                      type commands like "Swap 1 ETH for USDC and find the best
                      stablecoin yield" or "What's the risk score for the new
                      GMX V3 pools?" Our AI understands natural language and
                      DeFi terminology.
                    </p>
                    <div className="bg-background/50 rounded-xl p-4 border border-border/30">
                      <p className="font-mono text-sm text-green-400 mb-2">
                        Example Commands:
                      </p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>• "Take 2 ETH and earn a stable yield on it"</div>
                        <div>• "Show me the best liquidity pools for USDC"</div>
                        <div>• "What's the current APY for Aave lending?"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3">
                      Safety-First Execution
                    </h3>
                    <p className="text-body text-muted-foreground mb-4">
                      ArbFlow never executes transactions blindly. It first
                      presents a clear, step-by-step Execution Plan in the chat,
                      detailing the protocols used, expected outcomes, and all
                      associated costs before requiring user approval.
                    </p>
                    <div className="bg-background/50 rounded-xl p-4 border border-border/30">
                      <p className="font-mono text-sm text-green-400 mb-2">
                        Sample Execution Plan:
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="text-muted-foreground">
                          Steps: 1. Swap 2 ETH → ~7,000 USDC on Uniswap
                        </div>
                        <div className="text-muted-foreground">
                          2. Deposit USDC into Aave lending pool
                        </div>
                        <div className="text-blue-400">
                          Estimated APY: 5.2% | Cost: ~$0.85 | Risk: Low
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3">
                      Sovereign Profile
                    </h3>
                    <p className="text-body text-muted-foreground mb-4">
                      Users connect their crypto wallet to interact with the
                      app. Key preferences like risk tolerance and whitelisted
                      protocols are saved to a user-controlled profile, ensuring
                      the AI's suggestions are always aligned with comfort
                      levels.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-background/30 rounded-lg p-3 border border-border/20">
                        <div className="text-sm font-medium text-green-400 mb-1">
                          Risk Tolerance
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Low, Medium, High
                        </div>
                      </div>
                      <div className="bg-background/30 rounded-lg p-3 border border-border/20">
                        <div className="text-sm font-medium text-blue-400 mb-1">
                          Protocol Whitelist
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Trusted DeFi protocols
                        </div>
                      </div>
                      <div className="bg-background/30 rounded-lg p-3 border border-border/20">
                        <div className="text-sm font-medium text-purple-400 mb-1">
                          Wallet-Controlled
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Your data, your control
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Journey */}
          <section id="user-journey" className="mb-16">
            <h2 className="font-display text-4xl font-bold mb-8">
              <span className="text-gradient">User Journey</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-lg font-bold text-white">
                    1
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    State the Goal
                  </h3>
                  <p className="text-body text-muted-foreground mb-4">
                    A user visits the ArbFlow website and types their goal into
                    the central chat input: "I want to take 2 ETH and earn a
                    stable yield on it."
                  </p>
                  <div className="bg-card/20 border border-border/20 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-blue-400"
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
                      <input
                        type="text"
                        placeholder="I want to take 2 ETH and earn a stable yield on it..."
                        className="flex-1 bg-transparent border-none outline-none text-muted-foreground"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-lg font-bold text-white">
                    2
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Receive the Plan
                  </h3>
                  <p className="text-body text-muted-foreground mb-4">
                    The ArbFlow AI analyzes the request, scans protocols on
                    Arbitrum, and replies directly in the chat with a structured
                    Execution Plan detailing steps, costs, and risks.
                  </p>
                  <div className="bg-background/50 border border-border/30 rounded-xl p-6">
                    <div className="text-green-400 font-mono text-sm mb-3">
                      ArbFlow's Proposed Flow
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="text-muted-foreground">
                        <span className="text-foreground font-medium">
                          Steps:
                        </span>
                        <div className="ml-4">
                          1. Swap 2 ETH for ~7,000 USDC on Uniswap
                        </div>
                        <div className="ml-4">
                          2. Deposit ~7,000 USDC into Aave's lending pool
                        </div>
                      </div>
                      <div className="text-muted-foreground">
                        <span className="text-foreground font-medium">
                          Summary:
                        </span>
                        <div className="ml-4">
                          Estimated APY: 5.2% | Network Cost: ~$0.85 | Risk: Low
                        </div>
                      </div>
                      <div className="flex space-x-3 mt-4">
                        <button className="px-4 py-2 bg-green-500 text-white rounded text-sm">
                          Approve
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded text-sm">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-lg font-bold text-white">
                    3
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Approve & Confirm
                  </h3>
                  <p className="text-body text-muted-foreground mb-4">
                    The user reviews the simple plan. If satisfied, they click
                    [Approve]. ArbFlow then prompts their connected wallet for a
                    single, final signature to execute the entire strategy
                    atomically.
                  </p>
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-border/30 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-purple-400"
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
                      <span className="text-foreground">
                        Single transaction execution - Complete strategy in one
                        signature
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Workflow */}
          <section id="ai-workflow" className="mb-16">
            <h2 className="font-display text-4xl font-bold mb-8">
              <span className="text-gradient">AI Workflow Engine</span>
            </h2>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-border/50 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-center">
                Plan, Simulate, Approve Process
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-blue-400"
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
                  <h4 className="font-display text-xl font-semibold mb-4">
                    Plan
                  </h4>
                  <p className="text-body text-muted-foreground">
                    AI analyzes user intent, scans available protocols,
                    calculates optimal paths, and formulates comprehensive
                    strategy
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-400"
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
                  <h4 className="font-display text-xl font-semibold mb-4">
                    Simulate
                  </h4>
                  <p className="text-body text-muted-foreground">
                    Advanced simulation engine predicts outcomes, calculates
                    risks, estimates costs, and validates transaction safety
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-purple-400"
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
                  <h4 className="font-display text-xl font-semibold mb-4">
                    Approve
                  </h4>
                  <p className="text-body text-muted-foreground">
                    User reviews transparent execution plan, approves with full
                    knowledge, and signs single transaction for complete
                    strategy
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Security & Principles */}
          <section id="security" className="mb-16">
            <h2 className="font-display text-4xl font-bold mb-8">
              <span className="text-gradient">Security & Core Principles</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
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
                  <h3 className="font-display text-xl font-semibold">
                    User Sovereignty
                  </h3>
                </div>
                <p className="text-body text-muted-foreground mb-4">
                  Your wallet, your assets, your data. ArbFlow is a
                  non-custodial tool. We never take control of your funds, and
                  your personal preferences are tied to your identity, not our
                  servers.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Non-custodial architecture
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Wallet-controlled preferences
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      No server-side data storage
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
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
                  <h3 className="font-display text-xl font-semibold">
                    Trust Through Transparency
                  </h3>
                </div>
                <p className="text-body text-muted-foreground mb-4">
                  No black boxes. Every action is explained, every fee is
                  disclosed, and every risk is highlighted before you ever sign
                  a transaction.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Complete transaction transparency
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Comprehensive risk disclosure
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Clear fee breakdown
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 mt-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-red-400"
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
                <h3 className="font-display text-xl font-semibold text-red-400">
                  Security Considerations
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Smart Contract Risks
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    All DeFi protocols carry inherent smart contract risks.
                    ArbFlow provides risk assessments but cannot eliminate these
                    risks entirely.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Market Volatility
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Cryptocurrency markets are highly volatile. Simulated
                    outcomes may differ from actual results due to market
                    movements.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Protocol Dependencies
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    ArbFlow integrates with third-party protocols. Changes to
                    these protocols may affect functionality and outcomes.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    User Responsibility
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Users maintain full responsibility for their decisions.
                    ArbFlow provides tools and information but cannot guarantee
                    outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-border/50 rounded-2xl p-12">
            <h2 className="font-display text-3xl font-bold mb-6">
              Ready to Experience{" "}
              <span className="text-gradient">Sovereign DeFi?</span>
            </h2>
            <p className="text-subtitle mb-8 max-w-2xl mx-auto">
              Start your journey with ArbFlow's conversational AI and take
              control of your DeFi experience.
            </p>
            <Button
              onClick={() => setLocation("/app")}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-3 text-lg"
            >
              Launch ArbFlow
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
