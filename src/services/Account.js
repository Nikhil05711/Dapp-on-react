import React, { useState } from "react";
import Web3 from "web3";
import { toast } from "react-toastify";
const web3 = new Web3(window.ethereum);
window.ethereum.enable();

const Account = () => {
  const [myAddress, setMyAddress] = useState("");

  const connectedAddress = async () => {
    const accounts = await web3.eth.getAccounts();
    setMyAddress(accounts[0]);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(myAddress);
    toast.success("copied to clipboard");
  };

  return {
    myAddress,
    connectedAddress,
    handleCopy,
  };
};

export default Account;
