import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { PerlLedger } from "../types";

describe("PerlLedger", function () {

  it("Should create and retrieve a CreditOverall object", async function () {
    const PerlLedger = await ethers.getContractFactory("PerlLedger");
    const perlLedger = await upgrades.deployProxy(PerlLedger, [], { initializer: 'initialize' }) as unknown as PerlLedger;

    const txRef = "ref1";
    const txId = "tx1";
    const txType = "0";
    const credit = 100;

    await perlLedger.createCreditOverall(txId, txRef, txType, credit);

    const result = await perlLedger.getCreditOverall(txRef);

    expect(result).to.not.be.undefined;
    expect(result.txId).to.equal(txId);
    expect(result.txType).to.equal(txType);
    expect(result.credit).to.equal(credit);
  });
});
