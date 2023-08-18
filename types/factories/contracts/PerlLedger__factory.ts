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
  PerlLedger,
  PerlLedgerInterface,
} from "../../contracts/PerlLedger";

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
        name: "_txId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_txRef",
        type: "string",
      },
      {
        internalType: "string",
        name: "_txType",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_credit",
        type: "uint256",
      },
    ],
    name: "createCreditOverall",
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
    name: "creditOveralls",
    outputs: [
      {
        internalType: "string",
        name: "txRef",
        type: "string",
      },
      {
        internalType: "string",
        name: "txType",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "credit",
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
        name: "_txId",
        type: "string",
      },
    ],
    name: "getCreditOverallCount",
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
        name: "_txId",
        type: "string",
      },
    ],
    name: "getCreditOveralls",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "txRef",
            type: "string",
          },
          {
            internalType: "string",
            name: "txType",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "credit",
            type: "uint256",
          },
        ],
        internalType: "struct PerlLedger.CreditOverall[]",
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
  "0x608060405234801561001057600080fd5b506115af806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100ef578063a628657b1461010d578063ba2051141461013d578063f2fde38b1461016d57610088565b80633cd685f01461008d5780633e8fdc9f146100a9578063715018a6146100db5780638129fc1c146100e5575b600080fd5b6100a760048036038101906100a29190610b2c565b610189565b005b6100c360048036038101906100be9190610be7565b610231565b6040516100d293929190610cd1565b60405180910390f35b6100e361039e565b005b6100ed6103b2565b005b6100f76104f0565b6040516101049190610d57565b60405180910390f35b61012760048036038101906101229190610d72565b61051a565b6040516101349190610f2d565b60405180910390f35b61015760048036038101906101529190610d72565b6106c5565b6040516101649190610f4f565b60405180910390f35b61018760048036038101906101829190610f96565b6106f0565b005b610191610773565b6065846040516101a19190610fff565b9081526020016040518091039020604051806060016040528085815260200184815260200183815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000190816102089190611222565b50602082015181600101908161021e9190611222565b5060408201518160020155505050505050565b606582805160208101820180518482526020830160208501208183528095505050505050818154811061026357600080fd5b90600052602060002090600302016000915091505080600001805461028790611045565b80601f01602080910402602001604051908101604052809291908181526020018280546102b390611045565b80156103005780601f106102d557610100808354040283529160200191610300565b820191906000526020600020905b8154815290600101906020018083116102e357829003601f168201915b50505050509080600101805461031590611045565b80601f016020809104026020016040519081016040528092919081815260200182805461034190611045565b801561038e5780601f106103635761010080835404028352916020019161038e565b820191906000526020600020905b81548152906001019060200180831161037157829003601f168201915b5050505050908060020154905083565b6103a6610773565b6103b060006107f1565b565b60008060019054906101000a900460ff161590508080156103e35750600160008054906101000a900460ff1660ff16105b8061041057506103f2306108b7565b15801561040f5750600160008054906101000a900460ff1660ff16145b5b61044f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044690611366565b60405180910390fd5b60016000806101000a81548160ff021916908360ff160217905550801561048c576001600060016101000a81548160ff0219169083151502179055505b6104946108da565b80156104ed5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516104e491906113ce565b60405180910390a15b50565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060658260405161052c9190610fff565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b828210156106ba578382906000526020600020906003020160405180606001604052908160008201805461058d90611045565b80601f01602080910402602001604051908101604052809291908181526020018280546105b990611045565b80156106065780601f106105db57610100808354040283529160200191610606565b820191906000526020600020905b8154815290600101906020018083116105e957829003601f168201915b5050505050815260200160018201805461061f90611045565b80601f016020809104026020016040519081016040528092919081815260200182805461064b90611045565b80156106985780601f1061066d57610100808354040283529160200191610698565b820191906000526020600020905b81548152906001019060200180831161067b57829003601f168201915b505050505081526020016002820154815250508152602001906001019061055a565b505050509050919050565b60006065826040516106d79190610fff565b9081526020016040518091039020805490509050919050565b6106f8610773565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610767576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075e9061145b565b60405180910390fd5b610770816107f1565b50565b61077b610933565b73ffffffffffffffffffffffffffffffffffffffff166107996104f0565b73ffffffffffffffffffffffffffffffffffffffff16146107ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e6906114c7565b60405180910390fd5b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16610929576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092090611559565b60405180910390fd5b61093161093b565b565b600033905090565b600060019054906101000a900460ff1661098a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098190611559565b60405180910390fd5b61099a610995610933565b6107f1565b565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a03826109ba565b810181811067ffffffffffffffff82111715610a2257610a216109cb565b5b80604052505050565b6000610a3561099c565b9050610a4182826109fa565b919050565b600067ffffffffffffffff821115610a6157610a606109cb565b5b610a6a826109ba565b9050602081019050919050565b82818337600083830152505050565b6000610a99610a9484610a46565b610a2b565b905082815260208101848484011115610ab557610ab46109b5565b5b610ac0848285610a77565b509392505050565b600082601f830112610add57610adc6109b0565b5b8135610aed848260208601610a86565b91505092915050565b6000819050919050565b610b0981610af6565b8114610b1457600080fd5b50565b600081359050610b2681610b00565b92915050565b60008060008060808587031215610b4657610b456109a6565b5b600085013567ffffffffffffffff811115610b6457610b636109ab565b5b610b7087828801610ac8565b945050602085013567ffffffffffffffff811115610b9157610b906109ab565b5b610b9d87828801610ac8565b935050604085013567ffffffffffffffff811115610bbe57610bbd6109ab565b5b610bca87828801610ac8565b9250506060610bdb87828801610b17565b91505092959194509250565b60008060408385031215610bfe57610bfd6109a6565b5b600083013567ffffffffffffffff811115610c1c57610c1b6109ab565b5b610c2885828601610ac8565b9250506020610c3985828601610b17565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c7d578082015181840152602081019050610c62565b60008484015250505050565b6000610c9482610c43565b610c9e8185610c4e565b9350610cae818560208601610c5f565b610cb7816109ba565b840191505092915050565b610ccb81610af6565b82525050565b60006060820190508181036000830152610ceb8186610c89565b90508181036020830152610cff8185610c89565b9050610d0e6040830184610cc2565b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d4182610d16565b9050919050565b610d5181610d36565b82525050565b6000602082019050610d6c6000830184610d48565b92915050565b600060208284031215610d8857610d876109a6565b5b600082013567ffffffffffffffff811115610da657610da56109ab565b5b610db284828501610ac8565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b6000610e0382610c43565b610e0d8185610de7565b9350610e1d818560208601610c5f565b610e26816109ba565b840191505092915050565b610e3a81610af6565b82525050565b60006060830160008301518482036000860152610e5d8282610df8565b91505060208301518482036020860152610e778282610df8565b9150506040830151610e8c6040860182610e31565b508091505092915050565b6000610ea38383610e40565b905092915050565b6000602082019050919050565b6000610ec382610dbb565b610ecd8185610dc6565b935083602082028501610edf85610dd7565b8060005b85811015610f1b5784840389528151610efc8582610e97565b9450610f0783610eab565b925060208a01995050600181019050610ee3565b50829750879550505050505092915050565b60006020820190508181036000830152610f478184610eb8565b905092915050565b6000602082019050610f646000830184610cc2565b92915050565b610f7381610d36565b8114610f7e57600080fd5b50565b600081359050610f9081610f6a565b92915050565b600060208284031215610fac57610fab6109a6565b5b6000610fba84828501610f81565b91505092915050565b600081905092915050565b6000610fd982610c43565b610fe38185610fc3565b9350610ff3818560208601610c5f565b80840191505092915050565b600061100b8284610fce565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061105d57607f821691505b6020821081036110705761106f611016565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026110d87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261109b565b6110e2868361109b565b95508019841693508086168417925050509392505050565b6000819050919050565b600061111f61111a61111584610af6565b6110fa565b610af6565b9050919050565b6000819050919050565b61113983611104565b61114d61114582611126565b8484546110a8565b825550505050565b600090565b611162611155565b61116d818484611130565b505050565b5b818110156111915761118660008261115a565b600181019050611173565b5050565b601f8211156111d6576111a781611076565b6111b08461108b565b810160208510156111bf578190505b6111d36111cb8561108b565b830182611172565b50505b505050565b600082821c905092915050565b60006111f9600019846008026111db565b1980831691505092915050565b600061121283836111e8565b9150826002028217905092915050565b61122b82610c43565b67ffffffffffffffff811115611244576112436109cb565b5b61124e8254611045565b611259828285611195565b600060209050601f83116001811461128c576000841561127a578287015190505b6112848582611206565b8655506112ec565b601f19841661129a86611076565b60005b828110156112c25784890151825560018201915060208501945060208101905061129d565b868310156112df57848901516112db601f8916826111e8565b8355505b6001600288020188555050505b505050505050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000611350602e83610c4e565b915061135b826112f4565b604082019050919050565b6000602082019050818103600083015261137f81611343565b9050919050565b6000819050919050565b600060ff82169050919050565b60006113b86113b36113ae84611386565b6110fa565b611390565b9050919050565b6113c88161139d565b82525050565b60006020820190506113e360008301846113bf565b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611445602683610c4e565b9150611450826113e9565b604082019050919050565b6000602082019050818103600083015261147481611438565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006114b1602083610c4e565b91506114bc8261147b565b602082019050919050565b600060208201905081810360008301526114e0816114a4565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000611543602b83610c4e565b915061154e826114e7565b604082019050919050565b6000602082019050818103600083015261157281611536565b905091905056fea26469706673582212208b3a32197264aa83f05c52084f1a99ef697d0bdd63ff78714382a69df368a8b064736f6c63430008130033";

type PerlLedgerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PerlLedgerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PerlLedger__factory extends ContractFactory {
  constructor(...args: PerlLedgerConstructorParams) {
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
      PerlLedger & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PerlLedger__factory {
    return super.connect(runner) as PerlLedger__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PerlLedgerInterface {
    return new Interface(_abi) as PerlLedgerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PerlLedger {
    return new Contract(address, _abi, runner) as unknown as PerlLedger;
  }
}
