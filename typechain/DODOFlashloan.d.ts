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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DODOFlashloanInterface extends ethers.utils.Interface {
  functions: {
    "DPPFlashLoanCall(address,uint256,uint256,bytes)": FunctionFragment;
    "DSPFlashLoanCall(address,uint256,uint256,bytes)": FunctionFragment;
    "DVMFlashLoanCall(address,uint256,uint256,bytes)": FunctionFragment;
    "dodoFlashLoan(address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DPPFlashLoanCall",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "DSPFlashLoanCall",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "DVMFlashLoanCall",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dodoFlashLoan",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DPPFlashLoanCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DSPFlashLoanCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DVMFlashLoanCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dodoFlashLoan",
    data: BytesLike
  ): Result;

  events: {
    "checkBorrowedAmount(address,uint256)": EventFragment;
    "payBackLoan(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "checkBorrowedAmount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "payBackLoan"): EventFragment;
}

export type checkBorrowedAmountEvent = TypedEvent<
  [string, BigNumber] & { token: string; amount: BigNumber }
>;

export type payBackLoanEvent = TypedEvent<
  [string, BigNumber] & { token: string; amount: BigNumber }
>;

export class DODOFlashloan extends BaseContract {
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

  interface: DODOFlashloanInterface;

  functions: {
    DPPFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    DSPFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    DVMFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dodoFlashLoan(
      flashLoanPool: string,
      loanAmount: BigNumberish,
      loanToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DPPFlashLoanCall(
    sender: string,
    baseAmount: BigNumberish,
    quoteAmount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  DSPFlashLoanCall(
    sender: string,
    baseAmount: BigNumberish,
    quoteAmount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  DVMFlashLoanCall(
    sender: string,
    baseAmount: BigNumberish,
    quoteAmount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dodoFlashLoan(
    flashLoanPool: string,
    loanAmount: BigNumberish,
    loanToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DPPFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    DSPFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    DVMFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    dodoFlashLoan(
      flashLoanPool: string,
      loanAmount: BigNumberish,
      loanToken: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "checkBorrowedAmount(address,uint256)"(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    checkBorrowedAmount(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    "payBackLoan(address,uint256)"(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    payBackLoan(
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    DPPFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    DSPFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    DVMFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dodoFlashLoan(
      flashLoanPool: string,
      loanAmount: BigNumberish,
      loanToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DPPFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    DSPFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    DVMFlashLoanCall(
      sender: string,
      baseAmount: BigNumberish,
      quoteAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dodoFlashLoan(
      flashLoanPool: string,
      loanAmount: BigNumberish,
      loanToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
