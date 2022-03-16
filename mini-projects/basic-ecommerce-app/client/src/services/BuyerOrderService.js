import axios from "axios";
import { API_ITEMS_URL } from "../constants";

export const getBuyOrdersDB = async () => {
  return await axios.get(API_ITEMS_URL);
};

export const createBuyOrder = async ({
  name,
  price,
  desc,
  category,
  dateAdded,
}) => {
  console.log(name, price, desc, category, dateAdded, "asdadsadsad");
  return await axios.post(API_ITEMS_URL, {
    name,
    price,
    desc,
    category,
    dateAdded,
  });
};

export const updateBuyOrder = async ({
  id,
  name,
  price,
  desc,
  category,
  dateAdded,
}) => {
  return await axios.put(`${API_ITEMS_URL}/${id}`, {
    id,
    name,
    price,
    desc,
    category,
    dateAdded,
  });
};

export const deleteBuyOrder = async (id) => {
  return await axios.delete(`${API_ITEMS_URL}/${id}`);
};
