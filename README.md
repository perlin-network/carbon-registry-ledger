# PERLIN Ledger Smart Contract

Distributed version of the PERLIN cabron registry ledger.

**Networks**
- *hardhat*
- *sepolia* 
- *mainnet*

## STEPS for contract deployment

1. Build the upgradable contract.
```
yarn build
```

2. Run tests to ensure nothing's broken.
```
yarn test

```
3. Run the deployment and receive the contract address as output.
```
yarn deploy
```

4. Verify the uploaded contract.
```
yarn verify {{paste address here}}
```

### Deployed contracts

- [*PERL Ledger sepolia*](https://sepolia.etherscan.io/address/0x55f12dca39e156001142b62f0de1b3bdd21e1d02)
- *mainnet*