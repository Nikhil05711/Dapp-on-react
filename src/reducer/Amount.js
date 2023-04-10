import Web3 from "web3";
import {
  Tokens,
  ANTTokenAddress,
  GlobalTokenAddress,
} from "../assets/abi/Tokens.js";

const initialState = 0;

const Amount = (state = initialState, action) => {
  console.log(action?.type);
  const web3 = new Web3(window.ethereum);
  const myContract = new web3.eth.Contract(Tokens, ANTTokenAddress);
  const balances = myContract.methods
    .balanceOf(window.ethereum.selectedAddress)
    .call();
  switch (action?.type) {
    case "Balance":
      const { id, data } = action.payload;
      return {
        ...state,
        data: [
          ...state,
          {
            id: id,
            data: data,
          },
        ],
      };
    default:
      return state;
  }
};

export default Amount();
