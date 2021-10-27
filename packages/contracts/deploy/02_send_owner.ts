import * as dotenv from "dotenv";
import type { HardhatRuntimeEnvironment } from "hardhat/types";

dotenv.config();

const deploy = async ({ ethers }: HardhatRuntimeEnvironment) => {
  console.log(`DEPLOY_ADDRESS: ${process.env.DEPLOY_ADDRESS}`);

  const [owner] = await ethers.getSigners();
  const transactionHash = await owner.sendTransaction({
    to: process.env.DEPLOY_ADDRESS,
    value: ethers.utils.parseEther("100.0"),
  });
  console.log(`transactionHash: ${transactionHash.hash}`);
};

deploy.tags = ["TechStack"];

export default deploy;
