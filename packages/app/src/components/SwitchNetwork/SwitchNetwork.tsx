import { useSwitchNetwork } from "ethereal-react";

export const SwitchNetwork = () => {
  const [switchNetwork, { loading }] = useSwitchNetwork({ chainId: 1337 });

  return (
    <div className="dark:text-white">
      The example only supports the local Hardhat network.
      <br />
      <button disabled={loading} onClick={switchNetwork}>
        Switch to Hardhat Network
      </button>
    </div>
  );
};
