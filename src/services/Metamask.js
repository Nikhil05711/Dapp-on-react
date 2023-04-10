import { useState } from "react";
import { toast } from "react-toastify";
import Web3 from "web3";

const Metamask = () => {
  const [web3, setWeb3] = useState(null);
  const [connected, setConnected] = useState(false);

  const init = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        setConnected(true);
        toast.success("wallet connected successfully", {
          toastId: "walletSuccess",
        });
      } catch (error) {
        console.log("Error in connection to metamask : ", error);
        toast.error("Please install the metamask", {
          toastId: "walletError",
        });
      }
    } else {
      console.log("Metamask Not Detected in browser");
      toast.error("Please install the metamask", {
        toastId: "walletFailure",
      });
    }
  };

  // const addTrustwallet = async () => {
  //   if (window.ethereum) {
  //     try {
  //       let tx = await window.ethereum.request({
  //         method: "wallet_addEthereumChain",
  //         params: [
  //           {
  //             chainId: web3.eth.getChainId(),
  //             chainName: "Binance Smart chain testnet",
  //             nativeCurrency: {
  //               name: "BNB",
  //               symbol: "BNB testnet",
  //               decimals: 18,
  //             },

  //             rpcUrls: [" https://data-seed-prebsc-1-s1.binance.org:8545"],
  //             blockExplorerUrls: ["https://testnet.bscscan.com/"],
  //           },
  //         ],
  //       });
  //       console.log(".........", tx);
  //     } catch (e) {
  //       console.log("The error with connection is:", e);
  //     }
  //   } else {
  //     console.log("Please install the trustwallet");
  //   }
  // };

  // const connectToMetaMask = async () => {
  //   if (window.ethereum) {
  //     await window.ethereum.request({
  //       method: "wallet_switchEthereumChain",
  //       params: [
  //         {
  //           chainId: "0x97", // Ethereum Mainnet
  //         },
  //       ],
  //     });
  //   } else {
  //     alert("Please install MetaMask to use this feature");
  //   }
  // };

  return {
    setConnected,
    connected,
    init,
  };
};

export default Metamask;
