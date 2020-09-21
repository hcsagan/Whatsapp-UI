import counterReducer from "./counter";
import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
});

export default createStore(reducers);
