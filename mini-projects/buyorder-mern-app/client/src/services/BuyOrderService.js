import axios from "axios";
import { DB_URL } from "../constants";

export const getBuyOrdersDB = async () => { 
  return await axios.get(DB_URL); 
}; 

export const createBuyOrder = async ({ name, maxPrice, dataType }) => {  
  return await axios.post(DB_URL, { name, maxBidPrice: maxPrice, dataPackageType: dataType }); 
};
 
export const updateBuyOrder = async ({ id, name, maxPrice, dataType }) => {  
  return await axios.patch(`${DB_URL}/${id}`, {_id: id,  name, maxBidPrice: maxPrice, dataPackageType: dataType }); 
};
 
export const deleteBuyOrder = async (id) => { 
  return await axios.delete(`${DB_URL}/${id}`); 
};

