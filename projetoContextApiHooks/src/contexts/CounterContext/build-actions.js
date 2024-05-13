import * as actionTypes from './actions-types';

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setCounter: (payload) => dispatch({ type: actionTypes.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncError: () => asyncErrorFn(dispatch),
    asyncDecrease: () => asyncDecreaseFn(dispatch),
  };
};

const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });

  return await new Promise((resolve) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_END });
      resolve('RESOLVED');
    }, 2000);
  });
};

const asyncDecreaseFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_DECREASE_START });

  return await new Promise((resolve) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_DECREASE_END });
      resolve('RESOLVED');
    }, 2000);
  });
};

const asyncErrorFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_DECREASE_START });

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_ERROR });
      reject(new Error('REJECT'));
    }, 2000);
  });
};
