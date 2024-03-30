### QuantumNexus
Flash loans are a powerful tool in decentralized finance (DeFi) that allow users to borrow assets without collateral as long as the borrowed amount is repaid within the same transaction block. Flash loans are often used for arbitrage opportunities, collateral swapping, and other sophisticated DeFi strategies.

With this code we want to achieve transcation Atomicity with Zero colateral loans using DeFi Liquidity Providers for Crypto Token Arbitrage across two different exchanges.

### Architecture Overview
![image](https://github.com/tHeStRyNg/QuantumNexus/assets/118682909/5a34357c-cc15-473a-8bfa-5fb9d2221a68)


### Requirements Definition

#### The OS Used:
- OS: Ubuntu 20.04 LTS x64
- <code>Linux flash1 5.4.0-170-generic #188-Ubuntu SMP Wed Jan 10 09:51:01 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux </code>

#### Software Used:
- SysAdmin experience with Linux based on Debian Environments is important specially to troubleshoot and RCA (Root Cause Analysis).
- Understanding of Blockchain and Smart Contracts: solid grasp of blockchain technology and how smart contracts work.
- Ethereum and Hardhat Knowledge: Familiarity with Ethereum and the Hardhat development environment is essential.
- If you’re new to Hardhat, consider going through their official documentation first here https://hardhat.org/getting-started
- Node.js and NPM: Ensure you have Node.js and NPM (Node Package Manager) installed on your server.
- Remix ETH IDE - Remix Online IDE is a powerful toolset for developing, deploying, debugging, and testing Ethereum and EVM-compatible smart contracts. - https://remix.ethereum.org
- Infura - https://www.infura.io
- Alchemy - https://alchemy.com
- MetaMask - https://metamask.io

### Project Execution Procedure
#### Step 1 - Update OS
<code> $ apt update -y && apt upgrade -y </code>

Reboot afterwards

#### Step 2 - Initialize New HardHat Project
Open your terminal and navigate to your desired project directory. Run the following commands:

<code>npm install --save-dev hardhat</code>

<code>npx hardhat</code>

Follow the prompts to create a new Hardhat project. Choose the default settings for simplicity.

#### Step 3 - Install Dependencies
We’ll need to install some additional dependencies for our project. Open your terminal and run the following commands:

<code>yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv</code>

<code>yarn add @aave/core-v3</code>

#### Step 4: Project Structure
Your project directory should now have the following structure:

![image](https://github.com/tHeStRyNg/QuantumNexus/assets/118682909/ee3302af-2560-40ea-aade-7a8e94096a34)

create <code>.env</code> file, add both <code>SEPOLIA_RPC_URL</code> and <code>PRIVATE_KEY</code> by your proper credentials as follows:

<code>SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/....</code>

<code>PRIVATE_KEY=....</code>
