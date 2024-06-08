import { activateAccountUrl, headers, logHistoryUrl, loginUrl, profileUrl, registerUrl } from "@/constant/apiUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const signIn = createAsyncThunk("signIn", async (data) => {
  console.log(`dfsfasf${data}`);
  try {
    const res = await axios.post(loginUrl, data);
    const response = res.data;
    localStorage.setItem("auth-token", response.token);

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const signUp = createAsyncThunk("signUp", async (data) => {
  console.log(`dfsfasf${data}`);
  
  try {
    const res = await axios.post(registerUrl, data);
    const response = res.data;
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const activateAccount = createAsyncThunk("activateAccount", async (data) => {
  console.log(`dfsfasf${data}`);
  try {
    const res = await axios.post(activateAccountUrl, data);
    const response = res.data;

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const getProfile = createAsyncThunk("profile", async () => {
    try {
      const res = await axios.get(profileUrl, headers);
      const response = res.data;
  
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  });

  export const getlogHistory = createAsyncThunk("logHistory", async () => {
    try {
      const res = await axios.get(logHistoryUrl, headers);
      const response = res.data;
  
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  });