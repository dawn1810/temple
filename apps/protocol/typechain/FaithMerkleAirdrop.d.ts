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

interface FaithMerkleAirdropInterface extends ethers.utils.Interface {
  functions: {
    "claim(uint256,address,uint256,bytes32[])": FunctionFragment;
    "faith()": FunctionFragment;
    "getClaimPeriod()": FunctionFragment;
    "isClaimed(uint256)": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "owner()": FunctionFragment;
    "setClaimEndTime(uint256)": FunctionFragment;
    "setClaimStartTime(uint256)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "faith", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getClaimPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setClaimEndTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimStartTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "faith", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClaimPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setClaimEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClaimStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;

  events: {
    "Claimed(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
}

export type ClaimedEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    index: BigNumber;
    account: string;
    amount: BigNumber;
  }
>;

export class FaithMerkleAirdrop extends BaseContract {
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

  interface: FaithMerkleAirdropInterface;

  functions: {
    claim(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    faith(overrides?: CallOverrides): Promise<[string]>;

    getClaimPeriod(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setClaimEndTime(
      _claimEndTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClaimStartTime(
      _claimStartTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claim(
    index: BigNumberish,
    account: string,
    amount: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  faith(overrides?: CallOverrides): Promise<string>;

  getClaimPeriod(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setClaimEndTime(
    _claimEndTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClaimStartTime(
    _claimStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    faith(overrides?: CallOverrides): Promise<string>;

    getClaimPeriod(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setClaimEndTime(
      _claimEndTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setClaimStartTime(
      _claimStartTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Claimed(uint256,address,uint256)"(
      index?: null,
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { index: BigNumber; account: string; amount: BigNumber }
    >;

    Claimed(
      index?: null,
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { index: BigNumber; account: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    claim(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    faith(overrides?: CallOverrides): Promise<BigNumber>;

    getClaimPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setClaimEndTime(
      _claimEndTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClaimStartTime(
      _claimStartTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    faith(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getClaimPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setClaimEndTime(
      _claimEndTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClaimStartTime(
      _claimStartTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}