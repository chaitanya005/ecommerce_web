import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storeVeggies: [],
};

const veggies = createSlice({
  name: "veggie",
  initialState,
  reducers: {
    saveVeggies: (state, action) => {
      state.storeVeggies = action.payload.allVeggies;
    },
  },
});

export const { saveVeggies } = veggies.actions;

export const storedVeggies = (state) => state.veggie;

export default veggies.reducer;
