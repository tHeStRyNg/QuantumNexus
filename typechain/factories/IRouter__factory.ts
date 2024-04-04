/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRouter, IRouterInterface } from "../IRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "base",
        type: "address",
      },
      {
        internalType: "address",
        name: "quote",
        type: "address",
      },
    ],
    name: "getFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "routerIdx",
        type: "uint8",
      },
    ],
    name: "getRouterAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "base",
        type: "address",
      },
      {
        internalType: "address",
        name: "quote",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
    ],
    name: "updateFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "routerIdx",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "updateRouterAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IRouterInterface {
    return new utils.Interface(_abi) as IRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRouter {
    return new Contract(address, _abi, signerOrProvider) as IRouter;
  }
}