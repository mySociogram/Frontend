import { createContext } from "react";
import { ethers } from 'ethers';
import {
    registrationContractAddress, 
    registrationABI, 
    devTokenContractAddress, 
    DevtokenAbi
} from '../library/config'

export const ContractContext = createContext()

let eth;
if (typeof window !== 'undefined') {
  eth = window.ethereum;
}

// eslint-disable-next-line react/prop-types
const ContractContextProvider = ({ children }) =>{
    const getRegistrationContract = async () => {
        const provider = new ethers.providers.Web3Provider(eth);
        const signer = provider.getSigner();
        const registrationContract = new ethers.Contract(
          registrationContractAddress,
          registrationABI,
          signer
        );
      
        return registrationContract;
    };

    const getDevTokenContract = async () => {
        const provider = new ethers.providers.Web3Provider(eth);
        const signer = provider.getSigner();
        const registrationContract = new ethers.Contract(
            devTokenContractAddress,
            DevtokenAbi,
            signer
        );
      
        return registrationContract;
    };

    const registerUser = async (name) => {
        const registrationContract = await getRegistrationContract();

        const registrationContractHash = await registrationContract.registerUser(
            name,
            {
                gasLimit: '0x7EF40'
            }
        );

        await registrationContractHash.wait();
        console.log(registrationContractHash);

        return registrationContractHash;

    }

    const shareToken = async (destination_addr, amount) => {
        const devTokenContract = await getDevTokenContract();

        const tokenAmount = ethers.utils.parseEther(amount.toString());

        const devTokenContractHash = await devTokenContract.tokenTransfer(
            destination_addr,
            tokenAmount,
            {
                gasLimit: '0x7EF40'
            }
        );

        await devTokenContractHash.wait();
        console.log(devTokenContractHash);

        return devTokenContractHash;

    }

    const getDevToken = async () => {
        const devTokenContract = await getDevTokenContract();

        const devTokenContractName = await devTokenContract.name(
            {
                gasLimit: '0x7EF40'
            }
        );

        const devTokenContractSym = await devTokenContract.symbol(
            {
                gasLimit: '0x7EF40'
            }
        );

        // await devTokenContractName.wait();
        console.log("Name", devTokenContractName);
        console.log("Symbol", devTokenContractSym);

        return [devTokenContractName, devTokenContractSym];

    }

     

    return (
        <ContractContext.Provider
          value={{
            registerUser,
            shareToken,
            getDevToken
          }}
        >
          {children}
        </ContractContext.Provider>
      );
}

export default ContractContextProvider;