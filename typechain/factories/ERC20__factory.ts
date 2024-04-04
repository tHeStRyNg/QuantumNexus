/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d2138038062000d2183398101604081905262000034916200017f565b81516200004990600390602085019062000068565b5080516200005f90600490602084019062000068565b505050620002f8565b82805462000076906200026c565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b6000620001256200011f846200020c565b620001ed565b9050828152602081018484840111156200013e57600080fd5b6200014b84828562000239565b509392505050565b600082601f8301126200016557600080fd5b8151620001778482602086016200010e565b949350505050565b600080604083850312156200019357600080fd5b82516001600160401b03811115620001aa57600080fd5b620001b88582860162000153565b92505060208301516001600160401b03811115620001d557600080fd5b620001e38582860162000153565b9150509250929050565b6000620001f960405190565b90506200020782826200029d565b919050565b60006001600160401b03821115620002285762000228620002e2565b601f19601f83011660200192915050565b60005b83811015620002565781810151838201526020016200023c565b8381111562000266576000848401525b50505050565b6002810460018216806200028157607f821691505b60208210811415620002975762000297620002cc565b50919050565b601f19601f83011681018181106001600160401b0382111715620002c557620002c5620002e2565b6040525050565b634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b610a1980620003086000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461011f57806370a082311461013257806395d89b411461015b578063a457c2d714610163578063a9059cbb14610176578063dd62ed3e1461018957600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ec57806323b872dd146100fd578063313ce56714610110575b600080fd5b6100b66101c2565b6040516100c39190610874565b60405180910390f35b6100df6100da36600461061c565b610254565b6040516100c39190610866565b6002545b6040516100c391906108fc565b6100df61010b3660046105cf565b61026b565b60126040516100c3919061090a565b6100df61012d36600461061c565b6102dd565b6100f061014036600461056f565b6001600160a01b031660009081526020819052604090205490565b6100b6610319565b6100df61017136600461061c565b610328565b6100df61018436600461061c565b610383565b6100f0610197366004610595565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101d19061096d565b80601f01602080910402602001604051908101604052809291908181526020018280546101fd9061096d565b801561024a5780601f1061021f5761010080835404028352916020019161024a565b820191906000526020600020905b81548152906001019060200180831161022d57829003601f168201915b5050505050905090565b6000610261338484610390565b5060015b92915050565b6000610278848484610444565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156102c55760405162461bcd60e51b81526004016102bc906108bc565b60405180910390fd5b6102d28533858403610390565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610261918590610314908690610918565b610390565b6060600480546101d19061096d565b3360009081526001602090815260408083206001600160a01b03861684529091528120548281101561036c5760405162461bcd60e51b81526004016102bc906108ec565b6103793385858403610390565b5060019392505050565b6000610261338484610444565b6001600160a01b0383166103b65760405162461bcd60e51b81526004016102bc906108dc565b6001600160a01b0382166103dc5760405162461bcd60e51b81526004016102bc9061089c565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104379085906108fc565b60405180910390a3505050565b6001600160a01b03831661046a5760405162461bcd60e51b81526004016102bc906108cc565b6001600160a01b0382166104905760405162461bcd60e51b81526004016102bc9061088c565b6001600160a01b038316600090815260208190526040902054818110156104c95760405162461bcd60e51b81526004016102bc906108ac565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610500908490610918565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161054a91906108fc565b60405180910390a35b50505050565b8035610265816109c6565b8035610265816109dd565b60006020828403121561058157600080fd5b600061058d8484610559565b949350505050565b600080604083850312156105a857600080fd5b60006105b48585610559565b92505060206105c585828601610559565b9150509250929050565b6000806000606084860312156105e457600080fd5b60006105f08686610559565b935050602061060186828701610559565b925050604061061286828701610564565b9150509250925092565b6000806040838503121561062f57600080fd5b600061063b8585610559565b92505060206105c585828601610564565b8015155b82525050565b6000610660825190565b808452602084019350610677818560208601610941565b601f01601f19169290920192915050565b602381526000602082017f45524332303a207472616e7366657220746f20746865207a65726f206164647281526265737360e81b602082015291505b5060400190565b602281526000602082017f45524332303a20617070726f766520746f20746865207a65726f206164647265815261737360f01b602082015291506106c4565b602681526000602082017f45524332303a207472616e7366657220616d6f756e7420657863656564732062815265616c616e636560d01b602082015291506106c4565b602881526000602082017f45524332303a207472616e7366657220616d6f756e74206578636565647320618152676c6c6f77616e636560c01b602082015291506106c4565b602581526000602082017f45524332303a207472616e736665722066726f6d20746865207a65726f206164815264647265737360d81b602082015291506106c4565b602481526000602082017f45524332303a20617070726f76652066726f6d20746865207a65726f206164648152637265737360e01b602082015291506106c4565b602581526000602082017f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77815264207a65726f60d81b602082015291506106c4565b80610650565b60ff8116610650565b60208101610265828461064c565b602080825281016108858184610656565b9392505050565b6020808252810161026581610688565b60208082528101610265816106cb565b602080825281016102658161070a565b602080825281016102658161074d565b6020808252810161026581610792565b60208082528101610265816107d4565b6020808252810161026581610815565b602081016102658284610857565b60208101610265828461085d565b6000821982111561092b5761092b61099a565b500190565b60006001600160a01b038216610265565b60005b8381101561095c578181015183820152602001610944565b838111156105535750506000910152565b60028104600182168061098157607f821691505b60208210811415610994576109946109b0565b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602260045260246000fd5b6109cf81610930565b81146109da57600080fd5b50565b806109cf56fea264697066735822122062e3f5524554edaf22d4e08ec226eba085a10685d473208fd64262d1d6582b9f64736f6c63430008040033";

export class ERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}