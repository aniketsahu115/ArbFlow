import React from "react";

interface ArbFlowLogoProps {
  className?: string;
  size?: number;
  showGlow?: boolean;
}

export const ArbFlowLogo: React.FC<ArbFlowLogoProps> = ({
  className = "",
  size = 56, // Increased default size from 48 to 56 for better visibility
  showGlow = true,
}) => (
  <div
    className={`${className} ${showGlow ? "drop-shadow-lg" : ""} flex-shrink-0`}
  >
    <img
      src="/logos/arbitrum-logomark.svg"
      alt="ArbFlow Logo"
      width={size}
      height={size}
      className="w-auto h-auto object-contain"
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  </div>
);

// Icon-only version for smaller spaces
export const ArbFlowIcon: React.FC<ArbFlowLogoProps> = (props) => (
  <ArbFlowLogo {...props} size={props.size || 32} showGlow={false} />
);

// Large version for hero sections
export const ArbFlowLogoLarge: React.FC<ArbFlowLogoProps> = (props) => (
  <ArbFlowLogo {...props} size={props.size || 96} showGlow={true} />
);

// Special lockup version for hero with Arbitrum branding
export const ArbitrumLockup: React.FC<ArbFlowLogoProps> = ({
  className = "",
  size = 200,
  showGlow = true,
}) => (
  <div
    className={`${className} ${showGlow ? "drop-shadow-lg" : ""} flex-shrink-0`}
  >
    <img
      src="/logos/arbitrum-lockup.svg"
      alt="Arbitrum"
      width={size}
      height={size * 0.4} // Maintain aspect ratio for lockup
      className="w-auto h-auto object-contain"
      style={{ width: `${size}px`, height: `${size * 0.4}px` }}
    />
  </div>
);
