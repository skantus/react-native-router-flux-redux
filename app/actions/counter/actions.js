import * as types from './actionTypes';

export const Increment = () => {
  return (dispatch) => {
    dispatch(increment());
  }
}

export const Decrement = () => {
  return (dispatch) => {
    dispatch(decrement());
  }
}

const increment = () => ({
  type: types.INCREMENT
});

const decrement = () => ({
  type: types.DECREMENT
});
