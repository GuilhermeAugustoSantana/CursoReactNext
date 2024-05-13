import { initialState } from '.';
import * as actionTypes from './actions-types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREASE:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.RESET:
      return { ...initialState };
    case actionTypes.SET_COUNTER:
      return { ...state, ...action.payload };
    case actionTypes.ASYNC_INCREASE_START:
      console.log('Entrei increase start');
      return { ...state, loading: true };
    case actionTypes.ASYNC_INCREASE_END:
      console.log('Entrei increase');
      return { ...state, loading: false, counter: state.counter + 1 };
    case actionTypes.ASYNC_ERROR:
      return { ...state, loading: false };
    case actionTypes.ASYNC_DECREASE_START:
      return { ...state, loading: true };
    case actionTypes.ASYNC_DECREASE_END:
      console.log('Entrei decrease');
      return { ...state, loading: false, counter: state.counter - 1 };
  }
  return state;
};
