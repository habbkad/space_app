import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./Reducer/reducer";

export default configureStore({
  reducer: { data: apiReducer },
});
