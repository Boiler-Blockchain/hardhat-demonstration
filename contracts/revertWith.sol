pragma solidity >=0.8.2 <0.9.0;


//import "hardhat/console.sol";

contract RevertWith {

    uint256 public num = 0;

    function addNum(uint256 newNum) public {
        require(newNum != 0, "This number is 0!"); //give example of using wrong message in tet case and using right one
        require(newNum % 2 == 0, "No odd nums allowed!");
        // console.log("This is hardhat!");
        // console.log(newNum);
        num = newNum;
    }

}