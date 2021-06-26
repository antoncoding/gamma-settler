export const networkToController = (network: string) => {
  console.log(network)
  if (network === 'mainnet') return '0x4ccc2339F87F6c59c6893E1A678c2266cA58dC72'
  if (network === 'ropsten') return '0x7e9beaccdccee88558aaa2dc121e52ec6226864e'
  if (network === 'kovan') return '0xdee7d0f8ccc0f7ac7e45af454e5e7ec1552e8e4e'
  else throw `Can\'t find controller address for ${network}`
}

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}