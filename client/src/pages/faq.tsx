import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackgroundElements from "@/components/background-elements";
import {
  HelpCircle,
  Search,
  ChevronDown,
  MessageCircle,
  Send,
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What data sources do you use?",
    answer:
      "ArbFlow aggregates data from multiple DeFi protocols on Arbitrum including Uniswap V3, Aave, Compound, GMX, and other major platforms. We use real-time on-chain data, protocol APIs, and our proprietary analytics engine to provide accurate yield opportunities, token prices, and market analysis.",
    category: "All Questions",
  },
  {
    id: "2",
    question: "How fast is it?",
    answer:
      "ArbFlow processes transactions and provides responses within 2-3 seconds on average. Our AI analysis typically takes 1-5 seconds depending on complexity. Transaction execution speed depends on Arbitrum network conditions, but is generally completed within 10-30 seconds.",
    category: "Performance & API",
  },
  {
    id: "3",
    question: "Do you give financial advice?",
    answer:
      "No, ArbFlow does not provide financial advice. We are an AI-powered tool that helps you execute DeFi strategies based on your own decisions. All information provided is for educational and informational purposes only. Users are responsible for their own investment decisions and should conduct their own research.",
    category: "Legal & Privacy",
  },
  {
    id: "4",
    question: "How do you score protocols?",
    answer:
      "Our Guardian Agent analyzes protocols using multiple factors: TVL stability, smart contract audit results, historical exploit data, team reputation, community governance activity, and real-time security metrics. Each protocol receives a composite risk score from 1-100, with detailed breakdowns of security, liquidity, and reliability factors.",
    category: "Data & Analytics",
  },
  {
    id: "5",
    question: "What chains/tokens are supported?",
    answer:
      "Currently, ArbFlow operates exclusively on Arbitrum One and Arbitrum Sepolia testnet. We support all major tokens available on Arbitrum including ETH, USDC, USDT, ARB, GMX, and hundreds of other ERC-20 tokens. Future roadmap includes expansion to other L2s and eventually Ethereum mainnet.",
    category: "Tokens & Access",
  },
  {
    id: "6",
    question: "How do I delete my data?",
    answer:
      "You can delete your data at any time by disconnecting your wallet and clearing your browser's local storage. ArbFlow operates non-custodially - we don't store your private keys or personal information on our servers. Chat history and preferences are stored locally and can be cleared through your browser settings.",
    category: "Legal & Privacy",
  },
  {
    id: "7",
    question: "Is ArbFlow free to use?",
    answer:
      "Yes, ArbFlow is completely free to use. There are no subscription fees, platform fees, or hidden charges. You only pay standard Arbitrum network gas fees for transactions. Our revenue model is based on optional partnerships with protocols, never at the expense of user fees.",
    category: "Tokens & Access",
  },
  {
    id: "8",
    question: "Can I integrate ArbFlow into my app?",
    answer:
      "Yes! We're developing API access for developers who want to integrate ArbFlow's AI capabilities into their applications. This includes conversation endpoints, strategy analysis, and transaction simulation. Contact us through our Discord for early access to developer documentation.",
    category: "Data & Analytics",
  },
  {
    id: "9",
    question: "How does impermanent loss protection work?",
    answer:
      "Our Proactive Intelligence system uses machine learning models to predict potential impermanent loss scenarios before they occur. We analyze token price correlations, volatility patterns, and liquidity pool dynamics to warn users and suggest protective strategies like hedging or position adjustments.",
    category: "All Questions",
  },
  {
    id: "10",
    question: "What is the Agentic Swarm framework?",
    answer:
      "The Agentic Swarm is our multi-agent coordination system where specialized AI agents collaborate to execute complex DeFi strategies. Each agent handles specific functions (yield farming, swapping, risk assessment) and they coordinate to optimize cross-protocol strategies automatically.",
    category: "Performance & API",
  },
  {
    id: "11",
    question: "How secure is the Guardian Agent?",
    answer:
      "The Guardian Agent performs real-time security analysis using multiple data sources: audit reports, on-chain behavior analysis, smart contract formal verification, and community sentiment. It provides risk scores and warnings before you deploy capital to any protocol, significantly reducing exposure to potential exploits.",
    category: "Legal & Privacy",
  },
  {
    id: "12",
    question: "Can I use ArbFlow on mobile?",
    answer:
      "Yes, ArbFlow is fully responsive and works on mobile browsers. For the best experience, we recommend using mobile wallet browsers like MetaMask Mobile, Rainbow, or Trust Wallet. Our interface adapts seamlessly to mobile screens while maintaining full functionality.",
    category: "Tokens & Access",
  },
];

const categories = [
  "All Questions",
  "Data & Analytics",
  "Performance & API",
  "Tokens & Access",
  "Legal & Privacy",
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === "All Questions" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <BackgroundElements />
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-6 pt-32 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              Everything you need to know about ArbFlow AI Agent. Can't find
              what you're looking for? Hit us up on Discord.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-card/30 text-muted-foreground hover:bg-card/50 hover:text-foreground"
                }`}
              >
                {category} (
                {
                  faqData.filter(
                    (item) =>
                      category === "All Questions" || item.category === category
                  ).length
                }
                )
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {filteredFAQs.map((item) => (
              <div
                key={item.id}
                className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden hover:bg-card/50 transition-all"
              >
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-blue-400 transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedItems.includes(item.id) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="pl-11">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions Section */}
          <div className="bg-card/20 backdrop-blur-sm border border-border/30 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() =>
                  window.open("https://discord.gg/arbitrum", "_blank")
                }
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
