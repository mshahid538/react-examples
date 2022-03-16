import axios from "axios";
import { API_ITEMS_URL } from "../constants";

export const getBuyOrdersDB = async () => {
  return await axios.get(API_ITEMS_URL);
};

export const createBuyOrder = async ({
  name,
  price,
  desc,
  catagory,
  date_added,
}) => {
  return await axios.post(API_ITEMS_URL, {
    name,
    price,
    desc,
    catagory,
    date_added,
  });
};

export const updateBuyOrder = async ({
  id,
  name,
  price,
  desc,
  catagory,
  date_added,
}) => {
  return await axios.patch(`${API_ITEMS_URL}/${id}`, {
    id,
    name,
    price,
    desc,
    catagory,
    date_added,
  });
};

export const deleteBuyOrder = async (id) => {
  return await axios.delete(`${API_ITEMS_URL}/${id}`);
};
