const expect = require('chai').expect
const ethers = require('hardhat').ethers

describe("BallMain", function () {
    let startTime;
    let payToken;

    before(async () => {
        startTime =
			(
				await ethers.provider.getBlock(
					await ethers.provider.getBlockNumber()
				)
			).timestamp + 3600
		endTime = startTime + 3600

        payToken = await (await ethers.getContractFactory("BallMain")).deploy()
		await payToken.deployed()
    })

    // it('test_setMaxTransferForOne_by_user_then_fails', async ()=>{
    //     const [ , ,signer] = await ethers.getSigners()
    //     await expect(payToken.connect(signer).setMaxTransferForOne(20)).to.be.revertedWith('Ownable: caller is not the owner')
    // })
    // it('test_setMaxTransferForOne_by_Owner_then_success', async ()=>{
    //     await payToken.setMaxTransferForOne("100000000000000000000");
    //     await expect(await payToken.maxTransferAmountForOne()).to.equal('100000000000000000000');
    // })
    it('test_deposit_with_rightValue_then_success', async () => {
        const [ ,signer1,signer2] = await ethers.getSigners()
        await payToken.connect(signer1).mint({value: '1000000000000000000'});
        console.log(await payToken.connect(signer1).randNumber());
        console.log(await payToken.connect(signer1).tokenIdType(await payToken.connect(signer1).userTokenIds(signer1.address,0)));
        console.log(await payToken.connect(signer1).currentUri())
        await payToken.connect(signer2).mint({value: '1000000000000000000'});
        console.log(await payToken.connect(signer1).randNumber());
        console.log(await payToken.connect(signer1).tokenIdType(await payToken.connect(signer1).userTokenIds(signer2.address,0)));
        console.log(await payToken.connect(signer1).currentUri())
        // await payToken.connect(signer1).mint({value: '1000000000000000000'});
        // console.log(await payToken.connect(signer1).randomnumber());
        // await payToken.connect(signer2).pay({value: '1000000000000000000'});
        // await payToken.connect(signer3).pay({value: '1000000000000000000'});
        // await payToken.connect(signer1).pay({value: '1000000000000000000'});
        // await payToken.connect(signer4).pay({value: '1000000000000000000'});
        console.log(await signer1.getBalance());
        console.log(await signer2.getBalance());
        // console.log(await signer2.getBalance());
        // console.log(await signer3.getBalance());
        // console.log(await signer4.getBalance());
        // console.log(await payToken.connect(signer1).tokenId(signer1.address,0))
        // console.log(await payToken.connect(signer1).tokenIdType(payToken.connect(signer1).currentUri()));
        // console.log(await payToken.connect(signer1).tokenId(signer1.address,1))
        // console.log(await payToken.connect(signer2).tokenId(signer2.address,0))
        // console.log(await payToken.connect(signer1).tokenCount());
        // console.log(await payToken.connect(signer1).tokenId(signer1.address,0));
        // console.log(await payToken.connect(signer1).randomnumber());
        // console.log(await payToken.connect(signer1).getTokensType(signer4.address));
        // console.log(await payToken.connect(signer1).tokenId());
        // await payToken.connect(signer).ownerWithdraw();
        // console.log(await signer.getBalance());
        // await payToken.connect(signer2).depositForOne({value: '100000000000000000000'})
    })
    // it('test_withDrawForOne_then_success',async () => {
    //     const [ ,, signer] = await ethers.getSigners();
    //     console.log("Signer:" ,await signer.getBalance());
    //     await payToken.connect(signer).withDrawForOne('50000000000000000000');
    // })
    // it('test_getAllAmountOfOne_user_then_fail',async() => {
    //     const [ ,, signer] = await ethers.getSigners();
    //     await expect(payToken.connect(signer).getAllAmountForOne()).to.be.revertedWith('Ownable: caller is not the owner');
    // })
    // it('test_getAllAmountOfOne_owner_then_success',async() => {
    //     console.log(await payToken.getAllAmountForOne());
    // })

    // it('test_setMaxTransferForOther_by_user_then_fails', async ()=>{
    //     const [ , ,signer] = await ethers.getSigners()
    //     await expect(payToken.connect(signer).setMaxTransferForOther("0x4Aca0ad6357b918e3d06BB1a0BCC403619177523",20)).to.be.revertedWith('Ownable: caller is not the owner')
    // })
    // it('test_setMaxTransferForOther_by_owner_then_success', async ()=>{
    //     await payToken.setMaxTransferForOther("0x4Aca0ad6357b918e3d06BB1a0BCC403619177523","100000000000000000000");
    //     await expect(await payToken.maxTransferAmountForOther("0x4Aca0ad6357b918e3d06BB1a0BCC403619177523")).to.equal("100000000000000000000");
    // })
    // it('test_depositForOther_then_success',async() => {
    //     const [ ,, signer] = await ethers.getSigners();
    //     await payToken.connect(signer).depositForOther("0x4Aca0ad6357b918e3d06BB1a0BCC403619177523",'20000000000000000000');
    // })
})