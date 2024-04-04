/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IDODOProxyInterface extends ethers.utils.Interface {
  functions: {
    "dodoSwapV1(address,address,uint256,uint256,address[],uint256,bool,uint256)": FunctionFragment;
    "dodoSwapV2TokenToToken(address,address,uint256,uint256,address[],uint256,bool,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "dodoSwapV1",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      string[],
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "dodoSwapV2TokenToToken",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      string[],
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "dodoSwapV1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dodoSwapV2TokenToToken",
    data: BytesLike
  ): Result;

  events: {};
}

export class IDODOProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IDODOProxyInterface;

  functions: {
    dodoSwapV1(
      fromToken: string,
      toToken: string,
      fromTokenAmount: BigNumberish,
      minReturnAmount: BigNumberish,
      dodoPairs: string[],
      directions: BigNumberish,
      arg6: boolean,
      deadLine: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dodoSwapV2TokenToToken(
      fromToken: string,
      toToken: string,
      fromTokenAmount: BigNumberish,
      minReturnAmount: BigNumberish,
      dodoPairs: string[],
      directions: BigNumberish,
      isIncentive: boolean,
      deadLine: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  dodoSwapV1(
    fromToken: string,
    toToken: string,
    fromTokenAmount: BigNumberish,
    minReturnAmount: BigNumberish,
    dodoPairs: string[],
    directions: BigNumberish,
    arg6: boolean,
    deadLine: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dodoSwapV2TokenToToken(
    fromToken: string,
    toToken: string,
    fromTokenAmount: BigNumberish,
    minReturnAmount: BigNumberish,
    dodoPairs: string[],
    directions: BigNumberish,
    isIncentive: boolean,
    deadLine: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    dodoSwapV1(
      fromToken: string,
      toToken: string,
      fromTokenAmount: BigNumberish,
      minReturnAmount: BigNumberish,
      dodoPairs: string[],
      directions: BigNumberish,
      arg6: boolean,
      deadLine: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dodoSwapV2TokenToToken(
      fromToken: string,
      toToken: string,
      fromTokenAmount: BigNumberish,
      minReturnAmount: BigNumberish,
      dodoPairs: string[],
      directions: BigNumberish,
      isIncentive: boolean,
      deadLine: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    dodoSwapV1(
      fromToken: string,
      toToken: string,
      fromTokenAmount: BigNumberish,
      minReturnAmount: BigNumberish,
      dodoPairs: string[],
      directions: BigNumberish,
      arg6: boolean,
      deadLine: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dodoSwapV2TokenToToken(
      fromToken: string,
      toToken: string,
      fromTokenAmount: BigNumberish,
      minReturnAmount: BigNumberish,
      dodoPairs: string[],
      directions: BigNumberish,
      isIncentive: boolean,
      deadLine: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    dodoSwapV1(
      fromToken: string,
      toToken: string,
      fromTokenAmount: BigNumberish,
      minReturnAmount: BigNumberish,
      dodoPairs: string[],
      directions: BigNumberish,
      arg6: boolean,
      deadLine: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dodoSwapV2TokenToToken(
      fromToken: string,
      toToken: string,
      fromTokenAmount: BigNumberish,
      minReturnAmount: BigNumberish,
      dodoPairs: string[],
      directions: BigNumberish,
      isIncentive: boolean,
      deadLine: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
