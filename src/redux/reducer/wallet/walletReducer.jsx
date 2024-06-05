import { createSlice } from "@reduxjs/toolkit";
import {
  fiatBalance,
  fiatDeposit,
  fiatHistory,
  fiatWithdrawal,
  cryptoAddressGenerator,
  cryptoBalance,
  cryptoHistory,
  cryptoWithdrawal,
} from "./walletApi";

const walletSlice = createSlice({
  initialState: {
    loading: false,
    error: null,
    fiatBalannceData: null,
    fiatHistoryData: null,
    cryptoBalanceData:null,
    cryptoHistoryData:null,
  },
  name: "wallet",
  extraReducers: (builders) => {
    builders
      .addCase(fiatBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(fiatBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.fiatBalannceData = action.payload;
        console.log("fiatBalance", state.fiatBalannceData);
      })
      .addCase(fiatBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fiatDeposit.pending, (state) => {
        state.loading = true;
      })
      .addCase(fiatDeposit.fulfilled, (state, action) => {
        state.loading = false;
        // state.coin = action.payload;
        console.log("action.payload", action.payload.message);
      })
      .addCase(fiatDeposit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fiatHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fiatHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.fiatHistoryData = action.payload;
        console.log("fiatHistoryData", state.fiatHistoryData);
      })
      .addCase(fiatHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fiatWithdrawal.pending, (state) => {
        state.loading = true;
      })
      .addCase(fiatWithdrawal.fulfilled, (state, action) => {
        state.loading = false;
        // state.coin = action.payload;
        console.log("action.payload", action.payload.message);
      })
      .addCase(fiatWithdrawal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(cryptoAddressGenerator.pending, (state) => {
        state.loading = true;
      })
      .addCase(cryptoAddressGenerator.fulfilled, (state, action) => {
        state.loading = false;
        // state.coin = action.payload;
        console.log("action.payload", action.payload.message);
      })
      .addCase(cryptoAddressGenerator.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(cryptoBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(cryptoBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.cryptoBalanceData = action.payload;
        console.log("cryptoBalanceData", state.cryptoBalanceData);
      })
      .addCase(cryptoBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(cryptoHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(cryptoHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.cryptoHistoryData = action.payload;
        console.log("cryptoHistoryData", state.cryptoHistoryData);
      })
      .addCase(cryptoHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(cryptoWithdrawal.pending, (state) => {
        state.loading = true;
      })
      .addCase(cryptoWithdrawal.fulfilled, (state, action) => {
        state.loading = false;
        // state.cryptoHistoryData = action.payload;
        console.log("action.payload", action.payload.message);
      })
      .addCase(cryptoWithdrawal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default walletSlice.reducer;
