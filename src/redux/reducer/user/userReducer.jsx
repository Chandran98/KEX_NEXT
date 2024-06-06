import {  createSlice } from "@reduxjs/toolkit";
import { signIn,getProfile,signUp } from "./userApi";


const userSlice = createSlice({
  name: "user",
  initialState: {
    authData: null,
    loading: false,
    userData:null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.authData = action.payload;
      })
      .addCase(signIn.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })    .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.authData = action.payload;
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = false;
        state.error = null;
      }).addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(getProfile.rejected, (state) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default userSlice.reducer;
