import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { PerlLedger } from "../types";

describe("PerlLedger", function () {

  it("Should create and retrieve a Carbon Transfer", async function () {
    const PerlLedger = await ethers.getContractFactory("PerlLedger");
    const perlLedger = await upgrades.deployProxy(PerlLedger, [], { initializer: 'initialize' }) as unknown as PerlLedger;

    const serialNo = "SG-ITMO-1-002-2022-0-101-1100";
    const requestRef = "1";
    const status = "Approved";
    const creditAmount = 100;

    await perlLedger.addCarbonTransfer(serialNo, requestRef, status, creditAmount);

    const result = await perlLedger.getCarbonTransfers(serialNo);
    const resultCount = await perlLedger.getCarbonTransferCount(serialNo);

    expect(result).to.not.be.undefined;
    expect(resultCount).to.equal(1);
    expect(result[0].requestRef).to.equal(requestRef);
    expect(result[0].status).to.equal(status);
    expect(result[0].creditAmount).to.equal(creditAmount);
  });
});
