import React, { useState } from "react";
import Web3 from "web3";
import {
  Tokens,
  ANTTokenAddress,
  GlobalTokenAddress,
  USDTAddress,
  coistarAddress,
} from "../assets/abi/Tokens.js";
const web3 = new Web3(window.ethereum);

const Token = () => {
  const [bal, setBal] = useState(0);
  const [glblBal, setGlblBal] = useState(0);

  const balance = async (type) => {
    switch (type) {
      case "ANT": {
        const ant = new web3.eth.Contract(Tokens, ANTTokenAddress);
        const antbalance = await ant.methods
          .balanceOf(window.ethereum.selectedAddress)
          .call();
        const antInEth = web3.utils.fromWei(antbalance, "gwei");
        setBal(antInEth);
        // console.log("balance of ant", antInEth);
        break;
      }
      case "USDT": {
        const usdt = new web3.eth.Contract(Tokens, USDTAddress);
        const usdtbalance = await usdt.methods
          .balanceOf(window.ethereum.selectedAddress)
          .call();
        const usdtInEth = web3.utils.fromWei(usdtbalance, "ether");
        setBal(usdtInEth);
        // console.log("balance of usdt", usdtInEth);

        break;
      }
      case "COISTAR": {
        const coistar = new web3.eth.Contract(Tokens, coistarAddress);
        const coistarBalance = await coistar.methods
          .balanceOf(window.ethereum.selectedAddress)
          .call();
        const coistarInEth = web3.utils.fromWei(coistarBalance, "gwei");
        setBal(coistarInEth);
        // console.log("balance of coistar", coistarInEth);
        break;
      }
    }
  };

  const glblBalance = async () => {
    const glbl = new web3.eth.Contract(Tokens, GlobalTokenAddress);

    const glblBalances = await glbl.methods
      .balanceOf(window.ethereum.selectedAddress)
      .call();
    const glblInEth = web3.utils.fromWei(glblBalances, "ether");
    setGlblBal(glblInEth);
    // console.log("balance of glbl", glblInEth);
  };

  return {
    balance,
    glblBalance,
    bal,
    glblBal,
    web3,
  };
};

export default Token;
