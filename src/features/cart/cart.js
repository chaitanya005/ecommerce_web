import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  orderId: "",
  billingInfo: {},
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      state.cartItem = [...state.cartItem.concat(action.payload.veggie)];
    },

    updateCart: (state, action) => {
      // console.log(action.payload.updatedItem);
      state.cartItem = state.cartItem.map((veggie) =>
        veggie.veggieId === action.payload.updatedItem.veggieId
          ? {
              ...veggie,
              newPrice: action.payload.updatedItem.newPrice,
              qty: action.payload.updatedItem.qty,
            }
          : veggie
      );
    },

    removeItem: (state, action) => {
      console.log(action.payload.removeeItem);
      /* state.cartItem.map((veggie, i) =>
        veggie.veggieId === action.payload.removeeItem.veggieId
          ? state.cartItem.splice(i, 1)
          : veggie
      ); */

      state.cartItem = state.cartItem.filter(
        (item) => item.veggieId !== action.payload.removeeItem.veggieId
      );
    },

    setOrderId: (state, action) => {
      state.orderId = action.payload.orderId;
    },

    setBillingDetails: (state, action) => {
      state.billingInfo = action.payload.values;
    },

    removeCart: (state, action) => {
      state.cartItem = [];
    },
  },
});

export const {
  addToCart,
  updateCart,
  removeItem,
  removeCart,
  setOrderId,
  setBillingDetails,
} = cart.actions;

export const storeCart = (state) => state.cart.cartItem;
export const billingInfo = (state) => state.cart.billingInfo;

export const orderId = (state) => state.cart.orderId;

export default cart.reducer;
