import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

task("deploy:NFT").setAction(
  async (taskArguments: TaskArguments, { ethers }) => {
    const nftContractFactory = await ethers.getContractFactory("MyEpicNFT");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    let txn = await nftContract.makeAnEpicNFT();
    await txn.wait();

    txn = await nftContract.makeAnEpicNFT();
    await txn.wait();
  },
);
