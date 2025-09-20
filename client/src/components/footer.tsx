import { ArbFlowLogo } from "@/components/ui/arbflow-logo";

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ArbFlowLogo size={44} showGlow={true} />
              <span className="text-2xl font-bold text-foreground">
                ArbFlow
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your sovereign DeFi co-pilot on Arbitrum. Experience DeFi through
              simple conversation.
            </p>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                API Reference
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Security
              </a>
            </div>
          </div>

          {/* Community Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Community</h3>
            <div className="space-y-3">
              <a
                href="https://discord.gg/arbitrum"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Discord
              </a>
              <a
                href="https://github.com/aniketsahu115/ArbFlow"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Support
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <div className="space-y-3">
              <a
                href="https://arbitrum.io"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>Arbitrum Network</span>
                <svg
                  className="w-3 h-3"
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
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ArbFlow. Built for the Arbitrum ecosystem.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">Powered by</span>
            <div className="flex items-center space-x-3">
              <img
                src="/logos/AF_logomark.svg"
                alt="Arbitrum"
                className="w-6 h-6"
              />
              <span className="text-sm font-medium text-foreground">
                Arbitrum
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
