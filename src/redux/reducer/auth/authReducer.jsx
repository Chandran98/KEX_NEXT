import { createSlice } from "@reduxjs/toolkit";
import {
  signIn,
  signUp,
  forgotPassword,
  forgotPasswordVerify,
  passwordReset,
} from "./authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,

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
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.authData = action.payload;
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(forgotPasswordVerify.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPasswordVerify.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPasswordVerify.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(passwordReset.pending, (state) => {
        state.loading = true;
      })
      .addCase(passwordReset.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(passwordReset.rejected, (state) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default authSlice.reducer;
