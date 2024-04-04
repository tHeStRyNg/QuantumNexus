/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Router, RouterInterface } from "../Router";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "base",
        type: "address",
      },
      {
        internalType: "address",
        name: "quote",
        type: "address",
      },
    ],
    name: "getFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "routerIdx",
        type: "uint8",
      },
    ],
    name: "getRouterAddress",
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
        internalType: "address[]",
        name: "_routers",
        type: "address[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "base",
            type: "address",
          },
          {
            internalType: "address",
            name: "quote",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
        ],
        internalType: "struct Router.PoolInfo[]",
        name: "_pools",
        type: "tuple[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "address",
        name: "base",
        type: "address",
      },
      {
        internalType: "address",
        name: "quote",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "routers",
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
        name: "token1",
        type: "address",
      },
      {
        internalType: "address",
        name: "token2",
        type: "address",
      },
    ],
    name: "sortTokenPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
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
        name: "base",
        type: "address",
      },
      {
        internalType: "address",
        name: "quote",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
    ],
    name: "updateFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "routerIdx",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "updateRouterAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506110f6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638da5cb5b116100715780638da5cb5b1461011a578063ac4afa381461012b578063baa5fd521461014d578063cac73ed71461016e578063f2fde38b14610181578063fee998981461019457600080fd5b806323f3e5b6146100ae5780633d03273d146100c35780634e9c1118146100d6578063715018a6146100ff5780637dbd8ddd14610107575b600080fd5b6100c16100bc366004610d06565b6101b4565b005b6100c16100d1366004610dee565b6103e6565b6100e96100e4366004610db2565b61043d565b6040516100f69190610f12565b60405180910390f35b6100c1610467565b6100c1610115366004610d53565b61049d565b6033546001600160a01b03166100e9565b61013e610139366004610db2565b6106a7565b6040516100f693929190610f42565b61016061015b366004610ccc565b6106ef565b6040516100f6929190610f20565b6100e961017c366004610dd0565b610718565b6100c161018f366004610cae565b610781565b6101a76101a2366004610ccc565b6107dd565b6040516100f69190610faa565b6033546001600160a01b031633146101e75760405162461bcd60e51b81526004016101de90610f8a565b60405180910390fd5b6101f183836106ef565b909350915060005b60665460ff8216101561031257836001600160a01b031660668260ff168154811061023457634e487b7160e01b600052603260045260246000fd5b60009182526020909120600290910201546001600160a01b03161480156102a35750826001600160a01b031660668260ff168154811061028457634e487b7160e01b600052603260045260246000fd5b60009182526020909120600160029092020101546001600160a01b0316145b15610300578160668260ff16815481106102cd57634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160010160146101000a81548162ffffff021916908362ffffff16021790555050505050565b8061030a81611051565b9150506101f9565b50604080516060810182526001600160a01b0380861682528481166020830190815262ffffff80861694840194855260668054600181018255600091909152935160029094027f46501879b8ca8525e8c2fd519e2fbfcfa2ebea26501294aa02cbfcfb12e94354810180549585166001600160a01b03199096169590951790945590517f46501879b8ca8525e8c2fd519e2fbfcfa2ebea26501294aa02cbfcfb12e9435590930180549451909116600160a01b026001600160b81b031990941692909116919091179190911790555b505050565b8060658360ff168154811061040b57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505050565b6065818154811061044d57600080fd5b6000918252602090912001546001600160a01b0316905081565b6033546001600160a01b031633146104915760405162461bcd60e51b81526004016101de90610f8a565b61049b600061090c565b565b600054610100900460ff16806104b6575060005460ff16155b6104d25760405162461bcd60e51b81526004016101de90610f7a565b600054610100900460ff161580156104f4576000805461ffff19166101011790555b6104fc61095e565b825161050f906065906020860190610aa3565b5060005b82518110156106905761057c83828151811061053f57634e487b7160e01b600052603260045260246000fd5b60200260200101516000015184838151811061056b57634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516106ef565b84838151811061059c57634e487b7160e01b600052603260045260246000fd5b60200260200101516000018584815181106105c757634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b0393841691015291169052825160669084908390811061060a57634e487b7160e01b600052603260045260246000fd5b602090810291909101810151825460018181018555600094855293839020825160029092020180546001600160a01b039283166001600160a01b03199091161781559282015192909301805460409092015162ffffff16600160a01b026001600160b81b031990921692909316919091171790558061068881611036565b915050610513565b5080156103e1576000805461ff0019169055505050565b606681815481106106b757600080fd5b6000918252602090912060029091020180546001909101546001600160a01b03918216925090811690600160a01b900462ffffff1683565b600080826001600160a01b0316846001600160a01b03161015610710579192915b509192909150565b606554600090829060ff8216106107415760405162461bcd60e51b81526004016101de90610f9a565b60658360ff168154811061076557634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03169392505050565b6033546001600160a01b031633146107ab5760405162461bcd60e51b81526004016101de90610f8a565b6001600160a01b0381166107d15760405162461bcd60e51b81526004016101de90610f6a565b6107da8161090c565b50565b60006107e983836106ef565b909350915060005b60665460ff821610156108ff57836001600160a01b031660668260ff168154811061082c57634e487b7160e01b600052603260045260246000fd5b60009182526020909120600290910201546001600160a01b031614801561089b5750826001600160a01b031660668260ff168154811061087c57634e487b7160e01b600052603260045260246000fd5b60009182526020909120600160029092020101546001600160a01b0316145b156108ed5760668160ff16815481106108c457634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160010160149054906101000a900462ffffff16915050610906565b806108f781611051565b9150506107f1565b50610bb890505b92915050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1680610977575060005460ff16155b6109935760405162461bcd60e51b81526004016101de90610f7a565b600054610100900460ff161580156109b5576000805461ffff19166101011790555b6109bd6109d9565b6109c5610a43565b80156107da576000805461ff001916905550565b600054610100900460ff16806109f2575060005460ff16155b610a0e5760405162461bcd60e51b81526004016101de90610f7a565b600054610100900460ff161580156109c5576000805461ffff191661010117905580156107da576000805461ff001916905550565b600054610100900460ff1680610a5c575060005460ff16155b610a785760405162461bcd60e51b81526004016101de90610f7a565b600054610100900460ff16158015610a9a576000805461ffff19166101011790555b6109c53361090c565b828054828255906000526020600020908101928215610af8579160200282015b82811115610af857825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190610ac3565b50610b04929150610b08565b5090565b5b80821115610b045760008155600101610b09565b6000610b30610b2b84610fd4565b610fb8565b90508083825260208201905082856020860282011115610b4f57600080fd5b60005b85811015610b7b5781610b658882610bdd565b8452506020928301929190910190600101610b52565b5050509392505050565b6000610b93610b2b84610fd4565b83815290506020810182606085028101861015610baf57600080fd5b60005b85811015610b7b5781610bc58882610c32565b84525060209092019160609190910190600101610bb2565b803561090681611092565b600082601f830112610bf957600080fd5b8135610c09848260208601610b1d565b949350505050565b600082601f830112610c2257600080fd5b8135610c09848260208601610b85565b600060608284031215610c4457600080fd5b610c4e6060610fb8565b90506000610c5c8484610bdd565b8252506020610c6d84848301610bdd565b6020830152506040610c8184828501610c8d565b60408301525092915050565b8035610906816110a6565b8035610906816110b1565b8035610906816110b7565b600060208284031215610cc057600080fd5b6000610c098484610bdd565b60008060408385031215610cdf57600080fd5b6000610ceb8585610bdd565b9250506020610cfc85828601610bdd565b9150509250929050565b600080600060608486031215610d1b57600080fd5b6000610d278686610bdd565b9350506020610d3886828701610bdd565b9250506040610d4986828701610c8d565b9150509250925092565b60008060408385031215610d6657600080fd5b823567ffffffffffffffff811115610d7d57600080fd5b610d8985828601610be8565b925050602083013567ffffffffffffffff811115610da657600080fd5b610cfc85828601610c11565b600060208284031215610dc457600080fd5b6000610c098484610c98565b600060208284031215610de257600080fd5b6000610c098484610ca3565b60008060408385031215610e0157600080fd5b6000610ceb8585610ca3565b610e1681610ff8565b82525050565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b602082015291505b5060400190565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150610e5b565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b600e81526000602082016d15dc9bdb99c81c1c9bdd1bd8dbdb60921b81529150610edb565b62ffffff8116610e16565b602081016109068284610e0d565b60408101610f2e8285610e0d565b610f3b6020830184610e0d565b9392505050565b60608101610f508286610e0d565b610f5d6020830185610e0d565b610c096040830184610f07565b6020808252810161090681610e1c565b6020808252810161090681610e62565b6020808252810161090681610ead565b6020808252810161090681610ee2565b602081016109068284610f07565b6000610fc360405190565b9050610fcf8282611009565b919050565b600067ffffffffffffffff821115610fee57610fee61107c565b5060209081020190565b60006001600160a01b038216610906565b601f19601f830116810181811067ffffffffffffffff8211171561102f5761102f61107c565b6040525050565b600060001982141561104a5761104a611066565b5060010190565b600060ff8216915060ff82141561104a5761104a5b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61109b81610ff8565b81146107da57600080fd5b62ffffff811661109b565b8061109b565b60ff811661109b56fea2646970667358221220b40e7a64e11601cb0adb5e9c6ea00ef30da536fc29bad91457b45c4d9679287b64736f6c63430008040033";

export class Router__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Router> {
    return super.deploy(overrides || {}) as Promise<Router>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Router {
    return super.attach(address) as Router;
  }
  connect(signer: Signer): Router__factory {
    return super.connect(signer) as Router__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterInterface {
    return new utils.Interface(_abi) as RouterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Router {
    return new Contract(address, _abi, signerOrProvider) as Router;
  }
}