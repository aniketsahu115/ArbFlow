import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArbFlowLogo } from "@/components/ui/arbflow-logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Menu, X, MessageCircle, Github } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="transition-transform group-hover:scale-105">
              <ArbFlowLogo size={50} showGlow={true} />
            </div>
            <span className="font-display text-xl sm:text-2xl font-bold text-foreground">
              ArbFlow
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a
            href="#features"
            className="relative text-muted-foreground hover:text-foreground transition-all duration-200 ease-in-out group text-sm"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 ease-in-out group-hover:w-full"></span>
          </a>
          <Link to="/documentation">
            <div className="relative text-muted-foreground hover:text-foreground transition-all duration-200 ease-in-out group cursor-pointer text-sm">
              Docs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 ease-in-out group-hover:w-full"></span>
            </div>
          </Link>
          <Link to="/faq">
            <div className="relative text-muted-foreground hover:text-foreground transition-all duration-200 ease-in-out group cursor-pointer text-sm">
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 ease-in-out group-hover:w-full"></span>
            </div>
          </Link>
          <Link to="/community">
            <div className="relative text-muted-foreground hover:text-foreground transition-all duration-200 ease-in-out group cursor-pointer text-sm">
              Community
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 ease-in-out group-hover:w-full"></span>
            </div>
          </Link>
          <Link href="/support">
            <a className="relative text-muted-foreground hover:text-foreground transition-all duration-200 ease-in-out group text-sm">
              Support
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 ease-in-out group-hover:w-full"></span>
            </a>
          </Link>
        </nav>

        {/* Right side - Connect Wallet, Social Links, Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Connect Wallet Button - Hidden on small screens */}
          <div className="hidden sm:block">
            <ConnectButton />
          </div>

          {/* Social Icons - Simplified */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="https://discord.gg/arbitrum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Discord"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/aniketsahu115/ArbFlow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            {/* Mobile Connect Wallet */}
            <div className="sm:hidden">
              <ConnectButton />
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-3">
              <a
                href="#features"
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" });
                  closeMobileMenu();
                }}
              >
                Features
              </a>
              <Link to="/documentation">
                <div
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
                  onClick={closeMobileMenu}
                >
                  Documentation
                </div>
              </Link>
              <Link to="/faq">
                <div
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
                  onClick={closeMobileMenu}
                >
                  FAQ
                </div>
              </Link>
              <Link to="/community">
                <div
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
                  onClick={closeMobileMenu}
                >
                  Community
                </div>
              </Link>
              <Link href="/support">
                <a
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={(e) => {
                    closeMobileMenu();
                  }}
                >
                  Support
                </a>
              </Link>
            </nav>

            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-border/20">
              <a
                href="https://discord.gg/arbitrum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Discord</span>
              </a>
              <a
                href="https://github.com/aniketsahu115/ArbFlow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
