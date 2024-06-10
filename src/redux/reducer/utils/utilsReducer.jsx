import { createSlice } from "@reduxjs/toolkit";
import { bankDetails, createTicket, supportTicket, uploadImage } from "./utilsApi";

const utilsSlice = createSlice({
  initialState: {
    loading: false,
    error: null,
    bankData: null,
    ticketData:null,

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
      });
  },
});
// supportTicket
export default utilsSlice.reducer;
