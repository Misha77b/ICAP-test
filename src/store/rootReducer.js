import { combineReducers } from "redux";
import authReducer from "./reducers/authSlice";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
