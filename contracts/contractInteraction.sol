pragma solidity >=0.8.2 <0.9.0;

contract Interaction {

    struct Account {
        string name;
        uint256 balance;
        address owner;
    }

    mapping(uint256 => Account) public accounts;

    uint256 public accountAmount;

    address[] public accountAddress;

    constructor () {
        accounts[12345].name = "test";
        accounts[12345].balance = 100;
        accountAmount += 1;
        accountAddress.push(msg.sender);
    }

    function createNewAccount(string memory name, uint256 balance, uint256 id) public {
        accounts[id].name = name;
        accounts[id].balance = balance;
        accountAmount += 1;
        accountAddress.push(msg.sender);
    }

}