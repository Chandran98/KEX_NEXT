import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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