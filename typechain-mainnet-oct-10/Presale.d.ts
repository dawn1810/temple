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
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PresaleInterface extends ethers.utils.Interface {
  functions: {
    "PRESALE_ALLOCATION()": FunctionFragment;
    "STABLEC()": FunctionFragment;
    "STAKING()": FunctionFragment;
    "STAKING_LOCK()": FunctionFragment;
    "TEMPLE()": FunctionFragment;
    "TREASURY()": FunctionFragment;
    "allocationUsed(address)": FunctionFragment;
    "mintAndStake(uint256)": FunctionFragment;
    "mintMultiple()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setUnlockTimestamp(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlockTimestamp()": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "PRESALE_ALLOCATION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "STABLEC", values?: undefined): string;
  encodeFunctionData(functionFragment: "STAKING", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "STAKING_LOCK",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TEMPLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "TREASURY", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allocationUsed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndStake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintMultiple",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setUnlockTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "PRESALE_ALLOCATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "STABLEC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "STAKING", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "STAKING_LOCK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TEMPLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TREASURY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allocationUsed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintMultiple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUnlockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "MintComplete(address,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MintComplete"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type MintCompleteEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    minter: string;
    acceptedStablec: BigNumber;
    mintedTemple: BigNumber;
    mintedOGTemple: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class Presale extends BaseContract {
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

  interface: PresaleInterface;

  functions: {
    PRESALE_ALLOCATION(overrides?: CallOverrides): Promise<[string]>;

    STABLEC(overrides?: CallOverrides): Promise<[string]>;

    STAKING(overrides?: CallOverrides): Promise<[string]>;

    STAKING_LOCK(overrides?: CallOverrides): Promise<[string]>;

    TEMPLE(overrides?: CallOverrides): Promise<[string]>;

    TREASURY(overrides?: CallOverrides): Promise<[string]>;

    allocationUsed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mintAndStake(
      _amountPaidStablec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintMultiple(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUnlockTimestamp(
      _unlockTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlockTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  PRESALE_ALLOCATION(overrides?: CallOverrides): Promise<string>;

  STABLEC(overrides?: CallOverrides): Promise<string>;

  STAKING(overrides?: CallOverrides): Promise<string>;

  STAKING_LOCK(overrides?: CallOverrides): Promise<string>;

  TEMPLE(overrides?: CallOverrides): Promise<string>;

  TREASURY(overrides?: CallOverrides): Promise<string>;

  allocationUsed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  mintAndStake(
    _amountPaidStablec: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintMultiple(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUnlockTimestamp(
    _unlockTimestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    PRESALE_ALLOCATION(overrides?: CallOverrides): Promise<string>;

    STABLEC(overrides?: CallOverrides): Promise<string>;

    STAKING(overrides?: CallOverrides): Promise<string>;

    STAKING_LOCK(overrides?: CallOverrides): Promise<string>;

    TEMPLE(overrides?: CallOverrides): Promise<string>;

    TREASURY(overrides?: CallOverrides): Promise<string>;

    allocationUsed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    mintAndStake(
      _amountPaidStablec: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mintMultiple(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setUnlockTimestamp(
      _unlockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "MintComplete(address,uint256,uint256,uint256)"(
      minter?: null,
      acceptedStablec?: null,
      mintedTemple?: null,
      mintedOGTemple?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        minter: string;
        acceptedStablec: BigNumber;
        mintedTemple: BigNumber;
        mintedOGTemple: BigNumber;
      }
    >;

    MintComplete(
      minter?: null,
      acceptedStablec?: null,
      mintedTemple?: null,
      mintedOGTemple?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        minter: string;
        acceptedStablec: BigNumber;
        mintedTemple: BigNumber;
        mintedOGTemple: BigNumber;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    PRESALE_ALLOCATION(overrides?: CallOverrides): Promise<BigNumber>;

    STABLEC(overrides?: CallOverrides): Promise<BigNumber>;

    STAKING(overrides?: CallOverrides): Promise<BigNumber>;

    STAKING_LOCK(overrides?: CallOverrides): Promise<BigNumber>;

    TEMPLE(overrides?: CallOverrides): Promise<BigNumber>;

    TREASURY(overrides?: CallOverrides): Promise<BigNumber>;

    allocationUsed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    mintAndStake(
      _amountPaidStablec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintMultiple(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUnlockTimestamp(
      _unlockTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PRESALE_ALLOCATION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    STABLEC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STAKING(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STAKING_LOCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TEMPLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TREASURY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allocationUsed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintAndStake(
      _amountPaidStablec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintMultiple(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUnlockTimestamp(
      _unlockTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlockTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}