import { createStore } from "redux";
//import rootReducer from '../reducers';
import factorReducer from "../reducers/factorReducer";

export default function(initialState) {
  return createStore(
    factorReducer,
    initialState
  );
}