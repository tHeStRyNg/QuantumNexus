# Flash

An open source flashloan smart contract on polygon network

## Installation

### 1. Install [Node.js](https://nodejs.org/en/) & [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable), if you haven't already.

### 2. Clone This Repo

Run the following command.

```bash
git clone https://github.com/tHeStRyNg/QuantumNexus
cd QuantumNexus
```

## Quickstart

### 1. Setup Environment Variables

You'll need an `ALCHEMY_RPC_URL` environment variable. You can get one from [Alchemy website](https://alchemy.com/?r=33851811-6ecf-40c3-a36d-d0452dda8634) for free.

Then, you can create a .env file with the following.

```
ALCHEMY_RPC_URL='<your-own-alchemy-ethereum-mainnet-rpc-url>'
```

#### Add your Private Key

If you want to execute flashloan on the ethereum mainnet, you need to add your `PRIVATE_KEY` environment variable, [with a private key from your wallet](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).

```
PRIVATE_KEY='your-PRIVATE_KEY'
```

\*Note: If using metamask, you'll have to add a `0x` to the start of your private key)

### 2. Install Dependencies

Run the following command.

```bash
yarn install
```

### 3. Compile Smart Contracts

Run the following command.

```bash
yarn compile
```

### 4. Test on ETH Mainnet Fork 🔥

Run the following command.

```bash
yarn test test/dodoflash.test.ts
```

## Deploy

Once you have successfully done the above quickstart and added your private key to .env file, you can deploy your smart contract with the following command:

```bash
yarn deploy --network sepoliaa
```

It costs about 0.2 MATIC to deploy `Flashloan` contract.

## Example Contract

https://etherscan.com/address/0xb6c4448386c4ecf4e5eab057351f8a6a8a465a0d

## Liquidations

Deploy on the ethereum mainnnet fork with the following command:

```bash
yarn liquidations
```

Deploy on the ethereum mainnnet with the following command:

```bash
yarn liquidations --network polygon
```
