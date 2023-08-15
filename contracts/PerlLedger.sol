// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract PerlLedger is Initializable, OwnableUpgradeable {
    // Defining the Structure for Credit Overall
    struct CreditOverall {
        string txId;
        string txType;
        uint256 credit;
    }

    // Mapping to store CreditOverall objects by txRef
    mapping(string => CreditOverall) public creditOveralls;

    // Initialize function replaces the constructor in upgradeable contracts
    function initialize() public initializer {
        __Ownable_init(); // Call the initializer for the Ownable contract
    }

    // Function to create a new CreditOverall
    function createCreditOverall(string memory _txId, string memory _txRef, string memory _txType, uint256 _credit) public onlyOwner {
        creditOveralls[_txRef] = CreditOverall(_txId, _txType, _credit);
    }

    // Function to query a CreditOverall by txRef
    function getCreditOverall(string memory _txRef) public view returns (CreditOverall memory) {
        return creditOveralls[_txRef];
    }

    // Additional functions can be added for updating, deleting, etc., protected with onlyOwner
}

