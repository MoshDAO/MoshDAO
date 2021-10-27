// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 public totalWaves;

    constructor() {
        console.log("Yo yo, I am a contract am I am smart");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
