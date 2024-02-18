import { ethers } from "ethers";
import React, { createContext, useEffect, useState } from "react";
import {
  cwmAbi,
  cwmContractAddress,
  faucetsAbi,
  faucetsContractAddress,
  tokenAddress,
  tokenABI,
  stakeContractAddress,
  stakeContractABI
} from "../utils/constants";

export const AppContext = createContext();

const { ethereum } = typeof window !== "undefined" ? window : {};
const POSSIBLE_ERRORS = [
  "ERC20: insufficient allowance",
  "Your next request time is not reached yet",
  "ERC20: transfer amount exceeds balance",
  "requestTokens(): Failed to Transfer",
  "user rejected transaction"
];

const createContract = async (address, contractName) => {
  console.log(address);
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner(address);
  let contract;
  if (contractName == "stake")
    contract = new ethers.Contract(stakeContractAddress, stakeContractABI, signer);
  else
    contract = new ethers.Contract(tokenAddress, tokenABI, signer);
  console.log(contract);
  return contract;
};

const AppProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [message, setMessage] = useState("");
  const [balance, setBalance] = useState(0);
  const [tokenDetails, setTokenDetails] = useState();
  const [nextBuyTime, setNextBuyTime] = useState(0);
  const [cwmContract, setCwmContract] = useState();
  const [tokenContract, setTokenContract] = useState();
  const [stakeContract, setStakeContract] = useState();
  const [faucetContract, setfaucetContract] = useState();
  const [approveLoading, setApproveLoading] = useState(false);
  const [stakeLoading, setStakeLoading] = useState(false);

  const checkErrors = (err) => {
    const error = POSSIBLE_ERRORS.find((e) => err.includes(e));
    console.log(error);
    if (error) {
      setMessage({
        title: "error",
        description: error,
      });
    }
  };

  const checkEthereumExists = () => {
    if (!ethereum) {
      return false;
    }
    return true;
  };
  const getConnectedAccounts = async () => {
    try {
      const accounts = await ethereum.request(
        {
          method: "eth_accounts",
        },
        []
      );
      setAccount(accounts[0]);
    } catch (err) {
      setMessage({ title: "error", description: err.message.split("(")[0] });
    }
  };
  const connectWallet = async () => {
    if (checkEthereumExists()) {
      try {
        const accounts = await ethereum.request(
          {
            method: "eth_requestAccounts",
          },
          []
        );
        console.log(accounts);
        setAccount(accounts[0]);
      } catch (err) {
        setMessage({ title: "error", description: err.message.split("(")[0] });
      }
    }
  };

  const callContract = async (cb) => {
    if (checkEthereumExists() && account) {
      try {
        await cb();
      } catch (err) {
        console.log(err);
        await setApproveLoading(false)
        await setStakeLoading(false)
        checkErrors(err.message);
      }
    }
  };

  const getBalance = () => {
    callContract(async () => {
      console.log(account, tokenContract);
      let bal = await tokenContract.balanceOf(account);
      let allowance = await tokenContract.allowance(account,stakeContractAddress);
      let symbol = await tokenContract.symbol();
      console.log(balance);
      console.log(allowance);
      setBalance(bal);
      setTokenDetails({
        symbol: symbol,
        balance: bal,
        allowance: allowance
      })
    });
  };

  const getStakingData = () => {
    callContract(async () => {
      console.log(account, stakeContract);
      let allStakeData = [];
      for(var i = 0; i < 100; i++){
        let data = await stakeContract.stakedAmounts(account,i);  
        console.log(data)
        if(data)
          allStakeData.push(data)
      }
      
      console.log(allStakeData);
    });
  };

  const stake = async (amount) => {
    await setStakeLoading(true)
    callContract(async () => {
      console.log(account, tokenContract, amount);
      let tx = await stakeContract.stake(
        ethers.utils.parseEther(amount)
      );
      await tx.wait();
      setMessage({ title: "success", description: "Tokens Staked Successfully" });
      setRefresh((prev) => prev + 1);
    });
  };
  const approve = async (amount) => {
    await setApproveLoading(true)
    await callContract(async () => {
      //0xfb..26 approved to take money on my behalf
      let tx = await tokenContract.approve(
        stakeContractAddress,
        ethers.utils.parseEther(amount)
      );
      console.log(tx)
      await tx.wait();
      setMessage({
        title: "success",
        description: "Approved tokens successfully",
      });
      await getBalance();
      await setApproveLoading(false)
    });
  };

  const requestTokens = async () => {
    callContract(async () => {
      let tx = await faucetContract.requestTokens();
      await tx.wait();

      setMessage({
        title: "success",
        description: "Tokens Received successfully",
      });
      setRefresh((prev) => prev + 1);
    });
  };

  const getNextBuyTime = async () => {
    callContract(async () => {
      let nextBuyTime = await faucetContract.getNextBuyTime();
      setNextBuyTime(nextBuyTime.toNumber() * 1000);
    });
  };

  const loadContract = async () => {
    // let cc = await createContract(account, "coin");
    // let fc = await createContract(account);

    // setCwmContract(cc);
    // setfaucetContract(fc);
    let tokenContract = await createContract(account);
    setTokenContract(tokenContract);
    let stakeContract = await createContract(account,"stake");
    setStakeContract(stakeContract);
  };

  useEffect(() => {
    if (tokenContract) getBalance();
    // if (faucetContract) getNextBuyTime();
  }, [refresh, tokenContract]);

  useEffect(() => {
    if (stakeContract) getStakingData();
    // if (faucetContract) getNextBuyTime();
  }, [refresh, stakeContract]);

  useEffect(() => {
    console.log(account);
    if (account) {
      loadContract();
    }
  }, [account]);

  useEffect(() => {
    if (checkEthereumExists()) {
      ethereum.on("accountsChanged", getConnectedAccounts);
      getConnectedAccounts();
    }
    return () => {
      if (checkEthereumExists()) {
        ethereum.removeListener("accountsChanged", getConnectedAccounts);
      }
    };
  }, []);
  return (
    <AppContext.Provider
      value={{
        account,
        connectWallet,
        balance,
        stake,
        stakeLoading,
        approve,
        approveLoading,
        requestTokens,
        nextBuyTime,
        message,
        tokenDetails
      }}
    >
      <div class="login-dark">
      {children}
      </div>
    </AppContext.Provider>
  );
};

export default AppProvider;
