import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { Fixture } from "ethereum-waffle";

import type { Greeter } from "@/typechain/Greeter";

declare module "mocha" {
  export interface Context {
    greeter: Greeter;
    // eslint-disable-next-line no-unused-vars
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}
