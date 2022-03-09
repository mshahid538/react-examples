// import { configureStore } from "@reduxjs/toolkit";
// import { userSlice } from "./redux/UserSlice";
// export default configureStore({
//   reducer: {
//     user: userSlice.reducer,
//   },
// });

// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./redux/UserSlice";
// import messageReducer from "./redux/MessageSlice";
// const reducer = {
//   auth: authReducer,
//   message: messageReducer,
// };
// const store = configureStore({
//   reducer: reducer,
//   devTools: true,
// });
// export default store;
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./redux/CartSlice";
import ProductsReducer, { ProductsFetch } from "./redux/ProductSlice";
import userReducer from "./redux/UserReducer";
import { ProductApi } from "./redux/ProductApi";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  products: ProductsReducer,
  user: userReducer,
  cart: cartReducer,
  [ProductApi.reducerPath]: ProductApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
store.dispatch(ProductsFetch());
store.dispatch(getTotals());

export let persistor = persistStore(store);
