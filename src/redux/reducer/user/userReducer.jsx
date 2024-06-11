import { createSlice } from "@reduxjs/toolkit";
import {
  signIn,
  getProfile,
  signUp,
  getlogHistory,
  removeBank,
  updateBank,
  bankDetails,
  updateProfile,
  kycUpdate,
  forgotPassword,
  forgotPasswordVerify,
  passwordReset,
} from "./userApi";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authData: null,
    loading: false,
    userData: null,
    logData: null,
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
      })

      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(getProfile.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(getlogHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getlogHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.logData = action.payload;
      })
      .addCase(getlogHistory.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(removeBank.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeBank.fulfilled, (state, action) => {
        state.loading = false;
        // state.logData = action.payload;
      })
      .addCase(removeBank.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateBank.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBank.fulfilled, (state, action) => {
        state.loading = false;
        state.logData = action.payload;
      })
      .addCase(updateBank.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(kycUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(kycUpdate.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(kycUpdate.rejected, (state) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default userSlice.reducer;
