/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IRelicInterface extends utils.Interface {
  contractName: "IRelic";
  functions: {
    "getRelicId(address)": FunctionFragment;
    "hasRelic(address)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getRelicId", values: [string]): string;
  encodeFunctionData(functionFragment: "hasRelic", values: [string]): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getRelicId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRelic", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;

  events: {};
}

export interface IRelic extends BaseContract {
  contractName: "IRelic";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRelicInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getRelicId(_owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    hasRelic(_owner: string, overrides?: CallOverrides): Promise<[boolean]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  getRelicId(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  hasRelic(_owner: string, overrides?: CallOverrides): Promise<boolean>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getRelicId(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    hasRelic(_owner: string, overrides?: CallOverrides): Promise<boolean>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getRelicId(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    hasRelic(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRelicId(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasRelic(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}