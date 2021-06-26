import { run, ethers } from "hardhat";

import { networkToController, sleep } from './utils'

async function main() {
  await run("compile");
  
  const controller = networkToController(process.env.HARDHAT_NETWORK as string);
  console.log(`🍩 Using Controller address ${controller}`)
  
  const AutoSettler = await ethers.getContractFactory("AutoSettler");
  const settle = await AutoSettler.deploy(controller)
  await settle.deployed();

  console.log("🥙 AutoSettler deployed at:", settle.address);
  
  // wait 20 secs to make sure etherscan confirm it
  await sleep(20000)

  // verify contracts at the end, so we make sure etherscan is aware of their existence
  await run("verify:verify", {
    address: settle.address, 
    network: process.env.HARDHAT_NETWORK,
    constructorArguments: [controller]
  })  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
