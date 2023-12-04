// Get user account number
import { useConnectModal, useAccount } from "@rainbow-me/rainbowkit";

export function useRainbowKit() {
  const { openConnectModal } = useConnectModal();
  const { account } = useAccount();

  const handleConnectClick = () => {
    openConnectModal();
  };

  return {
    account,
    handleConnectClick,
  };
}