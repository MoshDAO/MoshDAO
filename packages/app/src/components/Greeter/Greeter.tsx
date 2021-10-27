import {
  useContract,
  useReadContract,
  useTokenBalance,
  useWriteContract,
} from "ethereal-react";

import { Greeter__factory } from "@/typechain/factories/Greeter__factory";

export const Greeter = () => {
  const contract = useContract("0x0000", Greeter__factory);
  const greeting = useReadContract(contract, "greet");
  const [setGreeting] = useWriteContract(contract, "setGreeting");
  const balance = useTokenBalance(contract);

  return (
    <div>
      {greeting}
      <button
        onClick={() => {
          return setGreeting("Hello, world!");
        }}
      >
        Set
      </button>
    </div>
  );
};
