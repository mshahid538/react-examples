export const API_LOGIN_URL = "http://localhost:5000/auth/login";
export const API_ITEMS_URL = "http://localhost:5000/items";

export const DATA_PACKAGE_TYPE = {
  DEVICE_LOCATION: "Device Location",
  DEVICE_BEHAVIOR: "Device Behavior",
  ID_MAPPING: "ID Mapping",
};

export const ORDERS = [
  {
    _id: 123123,
    name: "shahjahan",
    maxBidPrice: 4000,
    dataPackageType: DATA_PACKAGE_TYPE.DEVICE_BEHAVIOR,
  },
  {
    _id: 34444,
    name: "sarmad",
    maxBidPrice: 500,
    dataPackageType: DATA_PACKAGE_TYPE.ID_MAPPING,
  },
  {
    _id: 22222,
    name: "shahid",
    maxBidPrice: 5000,
    dataPackageType: DATA_PACKAGE_TYPE.DEVICE_LOCATION,
  },
];
