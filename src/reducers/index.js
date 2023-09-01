import { combineReducers } from "redux";
import materialReducer from "./materialReducer";

const rootReducer = combineReducers({
  materials: materialReducer,
  // ... other reducers
});

export default rootReducer;
