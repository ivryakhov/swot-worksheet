import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function factorReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FACTOR: {
      const newArea = state[action.area].concat(action.newFactor);
      const newState = {...state, [action.area]: newArea };
      return newState
    }
    default:
      return state;
  }  
}