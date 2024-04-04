/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "AaveFlashloan",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AaveFlashloan__factory>;
    getContractFactory(
      name: "FlashLoanSimpleReceiverBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlashLoanSimpleReceiverBase__factory>;
    getContractFactory(
      name: "IFlashLoanSimpleReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFlashLoanSimpleReceiver__factory>;
    getContractFactory(
      name: "IPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPool__factory>;
    getContractFactory(
      name: "IPoolAddressesProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolAddressesProvider__factory>;
    getContractFactory(
      name: "BalancerFlashLoan",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalancerFlashLoan__factory>;
    getContractFactory(
      name: "IBalancerVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBalancerVault__factory>;
    getContractFactory(
      name: "IFlashLoanRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFlashLoanRecipient__factory>;
    getContractFactory(
      name: "IProtocolFeesCollector",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProtocolFeesCollector__factory>;
    getContractFactory(
      name: "DodoBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DodoBase__factory>;
    getContractFactory(
      name: "Withdraw",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Withdraw__factory>;
    getContractFactory(
      name: "DODOFlashloan",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DODOFlashloan__factory>;
    getContractFactory(
      name: "DODOProxyIntegrate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DODOProxyIntegrate__factory>;
    getContractFactory(
      name: "IDODO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDODO__factory>;
    getContractFactory(
      name: "IDODOProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDODOProxy__factory>;
    getContractFactory(
      name: "IDODOV1Helper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDODOV1Helper__factory>;
    getContractFactory(
      name: "IDODOV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDODOV2__factory>;
    getContractFactory(
      name: "Flashloan",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Flashloan__factory>;
    getContractFactory(
      name: "IRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouter__factory>;
    getContractFactory(
      name: "Liquidations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Liquidations__factory>;
    getContractFactory(
      name: "ERC20Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Mock__factory>;
    getContractFactory(
      name: "Router",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Router__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV2Router",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "UniswapFork",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapFork__factory>;
    getContractFactory(
      name: "ISwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapRouter__factory>;
    getContractFactory(
      name: "IUniswapV3SwapCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
