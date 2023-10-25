import { combineReducers } from "redux";
import authReducer from "./reducers/authSlice";
import tableDataReducer from "./reducers/tableDataSlice";

const rootReducer = combineReducers({
  authReducer,
  tableDataReducer,
});

export default rootReducer;
