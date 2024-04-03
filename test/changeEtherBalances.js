const {
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");


describe("changeEtherBalances", function() {

    describe("pay", function() {

        it("Should split funds between friend and owner", async function() {
            const [owner, friend, payer] = await ethers.getSigners();
        
            const factory = await ethers.getContractFactory("changeBalances");
            const contract = await factory.deploy();
        
            await contract.setFriend(friend.address);
            
            await expect(contract.connect(payer).pay({value: 10})).to.changeEtherBalances(
                [payer, owner, friend],
                [-10, 5, 5]
            )
        })
    })
}) 