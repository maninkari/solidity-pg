import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello World", () => {
    it("should get the hello world", async () => {
        // 1. setup
        // 2. deploy contract
        // 3. call functions to test
        const HW = await ethers.getContractFactory("HelloWorld");
        const hello = await HW.deploy();
        await hello.deployed();

        expect(await hello.hello()).to.equal("Hello, World");
    });
});