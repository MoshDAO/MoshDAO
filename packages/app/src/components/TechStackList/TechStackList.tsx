import type { Contract } from "ethereal-react";
import {
  ERC721_ABI,
  useContract,
  useTokenMetadata,
  useTokenBalance,
  useReadContract,
  useUserAddress,
} from "ethereal-react";

import TechStackDeployment from "@/deployments/localhost/TechStack.json";

const TechStackPreview = ({
  index,
  contract,
}: {
  index: number;
  contract: Contract;
}) => {
  const address = useUserAddress();
  const tokenID = useReadContract(
    contract,
    "tokenOfOwnerByIndex",
    address,
    index,
  );
  const metadata = useTokenMetadata(contract, tokenID);

  return (
    <div>
      {metadata.name}{" "}
      <img
        width={100}
        height={100}
        src={metadata.image}
        alt={metadata.description}
      />
    </div>
  );
};

export const TechStackList = () => {
  const TechStack = useContract(TechStackDeployment.address, [
    ...ERC721_ABI,
    "function claim(uint256 tokenId)",
  ]);

  const balance = useTokenBalance(TechStack);

  return (
    <div className="dark:text-white">
      Tech Stack Balance: {balance.toString()}
      <ul>
        {Array.from({ length: balance.toNumber() }, (_, index) => {
          return (
            <TechStackPreview key={index} index={index} contract={TechStack} />
          );
        })}
      </ul>
    </div>
  );
};
