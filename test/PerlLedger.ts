import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { PerlLedger } from "../types";

describe("PerlLedger", function () {

  it("Should create and retrieve a CreditOveralls", async function () {
    const PerlLedger = await ethers.getContractFactory("PerlLedger");
    const perlLedger = await upgrades.deployProxy(PerlLedger, [], { initializer: 'initialize' }) as unknown as PerlLedger;

    const txId = "tx1";
    const txRef = "ref1";
    const txType = "0";
    const credit = 100;

    await perlLedger.createCreditOverall(txId, txRef, txType, credit);

    const result = await perlLedger.getCreditOveralls(txId);
    const resultCount = await perlLedger.getCreditOverallCount(txId);

    expect(result).to.not.be.undefined;
    expect(resultCount).to.equal(1);
    expect(result[0].txRef).to.equal(txRef);
    expect(result[0].txType).to.equal(txType);
    expect(result[0].credit).to.equal(credit);
  });
});
