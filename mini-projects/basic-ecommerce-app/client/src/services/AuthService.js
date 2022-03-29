import axios from "axios";
import { API_LOGIN_URL } from "../constants";

// // Login user
// const login = async (formData) => {
//   const response = await axios.post(API_LOGIN_URL, formData);
//   if (response?.status === 200) {
//     localStorage.setItem("user", JSON.stringify(response.data));
//   }
//   console.log(response);
//   return response.data;
// };

// // Logout user
// const logout = () => {
//   localStorage.removeItem("user");
// };

// const authService = {
//   logout,
//   login,
// };

// export default authService;

// Login user
const login = async (userData) => {
  const response = await axios.post(API_LOGIN_URL, userData);

  if (response.data) {
    // localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response, "Response from auth service provider");
    return response.data;
  }
};

// Logout user
const logout = () => {
  return null;
};

const authService = {
  logout,
  login,
};

export default authService;
