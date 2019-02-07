import * as types from './actionTypes';

export function addFactor(newFactor, area) {
  return { type: types.ADD_FACTOR, newFactor, area}
}

export function removeFactor(factor, area) {
  return { type: types.REMOVE_FACTOR, factor, area}
}