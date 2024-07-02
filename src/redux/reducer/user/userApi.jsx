"use client";
import {
  activateAccountUrl,
  forgotPasswordOtpVerificationUrl,
  forgotPasswordUrl,
  headers,
  kycUpdateUrl,
  logHistoryUrl,
  loginUrl,
  profileUrl,
  referralDetailsUrl,
  registerUrl,
  removeBankUrl,
  resetPasswordUrl,
  updateBankUrl,
  updateProfileUrl,
} from "@/constant/apiUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";

export const signIn = createAsyncThunk("signIn", async (data) => {


  console.log(`dfsfasf${data}`);
  try {
    const res = await axios.post(loginUrl, data);
    const response = res.data;
    // localStorage.setItem("auth-token", response.token);
    setCookie("authtoken", response.token);
    toast.success(res.data.message);

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

export const activateAccount = createAsyncThunk(
  "activateAccount",
  async (data) => {
    console.log(`dfsfasf${data}`);
    try {
      const res = await axios.post(activateAccountUrl, data);
      const response = res.data;
      toast.success(res.data.message);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (data) => {
    console.log(data, "otpemailx");
    try {
      const res = await axios.post(forgotPasswordUrl, data);
      const response = res.data;
      // localStorage.setItem("auth-token", res.data.token);
      setCookie("auth-token", res.data.token);
      toast.success(res.data.message);
   
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

export const updateProfile = createAsyncThunk("updateProfile", async (data) => {
  try {
    const res = await axios.post(updateProfileUrl, data, headers);
    const response = res.data;
    toast.success(response.message);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const kycUpdate = createAsyncThunk("kycUpdate", async (data) => {
  try {
    const res = await axios.post(kycUpdateUrl, data, headers);
    const response = res.data;
    toast.success(response.message);

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const removeBank = createAsyncThunk("removeBank", async (data) => {
  try {
    const res = await axios.post(removeBankUrl, data, headers);
    const response = res.data;

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const updateBank = createAsyncThunk("updateBank", async (data) => {
  try {
    const res = await axios.post(updateBankUrl, data, headers);
    const response = res.data;
    toast.success(res.data.message);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});


export const referralDetails = createAsyncThunk("referralDetails", async () => {
  try {
    const res = await axios.get(referralDetailsUrl, headers);
    const response = res.data;
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});