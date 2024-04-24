import '../../../templates/App/App.css';

import P from 'prop-types';
import { globalState } from './data';
import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    return dispatch({ type: 'CHANGE_TITLE', payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};
