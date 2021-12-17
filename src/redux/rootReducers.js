import { combineReducers } from "redux";
import globalReducers from "./global/reducers";

export default combineReducers({
  global: globalReducers,
});
