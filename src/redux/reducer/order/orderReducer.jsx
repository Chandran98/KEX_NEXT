import { createSlice } from "@reduxjs/toolkit";
import { openOrders, myOrderDetails, placeOrder } from "./orderApi";

const orderSlice = createSlice({
  initialState: {
    loading: false,
    orderDetails: null,
    error: null,
  },
  name: "order",
  extraReducers: (builders) => {
    builders
      
      .addCase(myOrderDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(myOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload;
        console.log("myOrderDetails.payload", state.openOrder);
      })
      .addCase(myOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload;
        console.log("myOrderDetails.payload", state.openOrder);
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
