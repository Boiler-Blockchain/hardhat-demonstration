const {
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("contractInteraction", function() {
    it("Should allow access to different global variables", async function() {
        const factory = await ethers.getContractFactory("Interaction");
        const contract = await factory.deploy();

        //Mapping
        let myAccount = await contract.accounts(12345)
        console.log("Name: " + myAccount.name)
        console.log("Balance: " + myAccount.balance)

        //array
        let accountAddress = await contract.accountAddress(0);
        console.log("Address at index 0: " + accountAddress)

        //global variable
        let accountAmount = await contract.accountAmount();
        console.log("Amount of accounts: " + accountAmount)

    })
    it("Should allow access to functions", async function() {
        const factory = await ethers.getContractFactory("Interaction");
        const contract = await factory.deploy();

        await contract.createNewAccount("hi", 10000, 10)

        console.log("After Account Creation")

        //Mapping
        let myAccount = await contract.accounts(10)
        console.log("Name: " + myAccount.name)
        console.log("Balance: " + myAccount.balance)

        //array
        let accountAddress = await contract.accountAddress(1);
        console.log("Address at index 1: " + accountAddress)

        //global variable
        let accountAmount = await contract.accountAmount();
        console.log("Amount of accounts: " + accountAmount)

    })
})