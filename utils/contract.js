import { ethers } from 'ethers'
import CustomDexABI from '../utils/CustomDex.json'
import CustomTokenABI from '../utils/CustomToken.json'

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const { ethereum } = window
  if (ethereum) {
    const signer = provider.getSigner()
    
    const contractReader = new ethers.Contract(address, CustomTokenABI.abi, signer)

    return contractReader
  }
}

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const { ethereum } = window

  if (ethereum) {
    const signer = provider.getSigner()

    const contractReader = new ethers.Contract(
      '0xD0EE81938a141b91a1a0011983337f89D835AC0e',
      CustomDexABI.abi,
      signer,
    )

    return contractReader
  }
}
