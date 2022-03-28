import axios from "axios";
import { API_LOGIN_URL } from "../constants";

// Login user
const login = async (formData) => {
  const response = await axios.post(API_LOGIN_URL, formData);
  if (response?.status === 200 || response.payload.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  //   register,
  logout,
  login,
};

export default authService;
