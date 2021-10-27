import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import hre from "hardhat";
import type { Artifact } from "hardhat/types";

import { shouldBehaveLikeGreeter } from "./Greeter.behavior";

import type { Greeter } from "@/typechain/Greeter";

const { deployContract } = hre.waffle;

export interface Signers {
  admin: SignerWithAddress;
}

describe("Unit tests", () => {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await hre.ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Greeter", () => {
    beforeEach(async function () {
      const greeting: string = "Hello, world!";
      const greeterArtifact: Artifact = await hre.artifacts.readArtifact(
        "Greeter",
      );
      this.greeter = <Greeter>(
        await deployContract(this.signers.admin, greeterArtifact, [greeting])
      );
    });

    shouldBehaveLikeGreeter();
  });
});
