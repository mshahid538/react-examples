import axios from "axios";
import { API_ORDERS_URL } from "../constants";

export const createOrder = async ({ name, balance, orderitems, buyerId }) => {
  return await axios.post(API_ORDERS_URL, {
    name,
    balance,
    orderitems,
    buyerId,
  });
};
