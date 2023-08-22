/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  PerlLedgerV1,
  PerlLedgerV1Interface,
} from "../../contracts/PerlLedgerV1";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
    inputs: [
      {
        internalType: "string",
        name: "_serialNo",
        type: "string",
      },
      {
        internalType: "string",
        name: "_requestRef",
        type: "string",
      },
      {
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_creditAmount",
        type: "uint256",
      },
    ],
    name: "addCarbonTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "carbonTransfers",
    outputs: [
      {
        internalType: "string",
        name: "requestRef",
        type: "string",
      },
      {
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "creditAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_serialNo",
        type: "string",
      },
    ],
    name: "getCarbonTransferCount",
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
        internalType: "string",
        name: "_serialNo",
        type: "string",
      },
    ],
    name: "getCarbonTransfers",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "requestRef",
            type: "string",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "creditAmount",
            type: "uint256",
          },
        ],
        internalType: "struct PerlLedgerV1.CarbonTransfer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
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
    inputs: [],
    name: "renounceOwnership",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506115af806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100ed578063b81c81f71461010b578063bf47a45d1461013d578063f2fde38b1461016d57610088565b80632a8ebb351461008d578063715018a6146100bd5780638129fc1c146100c757806381e95396146100d1575b600080fd5b6100a760048036038101906100a29190610af6565b610189565b6040516100b49190610b58565b60405180910390f35b6100c56101b4565b005b6100cf6101c8565b005b6100eb60048036038101906100e69190610b9f565b610306565b005b6100f56103ae565b6040516101029190610c9b565b60405180910390f35b61012560048036038101906101209190610cb6565b6103d8565b60405161013493929190610d91565b60405180910390f35b61015760048036038101906101529190610af6565b610545565b6040516101649190610f48565b60405180910390f35b61018760048036038101906101829190610f96565b6106f0565b005b600060658260405161019b9190610fff565b9081526020016040518091039020805490509050919050565b6101bc610773565b6101c660006107f1565b565b60008060019054906101000a900460ff161590508080156101f95750600160008054906101000a900460ff1660ff16105b806102265750610208306108b7565b1580156102255750600160008054906101000a900460ff1660ff16145b5b610265576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025c90611088565b60405180910390fd5b60016000806101000a81548160ff021916908360ff16021790555080156102a2576001600060016101000a81548160ff0219169083151502179055505b6102aa6108da565b80156103035760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516102fa91906110fa565b60405180910390a15b50565b61030e610773565b60658460405161031e9190610fff565b9081526020016040518091039020604051806060016040528085815260200184815260200183815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000190816103859190611317565b50602082015181600101908161039b9190611317565b5060408201518160020155505050505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606582805160208101820180518482526020830160208501208183528095505050505050818154811061040a57600080fd5b90600052602060002090600302016000915091505080600001805461042e90611144565b80601f016020809104026020016040519081016040528092919081815260200182805461045a90611144565b80156104a75780601f1061047c576101008083540402835291602001916104a7565b820191906000526020600020905b81548152906001019060200180831161048a57829003601f168201915b5050505050908060010180546104bc90611144565b80601f01602080910402602001604051908101604052809291908181526020018280546104e890611144565b80156105355780601f1061050a57610100808354040283529160200191610535565b820191906000526020600020905b81548152906001019060200180831161051857829003601f168201915b5050505050908060020154905083565b60606065826040516105579190610fff565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b828210156106e557838290600052602060002090600302016040518060600160405290816000820180546105b890611144565b80601f01602080910402602001604051908101604052809291908181526020018280546105e490611144565b80156106315780601f1061060657610100808354040283529160200191610631565b820191906000526020600020905b81548152906001019060200180831161061457829003601f168201915b5050505050815260200160018201805461064a90611144565b80601f016020809104026020016040519081016040528092919081815260200182805461067690611144565b80156106c35780601f10610698576101008083540402835291602001916106c3565b820191906000526020600020905b8154815290600101906020018083116106a657829003601f168201915b5050505050815260200160028201548152505081526020019060010190610585565b505050509050919050565b6106f8610773565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610767576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075e9061145b565b60405180910390fd5b610770816107f1565b50565b61077b610933565b73ffffffffffffffffffffffffffffffffffffffff166107996103ae565b73ffffffffffffffffffffffffffffffffffffffff16146107ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e6906114c7565b60405180910390fd5b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16610929576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092090611559565b60405180910390fd5b61093161093b565b565b600033905090565b600060019054906101000a900460ff1661098a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098190611559565b60405180910390fd5b61099a610995610933565b6107f1565b565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a03826109ba565b810181811067ffffffffffffffff82111715610a2257610a216109cb565b5b80604052505050565b6000610a3561099c565b9050610a4182826109fa565b919050565b600067ffffffffffffffff821115610a6157610a606109cb565b5b610a6a826109ba565b9050602081019050919050565b82818337600083830152505050565b6000610a99610a9484610a46565b610a2b565b905082815260208101848484011115610ab557610ab46109b5565b5b610ac0848285610a77565b509392505050565b600082601f830112610add57610adc6109b0565b5b8135610aed848260208601610a86565b91505092915050565b600060208284031215610b0c57610b0b6109a6565b5b600082013567ffffffffffffffff811115610b2a57610b296109ab565b5b610b3684828501610ac8565b91505092915050565b6000819050919050565b610b5281610b3f565b82525050565b6000602082019050610b6d6000830184610b49565b92915050565b610b7c81610b3f565b8114610b8757600080fd5b50565b600081359050610b9981610b73565b92915050565b60008060008060808587031215610bb957610bb86109a6565b5b600085013567ffffffffffffffff811115610bd757610bd66109ab565b5b610be387828801610ac8565b945050602085013567ffffffffffffffff811115610c0457610c036109ab565b5b610c1087828801610ac8565b935050604085013567ffffffffffffffff811115610c3157610c306109ab565b5b610c3d87828801610ac8565b9250506060610c4e87828801610b8a565b91505092959194509250565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c8582610c5a565b9050919050565b610c9581610c7a565b82525050565b6000602082019050610cb06000830184610c8c565b92915050565b60008060408385031215610ccd57610ccc6109a6565b5b600083013567ffffffffffffffff811115610ceb57610cea6109ab565b5b610cf785828601610ac8565b9250506020610d0885828601610b8a565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d4c578082015181840152602081019050610d31565b60008484015250505050565b6000610d6382610d12565b610d6d8185610d1d565b9350610d7d818560208601610d2e565b610d86816109ba565b840191505092915050565b60006060820190508181036000830152610dab8186610d58565b90508181036020830152610dbf8185610d58565b9050610dce6040830184610b49565b949350505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b6000610e1e82610d12565b610e288185610e02565b9350610e38818560208601610d2e565b610e41816109ba565b840191505092915050565b610e5581610b3f565b82525050565b60006060830160008301518482036000860152610e788282610e13565b91505060208301518482036020860152610e928282610e13565b9150506040830151610ea76040860182610e4c565b508091505092915050565b6000610ebe8383610e5b565b905092915050565b6000602082019050919050565b6000610ede82610dd6565b610ee88185610de1565b935083602082028501610efa85610df2565b8060005b85811015610f365784840389528151610f178582610eb2565b9450610f2283610ec6565b925060208a01995050600181019050610efe565b50829750879550505050505092915050565b60006020820190508181036000830152610f628184610ed3565b905092915050565b610f7381610c7a565b8114610f7e57600080fd5b50565b600081359050610f9081610f6a565b92915050565b600060208284031215610fac57610fab6109a6565b5b6000610fba84828501610f81565b91505092915050565b600081905092915050565b6000610fd982610d12565b610fe38185610fc3565b9350610ff3818560208601610d2e565b80840191505092915050565b600061100b8284610fce565b915081905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000611072602e83610d1d565b915061107d82611016565b604082019050919050565b600060208201905081810360008301526110a181611065565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b60006110e46110df6110da846110a8565b6110bf565b6110b2565b9050919050565b6110f4816110c9565b82525050565b600060208201905061110f60008301846110eb565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061115c57607f821691505b60208210810361116f5761116e611115565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026111d77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261119a565b6111e1868361119a565b95508019841693508086168417925050509392505050565b600061121461120f61120a84610b3f565b6110bf565b610b3f565b9050919050565b6000819050919050565b61122e836111f9565b61124261123a8261121b565b8484546111a7565b825550505050565b600090565b61125761124a565b611262818484611225565b505050565b5b818110156112865761127b60008261124f565b600181019050611268565b5050565b601f8211156112cb5761129c81611175565b6112a58461118a565b810160208510156112b4578190505b6112c86112c08561118a565b830182611267565b50505b505050565b600082821c905092915050565b60006112ee600019846008026112d0565b1980831691505092915050565b600061130783836112dd565b9150826002028217905092915050565b61132082610d12565b67ffffffffffffffff811115611339576113386109cb565b5b6113438254611144565b61134e82828561128a565b600060209050601f831160018114611381576000841561136f578287015190505b61137985826112fb565b8655506113e1565b601f19841661138f86611175565b60005b828110156113b757848901518255600182019150602085019450602081019050611392565b868310156113d457848901516113d0601f8916826112dd565b8355505b6001600288020188555050505b505050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611445602683610d1d565b9150611450826113e9565b604082019050919050565b6000602082019050818103600083015261147481611438565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006114b1602083610d1d565b91506114bc8261147b565b602082019050919050565b600060208201905081810360008301526114e0816114a4565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000611543602b83610d1d565b915061154e826114e7565b604082019050919050565b6000602082019050818103600083015261157281611536565b905091905056fea2646970667358221220bb05e8fa06c76d98ba68b760f46f16e6e49daef9a4c9554a85ee46cc7622475064736f6c63430008130033";

type PerlLedgerV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PerlLedgerV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PerlLedgerV1__factory extends ContractFactory {
  constructor(...args: PerlLedgerV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PerlLedgerV1 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PerlLedgerV1__factory {
    return super.connect(runner) as PerlLedgerV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PerlLedgerV1Interface {
    return new Interface(_abi) as PerlLedgerV1Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PerlLedgerV1 {
    return new Contract(address, _abi, runner) as unknown as PerlLedgerV1;
  }
}