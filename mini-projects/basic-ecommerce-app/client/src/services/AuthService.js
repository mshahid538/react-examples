import axios from "axios";
import { API_LOGIN_URL } from "../constants";

const login = async (userData) => {
  const response = await axios.post(API_LOGIN_URL, userData);

  if (response?.status !== 200) {
    return response.error(`Error: ${response.statusText}`);
  }

  if (response.data) {
    return response.data;
  }
};

const logout = () => {
  return null;
};

const authService = {
  logout,
  login,
};

export default authService;
