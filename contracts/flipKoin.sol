// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Smart Contract that is Used to create initial supply of FLK token.
contract flipKoin is ERC20 {
  constructor(uint256 initialSupply) ERC20("flipKoin", "FLK") {
    _mint(msg.sender,initialSupply);
  }
} 