import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      console.log(action.type);
      return { ...state, posts: action.payload };
    }
  }

  console.log('Não tem action type');
  return { ...state };
};
