import {
  announcementUrl,
  bankDetailsUrl,
  createTicketUrl,
  headers,
  referralDetailsUrl,
  sendSMSUrl,
  setPassCodeUrl,
  supportTicketUrl,
  verifyPasscodeUrl,
  verifySMSOtpUrl,
} from "@/constant/apiUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const uploadImage = createAsyncThunk("uploadImage", async (data) => {
  const res = await axios.post(uploadImage, data);
  const response = await res.data;
  console.log(response);
  return response;
});

export const referralDetails = createAsyncThunk(
  "referral-details",
  async () => {
    try {
      const res = await axios.get(referralDetailsUrl, headers);
      const response = res.data;

      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const announcement = createAsyncThunk("announcement", async () => {
  try {
    const res = await axios.get(announcementUrl, headers);
    const response = res.data;

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});
/// ADMIN BANK ///
export const bankDetails = createAsyncThunk("bankDetails", async () => {
  try {
    const res = await axios.get(bankDetailsUrl, headers);
    const response = res.data;

    console.log(response,"sfddfs");
    return response;
  } catch (error) {
    console.log(error);
  }
});

/// User Tickets ///
export const createTicket = createAsyncThunk("createTicket", async (data) => {
  console.log("createTicket", data);
  try {
    const res = await axios.post(createTicketUrl, data, headers);
    const response = res.data;
    console.log("adsfdsf", response.message);
    toast.success(response.message);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const supportTicket = createAsyncThunk("supportTicket", async () => {
  try {
    const res = await axios.get(supportTicketUrl, headers);
    const response = res.data;

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

/// OTP ///

export const sendSMS = createAsyncThunk("sendSMS", async (data) => {
  const datapass = { mobile: data };
  console.log(datapass, "datapass");
  try {
    const res = await axios.post(sendSMSUrl, datapass, headers);
    const response = res.data;
    toast.success(res.data.message);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const verifySMSOtp = createAsyncThunk("verifySMSotp", async (data) => {
  try {
    const res = await axios.post(verifySMSOtpUrl, data, headers);
    const response = res.data;
    toast.success(res.data.message);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const setPasscode = createAsyncThunk("setPasscode", async (data) => {
  try {
    const res = await axios.post(setPassCodeUrl, data, headers);
    const response = res.data;
    toast.success(res.data.message);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const verifyPasscode = createAsyncThunk("verifyPasscode", async (data) => {
  try {
    const res = await axios.post(verifyPasscodeUrl, data, headers);
    const response = res.data;
    toast.success(res.data.message);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});
