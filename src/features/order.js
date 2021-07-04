import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  yourOrders: [],
};

const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    storeOrders: (state, action) => {
      state.yourOrders = action.payload.documents;
    },
  },
});

export const { storeOrders } = order.actions;

export const getOrders = (state) => state.order;

export default order.reducer;
