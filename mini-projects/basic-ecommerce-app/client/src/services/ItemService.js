import axios from "axios";
import { API_ITEMS_URL } from "../constants";

export const getItems = async () => {
  return await axios.get(API_ITEMS_URL);
};

export const createItem = async ({
  name,
  price,
  desc,
  category,
  dateAdded,
}) => {
  return await axios.post(API_ITEMS_URL, {
    name,
    price,
    desc,
    category,
    dateAdded,
  });
};

export const updateItem = async ({
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

export const deleteItem = async (id) => {
  return await axios.delete(`${API_ITEMS_URL}/${id}`);
};
