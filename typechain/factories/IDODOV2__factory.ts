/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDODOV2, IDODOV2Interface } from "../IDODOV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "payBaseAmount",
        type: "uint256",
      },
    ],
    name: "querySellBase",
    outputs: [
      {
        internalType: "uint256",
        name: "receiveQuoteAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mtFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "payQuoteAmount",
        type: "uint256",
      },
    ],
    name: "querySellQuote",
    outputs: [
      {
        internalType: "uint256",
        name: "receiveBaseAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mtFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IDODOV2__factory {
  static readonly abi = _abi;
  static createInterface(): IDODOV2Interface {
    return new utils.Interface(_abi) as IDODOV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDODOV2 {
    return new Contract(address, _abi, signerOrProvider) as IDODOV2;
  }
}