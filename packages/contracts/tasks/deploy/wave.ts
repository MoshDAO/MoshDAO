import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

task("deploy:Wave").setAction(
  async (taskArguments: TaskArguments, { ethers }) => {
    const waveContractFactory = await ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({
      value: ethers.utils.parseEther("0.1"),
    });
    await waveContract.deployed();
    console.log("Contract addy:", waveContract.address);

    let contractBalance = await ethers.provider.getBalance(
      waveContract.address,
    );
    console.log("Contract balance:", ethers.utils.formatEther(contractBalance));

    /*
     * Let's try two waves now
     */
    const waveTxn = await waveContract.wave("This is wave #1");
    await waveTxn.wait();

    const waveTxn2 = await waveContract.wave("This is wave #2");
    await waveTxn2.wait();

    contractBalance = await ethers.provider.getBalance(waveContract.address);
    console.log("Contract balance:", ethers.utils.formatEther(contractBalance));

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
  },
);
