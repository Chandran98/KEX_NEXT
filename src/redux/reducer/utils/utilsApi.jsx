import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const uploadImage = createAsyncThunk("uploadImage", async (data) => {
    
    const res = await axios.post(uploadImage,data
    );
    const response = await res.data;
    console.log(response);
    return response;
  });