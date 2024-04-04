/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IProtocolFeesCollector,
  IProtocolFeesCollectorInterface,
} from "../IProtocolFeesCollector";

const _abi = [
  {
    inputs: [],
    name: "getFlashLoanFeePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSwapFeePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IProtocolFeesCollector__factory {
  static readonly abi = _abi;
  static createInterface(): IProtocolFeesCollectorInterface {
    return new utils.Interface(_abi) as IProtocolFeesCollectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProtocolFeesCollector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IProtocolFeesCollector;
  }
}
