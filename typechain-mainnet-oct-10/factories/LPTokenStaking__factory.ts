/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LPTokenStaking,
  LPTokenStakingInterface,
} from "../LPTokenStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_LP_TOKEN",
        type: "address",
      },
      {
        internalType: "address",
        name: "_TEMPLE",
        type: "address",
      },
      {
        internalType: "address",
        name: "_TEMPLE_STAKING",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardPerBlock",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_blocksRewarded",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountRewarded",
        type: "uint256",
      },
    ],
    name: "PoolUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_withdrawnAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_rewardsClaimed",
        type: "uint256",
      },
    ],
    name: "RewardsClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_rewardsClaimed",
        type: "uint256",
      },
    ],
    name: "RewardsRestaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalStaked",
        type: "uint256",
      },
    ],
    name: "StakeCompleted",
    type: "event",
  },
  {
    inputs: [],
    name: "LP_TOKEN",
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
    inputs: [],
    name: "TEMPLE_STAKING",
    outputs: [
      {
        internalType: "contract TempleStaking",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accRewardsPerShare",
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
        name: "_staker",
        type: "address",
      },
    ],
    name: "getUserBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "_amountStaked",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastRewardBlock",
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
        name: "_staker",
        type: "address",
      },
    ],
    name: "pendingRewards",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "restakeTempleRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerBlock",
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
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256",
      },
    ],
    name: "setRewardPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
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
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updatePool",
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
    name: "userDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "Deposited",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "RewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620020993803806200209983398181016040528101906200003791906200022c565b620000576200004b6200013260201b60201c565b6200013a60201b60201c565b83600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504360078190555080600581905550505050506200030a565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200020f81620002d6565b92915050565b6000815190506200022681620002f0565b92915050565b600080600080608085870312156200024357600080fd5b60006200025387828801620001fe565b94505060206200026687828801620001fe565b93505060406200027987828801620001fe565b92505060606200028c8782880162000215565b91505092959194509250565b6000620002a582620002ac565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b620002e18162000298565b8114620002ed57600080fd5b50565b620002fb81620002cc565b81146200030757600080fd5b50565b611d7f806200031a6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638ae39cac116100a2578063bb872b4a11610071578063bb872b4a1461029a578063bfd9041b146102b6578063c116510c146102d4578063e3161ddd146102f2578063f2fde38b146102fc57610116565b80638ae39cac146102245780638da5cb5b14610242578063a694fc3a14610260578063a9f8d1811461027c57610116565b806350e23d00116100e957806350e23d00146101b6578063715018a6146101d45780637cbaccd5146101de578063817b1cd2146101fc578063873b919e1461021a57610116565b80632def66201461011b57806331d7a26214610125578063477348921461015557806348dec2a714610185575b600080fd5b610123610318565b005b61013f600480360381019061013a91906113fb565b610659565b60405161014c919061188d565b60405180910390f35b61016f600480360381019061016a91906113fb565b61074d565b60405161017c919061188d565b60405180910390f35b61019f600480360381019061019a91906113fb565b610799565b6040516101ad9291906118a8565b60405180910390f35b6101be6107bd565b6040516101cb9190611755565b60405180910390f35b6101dc6107e3565b005b6101e661086b565b6040516101f3919061188d565b60405180910390f35b610204610871565b604051610211919061188d565b60405180910390f35b610222610877565b005b61022c6109fa565b604051610239919061188d565b60405180910390f35b61024a610a00565b604051610257919061167a565b60405180910390f35b61027a60048036038101906102759190611476565b610a29565b005b610284610b8f565b604051610291919061188d565b60405180910390f35b6102b460048036038101906102af9190611476565b610b95565b005b6102be610c23565b6040516102cb9190611755565b60405180910390f35b6102dc610c49565b6040516102e99190611770565b60405180910390f35b6102fa610c6f565b005b610316600480360381019061031191906113fb565b610d31565b005b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000154116103a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610399906117ad565b60405180910390fd5b6103aa610c6f565b60008160000154905060008260010154670de0b6b3a7640000600654846103d1919061198a565b6103db9190611959565b6103e591906119e4565b90506000836000018190555060008360010181905550816008600082825461040d91906119e4565b925050819055506104e0600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d3e06b5e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104a257600080fd5b505afa1580156104b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104da919061144d565b83610e29565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d3e06b5e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561054857600080fd5b505afa15801561055c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610580919061144d565b73ffffffffffffffffffffffffffffffffffffffff16633b4da69f33836040518363ffffffff1660e01b81526004016105ba9291906116f5565b600060405180830381600087803b1580156105d457600080fd5b505af11580156105e8573d6000803e3d6000fd5b50505050610619600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163384610f4a565b7fdacbdde355ba930696a362ea6738feb9f8bd52dfb3d81947558fd3217e23e32533838360405161064c9392919061171e565b60405180910390a1505050565b600080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060006006549050600754431180156106b85750600060085414155b15610712576000600754436106cd91906119e4565b90506000600554826106df919061198a565b9050600854670de0b6b3a7640000826106f8919061198a565b6107029190611959565b8361070d9190611903565b925050505b8160010154670de0b6b3a7640000828460000154610730919061198a565b61073a9190611959565b61074491906119e4565b92505050919050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b60016020528060005260406000206000915090508060000154908060010154905082565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6107eb610fd0565b73ffffffffffffffffffffffffffffffffffffffff16610809610a00565b73ffffffffffffffffffffffffffffffffffffffff161461085f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108569061182d565b60405180910390fd5b6108696000610fd8565b565b60065481565b60085481565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816000015411610901576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f8906117ad565b60405180910390fd5b610909610c6f565b60008160010154670de0b6b3a7640000600654846000015461092b919061198a565b6109359190611959565b61093f91906119e4565b9050670de0b6b3a7640000600654836000015461095c919061198a565b6109669190611959565b82600101819055506109bd600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683610e29565b7f18cc89000db1d98f828da5d95fdcf7904c5ea5502ca52f1a1efe59f2cf3d3e2f33826040516109ee9291906116f5565b60405180910390a15050565b60055481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008111610a6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a639061180d565b60405180910390fd5b610a74610c6f565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050818160000154610ac79190611903565b816000018190555081600854610add9190611903565b600881905550670de0b6b3a764000060065483610afa919061198a565b610b049190611959565b816001016000828254610b179190611903565b92505081905550610b4c600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1633308561109c565b7fcf5c56b135ea8f1d57357dad28d8a7f64f55756e226643908842181edd74d80133838360000154604051610b839392919061171e565b60405180910390a15050565b60075481565b610b9d610fd0565b73ffffffffffffffffffffffffffffffffffffffff16610bbb610a00565b73ffffffffffffffffffffffffffffffffffffffff1614610c11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c089061182d565b60405180910390fd5b610c19610c6f565b8060058190555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6007544311610c7d57610d2f565b60006008541415610c945743600781905550610d2f565b600060075443610ca491906119e4565b905043600781905550600060055482610cbd919061198a565b9050600854670de0b6b3a764000082610cd6919061198a565b610ce09190611959565b600654610ced9190611903565b6006819055507f7fa9647ec1cc14e3822b46d05a2b9d4e019bde8875c0088c46b6503d71bf17228282604051610d249291906118a8565b60405180910390a150505b565b610d39610fd0565b73ffffffffffffffffffffffffffffffffffffffff16610d57610a00565b73ffffffffffffffffffffffffffffffffffffffff1614610dad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da49061182d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e14906117cd565b60405180910390fd5b610e2681610fd8565b50565b6000818473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30866040518363ffffffff1660e01b8152600401610e67929190611695565b60206040518083038186803b158015610e7f57600080fd5b505afa158015610e93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb7919061149f565b610ec19190611903565b9050610f448463095ea7b360e01b8584604051602401610ee29291906116f5565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611125565b50505050565b610fcb8363a9059cbb60e01b8484604051602401610f699291906116f5565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611125565b505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61111f846323b872dd60e01b8585856040516024016110bd939291906116be565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611125565b50505050565b6000611187826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111ec9092919063ffffffff16565b90506000815111156111e757808060200190518101906111a79190611424565b6111e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111dd9061186d565b60405180910390fd5b5b505050565b60606111fb8484600085611204565b90509392505050565b606082471015611249576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611240906117ed565b60405180910390fd5b61125285611318565b611291576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112889061184d565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516112ba9190611663565b60006040518083038185875af1925050503d80600081146112f7576040519150601f19603f3d011682016040523d82523d6000602084013e6112fc565b606091505b509150915061130c82828661132b565b92505050949350505050565b600080823b905060008111915050919050565b6060831561133b5782905061138b565b60008351111561134e5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611382919061178b565b60405180910390fd5b9392505050565b6000813590506113a181611ced565b92915050565b6000815190506113b681611d04565b92915050565b6000815190506113cb81611d1b565b92915050565b6000813590506113e081611d32565b92915050565b6000815190506113f581611d32565b92915050565b60006020828403121561140d57600080fd5b600061141b84828501611392565b91505092915050565b60006020828403121561143657600080fd5b6000611444848285016113a7565b91505092915050565b60006020828403121561145f57600080fd5b600061146d848285016113bc565b91505092915050565b60006020828403121561148857600080fd5b6000611496848285016113d1565b91505092915050565b6000602082840312156114b157600080fd5b60006114bf848285016113e6565b91505092915050565b6114d181611a18565b82525050565b60006114e2826118d1565b6114ec81856118e7565b93506114fc818560208601611aba565b80840191505092915050565b61151181611a72565b82525050565b61152081611a96565b82525050565b6000611531826118dc565b61153b81856118f2565b935061154b818560208601611aba565b61155481611b4b565b840191505092915050565b600061156c6011836118f2565b915061157782611b5c565b602082019050919050565b600061158f6026836118f2565b915061159a82611b85565b604082019050919050565b60006115b26026836118f2565b91506115bd82611bd4565b604082019050919050565b60006115d56016836118f2565b91506115e082611c23565b602082019050919050565b60006115f86020836118f2565b915061160382611c4c565b602082019050919050565b600061161b601d836118f2565b915061162682611c75565b602082019050919050565b600061163e602a836118f2565b915061164982611c9e565b604082019050919050565b61165d81611a68565b82525050565b600061166f82846114d7565b915081905092915050565b600060208201905061168f60008301846114c8565b92915050565b60006040820190506116aa60008301856114c8565b6116b760208301846114c8565b9392505050565b60006060820190506116d360008301866114c8565b6116e060208301856114c8565b6116ed6040830184611654565b949350505050565b600060408201905061170a60008301856114c8565b6117176020830184611654565b9392505050565b600060608201905061173360008301866114c8565b6117406020830185611654565b61174d6040830184611654565b949350505050565b600060208201905061176a6000830184611508565b92915050565b60006020820190506117856000830184611517565b92915050565b600060208201905081810360008301526117a58184611526565b905092915050565b600060208201905081810360008301526117c68161155f565b9050919050565b600060208201905081810360008301526117e681611582565b9050919050565b60006020820190508181036000830152611806816115a5565b9050919050565b60006020820190508181036000830152611826816115c8565b9050919050565b60006020820190508181036000830152611846816115eb565b9050919050565b600060208201905081810360008301526118668161160e565b9050919050565b6000602082019050818103600083015261188681611631565b9050919050565b60006020820190506118a26000830184611654565b92915050565b60006040820190506118bd6000830185611654565b6118ca6020830184611654565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600061190e82611a68565b915061191983611a68565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561194e5761194d611aed565b5b828201905092915050565b600061196482611a68565b915061196f83611a68565b92508261197f5761197e611b1c565b5b828204905092915050565b600061199582611a68565b91506119a083611a68565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156119d9576119d8611aed565b5b828202905092915050565b60006119ef82611a68565b91506119fa83611a68565b925082821015611a0d57611a0c611aed565b5b828203905092915050565b6000611a2382611a48565b9050919050565b60008115159050919050565b6000611a4182611a18565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611a7d82611a84565b9050919050565b6000611a8f82611a48565b9050919050565b6000611aa182611aa8565b9050919050565b6000611ab382611a48565b9050919050565b60005b83811015611ad8578082015181840152602081019050611abd565b83811115611ae7576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f5573657220686173206e6f207374616b65000000000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f43616e206e6f74207374616b65203020746f6b656e7300000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b611cf681611a18565b8114611d0157600080fd5b50565b611d0d81611a2a565b8114611d1857600080fd5b50565b611d2481611a36565b8114611d2f57600080fd5b50565b611d3b81611a68565b8114611d4657600080fd5b5056fea2646970667358221220da26b37e39e13be582283a5396aff9027233f4a58b90f1771e7f7bae3722ba1f64736f6c63430008040033";

export class LPTokenStaking__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _LP_TOKEN: string,
    _TEMPLE: string,
    _TEMPLE_STAKING: string,
    _rewardPerBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LPTokenStaking> {
    return super.deploy(
      _LP_TOKEN,
      _TEMPLE,
      _TEMPLE_STAKING,
      _rewardPerBlock,
      overrides || {}
    ) as Promise<LPTokenStaking>;
  }
  getDeployTransaction(
    _LP_TOKEN: string,
    _TEMPLE: string,
    _TEMPLE_STAKING: string,
    _rewardPerBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _LP_TOKEN,
      _TEMPLE,
      _TEMPLE_STAKING,
      _rewardPerBlock,
      overrides || {}
    );
  }
  attach(address: string): LPTokenStaking {
    return super.attach(address) as LPTokenStaking;
  }
  connect(signer: Signer): LPTokenStaking__factory {
    return super.connect(signer) as LPTokenStaking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LPTokenStakingInterface {
    return new utils.Interface(_abi) as LPTokenStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LPTokenStaking {
    return new Contract(address, _abi, signerOrProvider) as LPTokenStaking;
  }
}