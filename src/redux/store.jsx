import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './slice';
const store = configureStore({
  reducer: {
    cart:cartReduser
  }
});

export default store;
