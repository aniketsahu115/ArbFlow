import { useAccount, useBalance, useChainId } from "wagmi";

export function useWallet() {
  const { address, isConnected, isConnecting } = useAccount();
  const chainId = useChainId();
  const { data: balance } = useBalance({
    address: address,
  });

  return {
    address,
    isConnected,
    isConnecting,
    chainId,
    balance: balance?.formatted || null,
    connect: () => {}, // RainbowKit handles connection
    disconnect: () => {}, // RainbowKit handles disconnection
  };
}
