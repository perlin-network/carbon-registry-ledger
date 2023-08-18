# PERL Ledger Smart Contract

Distributed version of the PERLIN cabron registry ledger.

**Networks**
- *hardhat*
- *sepolia* 
- *mainnet*

## Steps for the contract deployment

1. Build the upgradable contract.
```
yarn build
```

2. Run tests to ensure everything's working as expected.
```
yarn test

```
3. Run the deployment and receive the contract address as output.
```
yarn deploy
```

4. Verify the uploaded contract.
```
yarn verify {{address_output_here}}
```

### Deployed contracts

- [*PERL Ledger sepolia*](https://sepolia.etherscan.io/address/0x825164250e45a7be171ef13f6f9b03b66e956948)
- *mainnet*