import { createSlice } from "@reduxjs/toolkit";
import { bankDetails, createTicket, setPasscode, supportTicket, uploadImage, verifyPasscode, verifySMSOtp } from "./utilsApi";

const utilsSlice = createSlice({
  initialState: {
    loading: false,
    error: null,
    bankData: null,
    ticketData:null,
    mobileOtpVerified:false,
    imageUpload: null,
  },
  name: "utils",
  extraReducers: (builders) => {
    builders
      .addCase(bankDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(bankDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.bankData = action.payload;
      })
      .addCase(bankDetails.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createTicket.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createTicket.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(supportTicket.pending, (state) => {
        state.loading = true;
      })
      .addCase(supportTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.ticketData=action.payload;
        console.log(state.ticketData,"state.ticketData")
      })
      .addCase(supportTicket.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(verifySMSOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifySMSOtp.fulfilled, (state,action) => {
        state.loading = false;
        state.mobileOtpVerified=action.payload.status;
      })
      .addCase(verifySMSOtp.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(setPasscode.pending, (state) => {
        state.loading = true;
      })
      .addCase(setPasscode.fulfilled, (state,action) => {
        state.loading = false;
      })
      .addCase(setPasscode.rejected, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(verifyPasscode.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyPasscode.fulfilled, (state,action) => {
        state.loading = false;
      })
      .addCase(verifyPasscode.rejected, (state) => {
        state.loading = false;
        state.error = null;
      });
  },
});
// supportTicket
export default utilsSlice.reducer;
