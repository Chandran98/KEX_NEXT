import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import {
  headers,
  openOrderHistoryUrl,
  myOrderUrl,
  placeOrderUrl,
} from "../../../constant/apiUrl";

export const openOrders = createAsyncThunk("openOrders", async () => {
  console.log("adfsfdas fetsdch start");
  try {
    const res = await axios.get(openOrderHistoryUrl, headers);
    const response = await res.data;
    console.log("openOrders45", response);
    return response;
  } catch (error) {
    console.log(error, "err");
  }
});
export const myOrderDetails = createAsyncThunk("myOrderDetails", async () => {
  console.log("myOrderDetails start");
  try {
    const res = await axios.get(myOrderUrl, headers);
    const response = await res.data;
    console.log("myOrderDetails", response);
    return response;
  } catch (error) {
    console.log(error, "err");
  }
});

export const placeOrder = createAsyncThunk("placeOrder", async (data) => {
  console.log("placeOrder start");
  try {
    const res = await axios.post(placeOrderUrl,data, headers);
    const response = await res.data;
    console.log("openOrders45", response);
    if(response.code===200){

      toast(response.message);
    }
    return response;
  } catch (error) {
    console.log(error, "err");
  }
});
