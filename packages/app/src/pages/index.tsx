import WalletConnectProvider from "@walletconnect/web3-provider";
import {
  useContract,
  ERC721_ABI,
  useWriteContract,
  useWaitForTransaction,
  useBlock,
  useReadContract,
  useBalance,
  useDisconnectWallet,
  WalletProvider,
  RequireNetwork,
} from "ethereal-react";
import type { Contract, ContractTransaction } from "ethereal-react";
import React, { Suspense, useState } from "react";

import { ConnectButton } from "@/app/components/ConnectButton";
import { SwitchNetwork } from "@/app/components/SwitchNetwork";
import { TechStackList } from "@/app/components/TechStackList";
import TechStackDeployment from "@/deployments/localhost/TechStack.json";

const Minted = ({
  transaction,
  contract,
  tokenId,
}: {
  transaction: ContractTransaction;
  contract: Contract;
  tokenId: number;
}) => {
  const confirmation = useWaitForTransaction(transaction);
  const tokenURI = useReadContract(contract, "tokenURI", tokenId);

  return (
    <div>
      Minted!
      {confirmation.status}
      <img
        src={JSON.parse(atob(tokenURI.split(",")[1])).image}
        alt={JSON.parse(atob(tokenURI.split(",")[1]))}
      />
    </div>
  );
};

const Minter = ({ contract }: { contract: Contract }) => {
  const [id, setId] = useState("");
  const [claimTechStack, { loading, data }] = useWriteContract(
    contract,
    "claim",
  );

  if (data) {
    return (
      <Suspense fallback={<div>Minting...</div>}>
        <Minted contract={contract} tokenId={+id} transaction={data} />
      </Suspense>
    );
  }

  return (
    <div className="p-10 border border-teal-800">
      <div>
        <input
          placeholder="Token ID..."
          value={id}
          onChange={e => {
            return setId(e.currentTarget.value);
          }}
        />
      </div>
      <button
        disabled={loading}
        onClick={() => {
          return claimTechStack(+id);
        }}
      >
        Mint TechStack
      </button>
    </div>
  );
};

const Home = () => {
  const disconnect = useDisconnectWallet();
  const [block] = useBlock();
  const balance = useBalance();
  const TechStack = useContract(TechStackDeployment.address, [
    ...ERC721_ABI,
    "function claim(uint256 tokenId)",
  ]);

  return (
    <div className="dark:text-white">
      <div>Block number: {block.number}</div>
      <div>Balance: {balance.toString()}</div>
      <TechStackList />
      <Minter contract={TechStack} />
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
};

export const HomePage = () => {
  return (
    <WalletProvider
      cacheProvider
      network="localhost"
      providerOptions={{
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
          },
        },
      }}
      fallback={<ConnectButton />}
      loading={null}
    >
      <Suspense fallback="Loading...">
        <RequireNetwork chainId={31337} fallback={<SwitchNetwork />}>
          <Home />
        </RequireNetwork>
      </Suspense>
    </WalletProvider>
  );
};

export default HomePage;
