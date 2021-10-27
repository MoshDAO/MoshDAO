import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

task("deploy:Wave").setAction(
  async (taskArguments: TaskArguments, { ethers }) => {
    const [deployer] = await ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const Token = await ethers.getContractFactory("WavePortal");
    const portal = await Token.deploy();
    await portal.deployed();

    console.log("WavePortal address: ", portal.address);
  },
);
