import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, arbitrumSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "ArbFlow - Your Sovereign DeFi Co-Pilot",
  projectId: process.env.VITE_WALLETCONNECT_PROJECT_ID || "demo", // Get this from WalletConnect Cloud
  chains: [arbitrum, arbitrumSepolia],
  ssr: false, // If your dApp uses server side rendering (SSR)
});
