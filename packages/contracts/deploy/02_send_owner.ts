import * as dotenv from "dotenv";
import type { HardhatRuntimeEnvironment } from "hardhat/types";

dotenv.config();

const deploy = async ({ ethers, network }: HardhatRuntimeEnvironment) => {
  console.log(`WALLET_PUBLIC_ADDRESS: ${process.env.WALLET_PUBLIC_ADDRESS}`);

  if (network.name !== "hardhat") {
    return;
  }

  const [owner] = await ethers.getSigners();
  const transactionHash = await owner.sendTransaction({
    to: process.env.WALLET_PUBLIC_ADDRESS,
    value: ethers.utils.parseEther("100.0"),
  });
  console.log(`transactionHash: ${transactionHash.hash}`);
};

deploy.tags = ["TechStack"];

export default deploy;
