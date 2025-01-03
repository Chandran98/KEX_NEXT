import {
  activateAccountUrl,
  forgotPasswordOtpVerificationUrl,
  forgotPasswordUrl,
  headers,
  loginUrl,
  registerUrl,
  resetPasswordUrl,
} from "@/constant/apiUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";

export const signIn = createAsyncThunk("signIn", async (data) => {
  console.log(`dfsfasf${data}`);

  try {
    const res = await axios.post(loginUrl, data);
    const response = res.data;
    console.log(response);

    // localStorage.setItem("auth-token", response.token);
    setCookie("auth-token", response.token);

    toast.success(res.data.message);

    console.log("response7897", response);
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const signUp = createAsyncThunk("signUp", async (data) => {
  console.log(`signUp ${data}`);

  try {
    const res = await axios.post(registerUrl, data);
    const response = res.data;
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const activateAccount = createAsyncThunk(
  "activateAccount",
  async (data) => {
    console.log(`activateAccount ${data}`);
    try {
      const res = await axios.post(activateAccountUrl, data);
      const response = res.data;
      toast.success(res.data.message);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error, "act");
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (data) => {
    console.log(data, "forgotPassword");
    try {
      const res = await axios.post(forgotPasswordUrl, data);
      const response = res.data;
      setCookie("auth-token", res.data.token);
      // localStorage.setItem("auth-token", res.data.token);
      toast.success(res.data.message);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const forgotPasswordVerify = createAsyncThunk(
  "forgotPasswordVerify",
  async (data) => {
    try {
      const res = await axios.post(
        forgotPasswordOtpVerificationUrl,
        data,
        headers
      );
      const response = res.data;
      toast.success(res.data.message);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const passwordReset = createAsyncThunk("passwordReset", async (data) => {
  try {
    const res = await axios.post(resetPasswordUrl, data, headers);
    const response = res.data;
    toast.success(res.data.message);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});
