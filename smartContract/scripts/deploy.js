async function main() {
  const MarketPlace = await ethers.getContractFactory("Marketplace");

   // Start deployment, returning a promise that resolves to a contract object
   const marketPlace = await MarketPlace.deploy();
   console.log("Contract deployed to address:", marketPlace.address);//0x5dF1e91762CfbD789d3EeaE8cD6bc7EE5B577805
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});