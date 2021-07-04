import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
import menShirtReducer from "../features/men-shirts/menShirt";
import veggiesReducer from "../features/veggies";
import cartReducer from "../features/cart/cart";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import orderReducer from "../features/order";

const reducers = combineReducers({
  user: userReducer,
  // movie: movieReducer,
  menshirts: menShirtReducer,
  cart: cartReducer,
  veggie: veggiesReducer,
  order: orderReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;

/* export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        menshirts: menShirtReducer
    },

    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
}) */
