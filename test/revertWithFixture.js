const {
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");


describe("revertWithFix", function() {

    async function deployFixture() {
        
        const factory = await ethers.getContractFactory("RevertWith");
        const contract = await factory.deploy();

        return {contract, factory}
    }

    describe("addNum", function() {

        it("Should set the number", async function() {
            
            const {contract, factory} = await loadFixture(deployFixture)
            
            await contract.addNum(10)

            let num = await contract.num()

            expect(num).to.equal(10)

        })

        it("Should revert if number is 0", async function() {
            
            const {contract} = await loadFixture(deployFixture)
            
            await expect(contract.addNum(0)).to.be.revertedWith("This number is not 0!")
            await expect(contract.addNum(1)).to.be.revertedWith("No odd nums allowed!")
            

        })
    })
}) 