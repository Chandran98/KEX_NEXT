import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import io from "socket.io-client";

export const fetchCryptoList = createAsyncThunk("fetchCryptoList", async () => {
  console.log("adfsfdas fetch start");
  const res = await axios.get(
    "https://bxnzaopdi.kairaaexchange.com/api/v1/pair-list"
  );
  const response = await res.data;
  console.log(response);
  return response;
});
export const fetchUsdtPrice = createAsyncThunk("fetchUsdtPrice", async () => {
  console.log("adfsfdas fetch start");
  const res = await axios.get(
    "https://api-gcp.binance.com/api/v3/ticker/24hr"
  );
  const response = await res.data;
  console.log(response);
  return response;
});

export const marketDepthBuy = createAsyncThunk("marketDepthBuy", async (data) => {
  try {
    const socket = io("https://liclxnvmxb.kairaaexchange.com/", {
      transports: ["websocket"],
    });
    console.log("sdfdsf data", data);

    socket.emit("joinRoom", { message: data });

    const buyOrderData = await new Promise((resolve) => {
      socket.on("buy_order", (data) => {
        if (data && data.status) {
          const buyOrders = data.data.filter((order) => order.type === "buy");
          console.log("fun buy", buyOrders);
          resolve(buyOrders); // Resolve the promise with buyOrders
        }
      });
    });
    return buyOrderData;
  } catch (error) {
    console.log("err", error);
  }
});
export const marketDepthSell = createAsyncThunk("marketDepthSell", async (data) => {
  try {
    const socket = io("https://liclxnvmxb.kairaaexchange.com/", {
      transports: ["websocket"],
    });
    console.log("sdfdsf data", data);

    socket.emit("joinRoom", { message: data });

    const sellOrderData = await new Promise((resolve) => {
      socket.on("sell_order", (data) => {
        if (data && data.status) {
          const buyOrders = data.data.filter((order) => order.type === "sell");
          console.log("fun sell", buyOrders);
          resolve(buyOrders); // Resolve the promise with buyOrders
        }
      });
    });
    return sellOrderData;
  } catch (error) {
    console.log("err", error);
  }
});