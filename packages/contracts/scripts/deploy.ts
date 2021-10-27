import { ethers } from "hardhat";

const main = async () => {
  const factory = await ethers.getContractFactory("Counter");

  let contract = await factory.deploy();

  console.log(
    `The address the Contract WILL have once mined: ${contract.address}`,
  );

  console.log(
    `The transaction that was sent to the network to deploy the Contract: ${contract.deployTransaction.hash}`,
  );

  console.log(
    "The contract is NOT deployed yet; we must wait until it is mined...",
  );
  await contract.deployed();
  console.log("Mined!");
};

main()
  .then(() => {
    return process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
