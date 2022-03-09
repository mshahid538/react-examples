// import axios from "axios";
import { API_BOOKS_URL } from "../constants";

// export const getAllBooks = async () => {
//   return await axios.get(API_BOOKS_URL);
// };
import axios from "axios";
import authHeader from "./auth-header";
const getPublicContent = () => {
  return axios.get(API_BOOKS_URL + "all");
};
const getUserBoard = () => {
  return axios.get(API_BOOKS_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_BOOKS_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_BOOKS_URL + "admin", { headers: authHeader() });
};
const userService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
export default userService;
