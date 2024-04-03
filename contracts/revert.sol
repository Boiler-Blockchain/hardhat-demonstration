pragma solidity >=0.8.2 <0.9.0;


contract Revert {

    uint256 public num = 0;

    function addNum(uint256 newNum) public {
        require(newNum != 0);
        num = newNum;
    }

}