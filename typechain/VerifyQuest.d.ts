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

interface VerifyQuestInterface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "VERIFY_TYPEHASH()": FunctionFragment;
    "digestFor(address)": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "openingCeremony()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setVerifier(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verifier()": FunctionFragment;
    "verify(uint8,bytes32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VERIFY_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "digestFor", values: [string]): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(
    functionFragment: "openingCeremony",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setVerifier", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VERIFY_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "digestFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openingCeremony",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class VerifyQuest extends BaseContract {
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

  interface: VerifyQuestInterface;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    VERIFY_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    digestFor(
      quester: string,
      overrides?: CallOverrides
    ): Promise<[string] & { digest: string }>;

    nonces(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    openingCeremony(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVerifier(
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifier(overrides?: CallOverrides): Promise<[string]>;

    verify(
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  VERIFY_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  digestFor(quester: string, overrides?: CallOverrides): Promise<string>;

  nonces(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  openingCeremony(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVerifier(
    _verifier: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifier(overrides?: CallOverrides): Promise<string>;

  verify(
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    VERIFY_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    digestFor(quester: string, overrides?: CallOverrides): Promise<string>;

    nonces(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    openingCeremony(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setVerifier(_verifier: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    verifier(overrides?: CallOverrides): Promise<string>;

    verify(
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
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
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    VERIFY_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    digestFor(quester: string, overrides?: CallOverrides): Promise<BigNumber>;

    nonces(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    openingCeremony(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVerifier(
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifier(overrides?: CallOverrides): Promise<BigNumber>;

    verify(
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERIFY_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    digestFor(
      quester: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonces(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    openingCeremony(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVerifier(
      _verifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verify(
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}