import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/User/userSlice";
import cartReducer from "./Features/Cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
