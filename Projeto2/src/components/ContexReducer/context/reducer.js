export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE': {
      console.log('Mudar titulo');
      return { ...state, title: action.payload };
    }
  }

  console.log(action);
  return { ...state };
};
