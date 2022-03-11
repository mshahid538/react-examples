import axios from "axios";
import { API_BOOKS_URL } from "../constants";

export const getAllBooks = async () => { 
  return await axios.get(API_BOOKS_URL); 
};
