import {configureStore  } from "@reduxjs/toolkit";
// import authReducer from "../reducer/authReducer";
import cryptoReducer from "./reducer/crypto/cryptoReducer";
import orderReducer from "./reducer/order/orderReducer";
import walletReducer from "./reducer/wallet/walletReducer";

export const store =configureStore({
    reducer:{
        // auth:authReducer,
        crypto:cryptoReducer,
        order:orderReducer,
        wallet:walletReducer
    }
})