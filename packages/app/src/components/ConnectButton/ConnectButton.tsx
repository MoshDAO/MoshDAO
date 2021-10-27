import { useConnectToWallet } from "ethereal-react";

export const ConnectButton = () => {
  const [connect, { loading }] = useConnectToWallet();

  return (
    <button className="dark:text-white" disabled={loading} onClick={connect}>
      Connect to Wallet
    </button>
  );
};
