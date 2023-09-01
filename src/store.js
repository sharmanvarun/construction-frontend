import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import materialReducer from "./reducers/materialReducer";

const rootReducer = combineReducers({
  materials: materialReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
