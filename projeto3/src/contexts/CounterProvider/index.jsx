import { useReducer } from 'react';
import { CounterContext } from '../CounterProvider/context';
import P from 'prop-types';
import { data } from './data';
import { reducer } from './reducer';

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};
