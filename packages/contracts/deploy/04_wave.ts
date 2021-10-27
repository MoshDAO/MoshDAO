import type { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy = async ({
  getNamedAccounts,
  deployments,
}: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("WavePortal", {
    args: [],
    from: deployer,
    log: true,
  });
};

deploy.tags = ["WavePortal"];

export default deploy;
