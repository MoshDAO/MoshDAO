import type { HardhatRuntimeEnvironment } from "hardhat/types";

import type { Greeter } from "@/typechain/Greeter";
import type { Greeter__factory } from "@/typechain/factories/Greeter__factory";

const deploy = async ({
  getNamedAccounts,
  deployments,
  ethers,
}: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("MyNFT", {
    args: [],
    from: deployer,
    log: true,
  });
  const greeterFactory: Greeter__factory = await ethers.getContractFactory(
    "Greeter",
  );
  const greeter: Greeter = <Greeter>await greeterFactory.deploy("Hello");
  await greeter.deployed();
};

deploy.tags = ["Greeter"];

export default deploy;
