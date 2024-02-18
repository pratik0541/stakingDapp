import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { ethers, BigNumber } from "ethers";
import Head from "next/head";
export default function Home() {
  const { account, message, connectWallet, stake, stakeLoading, approve, approveLoading, nextBuyTime, requestTokens, tokenDetails } =
    useContext(AppContext);
  const [data, setData] = useState({});
  const [showStaked, setShowStaked] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>Stake</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
        <div className={ account ? "insideDiv" : "insideDiv alignCenterConnectBtn"}>
          { account ? 
            <>
              <div className="form-group">
                <h3 className="boxTitle">Stake {tokenDetails ? tokenDetails.symbol : ""} Tokens</h3>
              </div>
              <div className="form-group">
                <input
                  placeholder="Amount"
                  className="form-control"
                  type={"text"}
                  name="amount"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group balanceDiv">
                <p className="tokenBalance">Balance : {tokenDetails ? Number(ethers.utils.formatEther(BigNumber.from(tokenDetails.balance))).toFixed(2) : 0} {tokenDetails ? tokenDetails.symbol : ""}</p>
                <p className="tokenBalance">Approved : {tokenDetails ? Number(ethers.utils.formatEther(BigNumber.from(tokenDetails.allowance))).toFixed(2) : 0} {tokenDetails ? tokenDetails.symbol : ""}</p>
              </div>
              {
                tokenDetails ? 
                  approveLoading ? 
                      <button disabled type="button" className="text-white btn btn-primary btn-block focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                        </svg>
                        Approving...
                      </button> 
                      :
                      (Number(ethers.utils.formatEther(BigNumber.from(tokenDetails.allowance))) < Number(data.amount)) ?
                        <button onClick={() => approve(data.amount)} type="button" className="px-6 py-3.5 text-base font-medium text-white btn btn-primary btn-block focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Approve</button>
                      :
                      <button type="button" className="text-white btn btn-primary btn-block cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center disable">Approve</button>  
                    :
                  <button type="button" className="text-white btn btn-primary btn-block cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center disable">Approve</button>
              }

              { tokenDetails && data.amount && (Number(ethers.utils.formatEther(BigNumber.from(tokenDetails.allowance))) >= Number(data.amount)) ?
                stakeLoading ?
                <button disabled type="button" className="text-white btn btn-primary btn-block focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                      <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                      </svg>
                      Staking...
                    </button> 
                :
                <button onClick={() => {
                  console.log(data);
                  stake(data.amount);
                  }} type="button" className="px-6 py-3.5 text-base font-medium text-white btn btn-primary btn-block focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Stake</button>
                  : 
                <button type="button" className="text-white btn btn-primary btn-block cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center disable">Stake</button>
              }
              {message.description ? 
                <a href="#" className={message.title === "success" ? "messageSuccess" : "messageFail"}>
                  {`${message.title}: ${message.description}`}
                </a>
                : null}
            </>
              :
              (
                <>
                  <button className="btn btn-primary btn-block" onClick={connectWallet}>
                    Connect Metamask
                  </button>
                  <a style={{textAlign: "center"}} href="https://metamask.io/download/" target="_blank">Install Metamask</a>
                </>
              )
            }
        </div>

    </>
    // <div className="bg-white-300 flex-1">
    //   <Head>
    //     <title>Stake</title>
    //   </Head>
    //   <div className="container max-w-3xl py-10">
    //     <div className="shadow-border bg-blue-200 p-6">
    //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    //         <div className="col-span-2 border-4 bg-yellow-200 flex flex-col p-4 border-black">
    //           <h2 className="text-4xl md:text-5xl font-bold">{`${Number(ethers.utils.formatEther(
    //             BigNumber.from(balance)
    //           )).toFixed(2)} `}{tokenDetails ? tokenDetails.symbol : ""}</h2>
    //           <div className="flex-1" />
    //           <p className="text-lg font-bold">Balance</p>
    //         </div>

    //         {/* <button
    //           onClick={
    //             new Date() - new Date(nextBuyTime) > 0 ? requestTokens : null
    //           }
    //           className="btn  bg-green-200 md:text-2xl"
    //         >
    //           {new Date() - new Date(nextBuyTime) < 0 ? (
    //             <>{`Next Request at ${new Date(
    //               nextBuyTime
    //             ).toLocaleString()}`}</>
    //           ) : (
    //             <>
    //               Request <span className="block">Tokens</span>
    //             </>
    //           )}
    //         </button> */}
    //         <div className="sm:col-span-2 bg-gray-700 h-0.5" />
    //         {/* <input
    //           placeholder="Address"
    //           className="border-4 border-black p-2"
    //           type={"text"}
    //           name="address"
    //           onChange={handleChange}
    //         /> */}
    //         <input
    //           placeholder="Amount"
    //           className="col-span-2 border-4 border-black p-2"
    //           type={"text"}
    //           name="amount"
    //           onChange={handleChange}
    //         />

    //         {
    //           tokenDetails ? 
    //             approveLoading ? 
    //                 <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    //                   <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                   <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    //                   <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    //                   </svg>
    //                   Approving...
    //                 </button> 
    //                 :
    //                 (Number(ethers.utils.formatEther(BigNumber.from(tokenDetails.allowance))) < Number(data.amount)) ?
    //                   <button onClick={() => approve(data.amount)} type="button" className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Approve</button>
    //                 :
    //                 <button type="button" className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Approve</button>  
    //               :
    //             <button type="button" className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Approve</button>
    //         }

    //         { tokenDetails && data.amount && (Number(ethers.utils.formatEther(BigNumber.from(tokenDetails.allowance))) >= Number(data.amount)) ?
    //             stakeLoading ?
    //             <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    //                   <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                   <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    //                   <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    //                   </svg>
    //                   Staking...
    //                 </button> 
    //             :
    //             <button onClick={() => {
    //               console.log(data);
    //               stake(data.amount);
    //               }} type="button" className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Stake</button>
    //               : 
    //             <button type="button" className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Stake</button>
    //           }
            

    //         <div className="col-span-2 bg-amber-200 border-4 border-black p-4">
    //           {message.description ? (
    //             <p className="text-xl capitalize">{`${message.title}: ${message.description}`}</p>
    //           ) : (
    //             <p className="text-xl">{`No Message`}</p>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
