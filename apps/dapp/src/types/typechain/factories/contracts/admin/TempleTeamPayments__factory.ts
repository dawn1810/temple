/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TempleTeamPayments,
  TempleTeamPaymentsInterface,
} from "../../../contracts/admin/TempleTeamPayments";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_TEMPLE",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "paymentPeriodInSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "TEMPLE",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "adhocPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allocation",
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
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "calculateClaimable",
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
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimed",
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
    name: "owner",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "pauseMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "roundEndDate",
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
    name: "roundStartDate",
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
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "setAllocations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawTempleBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200176f3803806200176f8339810160408190526200003491620000bb565b6200003f336200006b565b6080819052620000508282620000fe565b60a052505060601b6001600160601b03191660c05262000123565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060608486031215620000d0578283fd5b83516001600160a01b0381168114620000e7578384fd5b602085015160409095015190969495509392505050565b600082198211156200011e57634e487b7160e01b81526011600452602481fd5b500190565b60805160a05160c05160601c6115f06200017f60003960008181610156015281816106a80152818161088d015261098f0152600081816102670152610ca201526000818160ff01528181610c810152610ccb01526115f06000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063adfc500b11610097578063d4cc2dd311610066578063d4cc2dd31461023c578063f2fde38b1461024f578063f73fae7114610262578063fe7b00071461028957600080fd5b8063adfc500b146101d6578063b81b8630146101e9578063c884ef8314610209578063cffc8e641461022957600080fd5b806350e23d00116100d357806350e23d0014610151578063715018a61461019d5780638da5cb5b146101a55780639076c166146101c357600080fd5b8063078fa339146100fa5780631ff64acd146101345780634e71d92d14610149575b600080fd5b6101217f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b610147610142366004611291565b61029c565b005b610147610546565b6101787f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161012b565b610147610708565b60005473ffffffffffffffffffffffffffffffffffffffff16610178565b6101476101d1366004611268565b61071c565b6101476101e4366004611268565b6107f0565b6101216101f736600461124e565b60016020526000908152604090205481565b61012161021736600461124e565b60026020526000908152604090205481565b610147610237366004611268565b6108b7565b61014761024a36600461124e565b6109fd565b61014761025d36600461124e565b610aec565b6101217f000000000000000000000000000000000000000000000000000000000000000081565b61012161029736600461124e565b610ba3565b6102a4610dc0565b8051825114610360576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f54656d706c655465616d5061796d656e74733a2061646472657373657320616e60448201527f6420616d6f756e7473206d757374206265207468652073616d65206c656e677460648201527f6800000000000000000000000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b6000805b8351811015610540578173ffffffffffffffffffffffffffffffffffffffff168482815181106103bd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415610469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f54656d706c655465616d5061796d656e74733a20416464726573732063616e6e60448201527f6f742062652030783000000000000000000000000000000000000000000000006064820152608401610357565b8281815181106104a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600160008684815181106104e7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550808061053890611523565b915050610364565b50505050565b336000818152600160205260409020546105e1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f54656d706c655465616d5061796d656e74733a204d656d626572206e6f74206660448201527f6f756e64000000000000000000000000000000000000000000000000000000006064820152608401610357565b60006105ec33610ba3565b90506000811161067e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f54656d706c655465616d5061796d656e74733a204d656d62657220686173206e60448201527f6f2054454d504c4520746f20636c61696d0000000000000000000000000000006064820152608401610357565b336000908152600260205260408120805483929061069d908490611452565b909155506106ce90507f00000000000000000000000000000000000000000000000000000000000000003383610e41565b60405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a906020015b60405180910390a25050565b610710610dc0565b61071a6000610ed3565b565b610724610dc0565b73ffffffffffffffffffffffffffffffffffffffff82166107c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f54656d706c655465616d5061796d656e74733a20416464726573732063616e6e60448201527f6f742062652030783000000000000000000000000000000000000000000000006064820152608401610357565b73ffffffffffffffffffffffffffffffffffffffff909116600090815260016020526040902055565b6107f8610dc0565b60008111610888576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f54656d706c655465616d5061796d656e74733a20416d6f756e74206d7573742060448201527f62652067726561746572207468616e20300000000000000000000000000000006064820152608401610357565b6108b37f00000000000000000000000000000000000000000000000000000000000000008383610e41565b5050565b6108bf610dc0565b6000811161094f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f54656d706c655465616d5061796d656e74733a20416d6f756e74206d7573742060448201527f62652067726561746572207468616e20300000000000000000000000000000006064820152608401610357565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604081208054839290610984908490611452565b909155506109b590507f00000000000000000000000000000000000000000000000000000000000000008383610e41565b8173ffffffffffffffffffffffffffffffffffffffff167fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a826040516106fc91815260200190565b610a05610dc0565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600160205260409020548190610ab8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f54656d706c655465616d5061796d656e74733a204d656d626572206e6f74206660448201527f6f756e64000000000000000000000000000000000000000000000000000000006064820152608401610357565b5073ffffffffffffffffffffffffffffffffffffffff16600090815260026020908152604080832054600190925290912055565b610af4610dc0565b73ffffffffffffffffffffffffffffffffffffffff8116610b97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610357565b610ba081610ed3565b50565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600160205260408120548290610c56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f54656d706c655465616d5061796d656e74733a204d656d626572206e6f74206660448201527f6f756e64000000000000000000000000000000000000000000000000000000006064820152608401610357565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040812054610cc67f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006114e0565b610cf07f0000000000000000000000000000000000000000000000000000000000000000426114e0565b73ffffffffffffffffffffffffffffffffffffffff8716600090815260016020526040902054610d2091906114a3565b610d2a919061146a565b610d3491906114e0565b73ffffffffffffffffffffffffffffffffffffffff851660009081526001602090815260408083205460029092529091205491925090610d749083611452565b1115610db95773ffffffffffffffffffffffffffffffffffffffff8416600090815260026020908152604080832054600190925290912054610db691906114e0565b90505b9392505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461071a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610357565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610ece908490610f48565b505050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000610faa826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166110549092919063ffffffff16565b805190915015610ece5780806020019051810190610fc89190611352565b610ece576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610357565b6060610db684846000858573ffffffffffffffffffffffffffffffffffffffff85163b6110dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610357565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516111069190611372565b60006040518083038185875af1925050503d8060008114611143576040519150601f19603f3d011682016040523d82523d6000602084013e611148565b606091505b5091509150611158828286611163565b979650505050505050565b60608315611172575081610db9565b8251156111825782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610357919061138e565b803573ffffffffffffffffffffffffffffffffffffffff811681146111da57600080fd5b919050565b600082601f8301126111ef578081fd5b813560206112046111ff8361142e565b6113df565b80838252828201915082860187848660051b8901011115611223578586fd5b855b8581101561124157813584529284019290840190600101611225565b5090979650505050505050565b60006020828403121561125f578081fd5b610db9826111b6565b6000806040838503121561127a578081fd5b611283836111b6565b946020939093013593505050565b600080604083850312156112a3578182fd5b823567ffffffffffffffff808211156112ba578384fd5b818501915085601f8301126112cd578384fd5b813560206112dd6111ff8361142e565b8083825282820191508286018a848660051b89010111156112fc578889fd5b8896505b8487101561132557611311816111b6565b835260019690960195918301918301611300565b509650508601359250508082111561133b578283fd5b50611348858286016111df565b9150509250929050565b600060208284031215611363578081fd5b81518015158114610db9578182fd5b600082516113848184602087016114f7565b9190910192915050565b60208152600082518060208401526113ad8160408501602087016114f7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156114265761142661158b565b604052919050565b600067ffffffffffffffff8211156114485761144861158b565b5060051b60200190565b600082198211156114655761146561155c565b500190565b60008261149e577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156114db576114db61155c565b500290565b6000828210156114f2576114f261155c565b500390565b60005b838110156115125781810151838201526020016114fa565b838111156105405750506000910152565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156115555761155561155c565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220ecde5de453238c61325d1dcdf0c1cedf3cf9d2237e8cb2b8121009300ed6c69f64736f6c63430008040033";

type TempleTeamPaymentsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TempleTeamPaymentsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TempleTeamPayments__factory extends ContractFactory {
  constructor(...args: TempleTeamPaymentsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _TEMPLE: PromiseOrValue<string>,
    paymentPeriodInSeconds: PromiseOrValue<BigNumberish>,
    startTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TempleTeamPayments> {
    return super.deploy(
      _TEMPLE,
      paymentPeriodInSeconds,
      startTimestamp,
      overrides || {}
    ) as Promise<TempleTeamPayments>;
  }
  override getDeployTransaction(
    _TEMPLE: PromiseOrValue<string>,
    paymentPeriodInSeconds: PromiseOrValue<BigNumberish>,
    startTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _TEMPLE,
      paymentPeriodInSeconds,
      startTimestamp,
      overrides || {}
    );
  }
  override attach(address: string): TempleTeamPayments {
    return super.attach(address) as TempleTeamPayments;
  }
  override connect(signer: Signer): TempleTeamPayments__factory {
    return super.connect(signer) as TempleTeamPayments__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TempleTeamPaymentsInterface {
    return new utils.Interface(_abi) as TempleTeamPaymentsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TempleTeamPayments {
    return new Contract(address, _abi, signerOrProvider) as TempleTeamPayments;
  }
}