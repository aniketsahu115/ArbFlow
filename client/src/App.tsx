import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "./lib/wagmi";
import { arbflowTheme } from "./lib/rainbowkit-theme";
import Landing from "@/pages/landing";
import App from "@/pages/app";
import Documentation from "@/pages/documentation";
import FAQ from "@/pages/faq";
import Community from "@/pages/community";
import Support from "@/pages/support";
import NotFound from "@/pages/not-found";

// Import RainbowKit styles
import "@rainbow-me/rainbowkit/styles.css";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/app" component={App} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/faq" component={FAQ} />
      <Route path="/community" component={Community} />
      <Route path="/support" component={Support} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppRoot() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={arbflowTheme}>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default AppRoot;
