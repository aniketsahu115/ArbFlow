import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const TokenSwapIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);

export const YieldFarmingIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2v20" />
    <path d="M8 5l4-3 4 3" />
    <path d="M8 19l4 3 4-3" />
    <circle cx="12" cy="9" r="2" />
    <circle cx="12" cy="15" r="2" />
    <path d="M12 11v2" />
    <path d="M17 9h2v6h-2" />
    <path d="M5 9h2v6H5" />
  </svg>
);

export const PortfolioIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 8h10" />
    <path d="M7 12h7" />
    <path d="M7 16h4" />
    <path d="M17 12l2 2-2 2" />
    <circle cx="6" cy="6" r="1" />
  </svg>
);

export const FastBridgeIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
);
