pragma solidity >=0.8.2 <0.9.0;


contract changeBalances {

    uint256 public num = 0;

    address owner;
    address friend;

    constructor () {
        owner = msg.sender;
    }

    function setFriend(address dude) public {
        friend = dude;
    }

    function pay() external payable {
      
        payable(owner).transfer(msg.value/2);
        payable(friend).transfer(msg.value/2);
        
  }

}



