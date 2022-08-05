# Sample Hardhat Project

Based on: https://theprimeagen.github.io/web3-smart-contracts/your-first-contract

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy-hello.ts
```

Hardhat generates a local network. To have a local network to deploy the contract to:
```
hardhat node
```

then
```
npx hardhat run scripts/deploy-hello.ts --network localhost
```


python server:
```shell
python3 -m http.server 6969
```