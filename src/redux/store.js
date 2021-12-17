import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger"; // If u want use, please add in array middleware, and do not commit on git
import thunk from "redux-thunk";
// import reducers from "./reducers/index";
import rootReducers from "./rootReducers";

const store = configureStore({
  reducer: rootReducers,
  middleware: [thunk],
});

export default store;
