import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/reducer/user/userReducer";
import cryptoReducer from "./reducer/crypto/cryptoReducer";
import orderReducer from "./reducer/order/orderReducer";
import walletReducer from "./reducer/wallet/walletReducer";
import utilsReducer from "./reducer/utils/utilsReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    crypto: cryptoReducer,
    order: orderReducer,
    wallet: walletReducer,
    utils: utilsReducer,
  },
});
