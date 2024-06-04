import { createSlice } from "@reduxjs/toolkit";


const walletSlice=createSlice({
    initialState:{},
    name:"wallet",
    extraReducers:(builders)=>{
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
    }
})

export default walletSlice.reducer;