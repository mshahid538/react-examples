import axios from "axios";
import { API_LOGIN_URL } from "../constants";

export const userLogin = async (user) => {
  return await axios.post(API_LOGIN_URL, user);
};
