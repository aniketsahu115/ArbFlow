import { Theme } from "@rainbow-me/rainbowkit";

export const arbflowTheme: Theme = {
  blurs: {
    modalOverlay: "blur(4px)",
  },
  colors: {
    accentColor: "#3B82F6", // Blue-500
    accentColorForeground: "#FFFFFF",
    actionButtonBorder: "rgba(255, 255, 255, 0.04)",
    actionButtonBorderMobile: "rgba(255, 255, 255, 0.06)",
    actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
    closeButton: "#9CA3AF",
    closeButtonBackground: "rgba(255, 255, 255, 0.08)",
    connectButtonBackground: "linear-gradient(to right, #FCD34D, #F59E0B)",
    connectButtonBackgroundError: "#EF4444",
    connectButtonInnerBackground: "linear-gradient(to right, #FCD34D, #F59E0B)",
    connectButtonText: "#000000",
    connectButtonTextError: "#FFFFFF",
    connectionIndicator: "#10B981",
    downloadBottomCardBackground:
      "linear-gradient(126deg, rgba(255, 255, 255, 0.04) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #1C1E24",
    downloadTopCardBackground:
      "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0.2) 71.04%), #1C1E24",
    error: "#EF4444",
    generalBorder: "rgba(255, 255, 255, 0.08)",
    generalBorderDim: "rgba(255, 255, 255, 0.04)",
    menuItemBackground: "rgba(60, 66, 66, 0.1)",
    modalBackdrop: "rgba(0, 0, 0, 0.4)",
    modalBackground: "#1C1E24",
    modalBorder: "rgba(255, 255, 255, 0.08)",
    modalText: "#F8FAFC",
    modalTextDim: "#94A3B8",
    modalTextSecondary: "#CBD5E1",
    profileAction: "rgba(255, 255, 255, 0.1)",
    profileActionHover: "rgba(255, 255, 255, 0.2)",
    profileForeground: "#1C1E24",
    selectedOptionBorder: "rgba(59, 130, 246, 0.3)",
    standby: "#F59E0B",
  },
  fonts: {
    body: "Manrope, Inter, system-ui, sans-serif",
  },
  radii: {
    actionButton: "12px",
    connectButton: "8px",
    menuButton: "12px",
    modal: "16px",
    modalMobile: "16px",
  },
  shadows: {
    connectButton: "0 8px 32px rgba(59, 130, 246, 0.32)",
    dialog: "0 8px 32px rgba(0, 0, 0, 0.32)",
    profileDetailsAction: "0 2px 6px rgba(0, 0, 0, 0.06)",
    selectedOption: "0 2px 6px rgba(0, 0, 0, 0.06)",
    selectedWallet: "0 2px 6px rgba(0, 0, 0, 0.06)",
    walletLogo: "0 2px 16px rgba(0, 0, 0, 0.16)",
  },
};
