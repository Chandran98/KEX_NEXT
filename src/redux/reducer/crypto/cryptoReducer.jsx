import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCryptoList,
  fetchUsdtPrice,
  marketDepthBuy,
  marketDepthSell,
} from "./cryptoApi";

const cryptoSlice = createSlice({
  initialState: {
    loading: false,
    usdt: null,
    sellsocket: null,
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
        state.buysocket = action.payload;
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
        console.log("state.data  sell order  ", action.payload);
      })
      .addCase(marketDepthSell.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cryptoSlice.reducer;
