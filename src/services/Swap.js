import React, { useState } from "react";
import { SwapABI, SwappingAddress } from "../assets/abi/Swap.js";
import Web3 from "web3";
import { toast } from "react-toastify";
import swal from "sweetalert";
const web3 = new Web3(window.ethereum);
window.ethereum.enable();

const Swap = () => {
  const [amount, setAmount] = useState("");
  const [disable, setDisable] = useState(false);
  const handleChange = async (event) => {
    setAmount(event.target.value);
  };

  const swaptoken = async () => {
    if (amount > 0) {
      setDisable(true);
      const swapping = new web3.eth.Contract(SwapABI, SwappingAddress);
      const accounts = await web3.eth.getAccounts();
      const amountinEth = web3.utils.toWei(amount, "gwei");

      const tx = await swapping.methods.swap(amountinEth).send({
        from: accounts[0],
      });
      setDisable(false);
      swal({
        icon: "success",
        title: "Transaction successfull",
        button: true,
        timer: 9500,
        content: {
          element: "div",
          attributes: {
            innerHTML: `<p class="text-dark"><small class="d-block">Your transaction hash are ${tx.transactionHash}</small><span class="d-block"><a class="text-primary" href="https://testnet.bscscan.com/tx/${tx.transactionHash}" target="_blank">view on bscscan</a></span></p>`,
          },
        },
      });
    } else {
      toast.error("Please input an amount to swap", {
        toastId: "InvalidAmount",
      });
    }
  };

  return { swaptoken, handleChange, disable };
};

export default Swap;
