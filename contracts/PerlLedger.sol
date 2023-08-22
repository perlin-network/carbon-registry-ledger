// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract PerlLedger is Initializable, OwnableUpgradeable {
    // Defining the Structure for Carbon Transfer
    struct CarbonTransfer {
        string requestRef;
        string status;
        uint256 creditAmount;
    }

    // Mapping to store Carbon Transfers by programme serialNo
    mapping(string => CarbonTransfer[]) public carbonTransfers;

    // Initialize function replaces the constructor in upgradeable contracts
    function initialize() public initializer {
        __Ownable_init(); // Call the initializer for the Ownable contract
    }

    // Function to create a new Carbon Transfer
    function addCarbonTransfer(string memory _serialNo, string memory _requestRef, string memory status, uint256 _creditAmount) public onlyOwner {
        carbonTransfers[_serialNo].push(CarbonTransfer(_requestRef, status, _creditAmount));
    }

    // Function to query a Carbon Transfers by programme serialNo
    function getCarbonTransfers(string memory _serialNo) public view returns (CarbonTransfer[] memory) {
        return carbonTransfers[_serialNo];
    }

    // Function to query a Carbon Transfers count by programme serialNo
    function getCarbonTransferCount(string memory _serialNo) public view returns (uint256) {
        return carbonTransfers[_serialNo].length;
    }
}

