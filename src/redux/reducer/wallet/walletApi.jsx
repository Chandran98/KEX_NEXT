import {
  cryptoAddressUrl,
  cryptoAssetUrl,
  cryptoHistoryUrl,
  cryptoWithdrawalUrl,
  fiatAssetUrl,
  fiatHistoryUrl,
  headers,
  withdrawUrl,
} from "@/constant/apiUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//// Deposit ////

export const fiatDeposit = createAsyncThunk("fiatDeposit", async (data) => {
  const res = await axios.post(fiatDeposit, data, headers);
  const response = await res.data;
  console.log(response);
  return response;
});
export const cryptoAddressGenerator = createAsyncThunk(
  "cryptoAddressGenerator",
  async (coin, network) => {
    const url = cryptoAddressUrl + "/" + coin + "/" + network;
    console.log("urrl", url);
    const res = await axios.get(url, headers);
    const response = await res.data;
    console.log(response);
    return response;
  }
);

/// Asset Balance ///

export const fiatBalance = createAsyncThunk("fiatBalance", async () => {
  const res = await axios.get(fiatAssetUrl, headers);
  const response = await res.data;
  console.log(response);
  return response;
});

export const cryptoBalance = createAsyncThunk("cryptoBalance", async () => {
  const res = await axios.get(cryptoAssetUrl, headers);
  const response = await res.data;
  console.log(response);
  return response;
});

/// history ///

export const fiatHistory = createAsyncThunk("fiatHistory", async () => {
  const res = await axios.get(fiatHistoryUrl, headers);
  const response = await res.data;
  console.log(response);
  return response;
});
export const cryptoHistory = createAsyncThunk("cryptoHistory", async () => {
  const res = await axios.get(cryptoHistoryUrl, headers);
  const response = await res.data;
  console.log(response);
  return response;
});

/// Withdrawal ///

export const fiatWithdrawal = createAsyncThunk(
  "fiatWithdrawal",
  async (data) => {
    const res = await axios.post(withdrawUrl, data, headers);
    const response = await res.data;
    console.log(response);
    return response;
  }
);

export const cryptoWithdrawal = createAsyncThunk(
  "cryptoWithdrawal",
  async (data) => {
    const res = await axios.get(cryptoWithdrawalUrl, data, headers);
    const response = await res.data;
    console.log(response);
    return response;
  }
);
