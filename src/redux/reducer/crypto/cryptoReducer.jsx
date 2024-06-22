import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCryptoList,
  fetchUsdtPrice,
  marketDepthBuy,
  marketDepthSell,
  swapConversion,
  swapHistory,
  swapcoins,
  usdtPrice,
} from "./cryptoApi";

const cryptoSlice = createSlice({
  initialState: {
    loading: false,
    usdt: null,
    sellsocket: null,
    swapHistoryData:null,
    swapCoinList:null,
    usdtPrice:null,
    coin: null,
    error: null,
  },
  name: "crypto",
  extraReducers: (builders) => {
    builders
      .addCase(fetchCryptoList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCryptoList.fulfilled, (state, action) => {
        state.loading = false;
        state.coin = action.payload;
        console.log("action.payload", state.coin);
      })
      .addCase(fetchCryptoList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUsdtPrice.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsdtPrice.fulfilled, (state, action) => {
        state.loading = false;
        state.usdtPrice = action.payload;
        console.log("state.data fetchUsdtPrice  ", action.payload);
      })
      .addCase(fetchUsdtPrice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(marketDepthSell.pending, (state) => {
        state.loading = true;
      })
      .addCase(marketDepthSell.fulfilled, (state, action) => {
        state.loading = false;
        state.sellsocket = action.payload;
        
      })
      .addCase(marketDepthSell.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(swapHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(swapHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.swapHistoryData = action.payload;
      })
      .addCase(swapHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(swapcoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(swapcoins.fulfilled, (state, action) => {
        state.loading = false;
        state.swapCoinList = action.payload;
      })
      .addCase(swapcoins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(swapConversion.pending, (state) => {
        state.loading = true;
      })
      .addCase(swapConversion.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(swapConversion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      ;
  },
});

export default cryptoSlice.reducer;
