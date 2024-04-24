import { createContext, useReducer } from 'react';
import '../../templates/App/App.css';

import { globalState } from './context/data';
import { AppContext } from './context';
import { H1 } from '../H1/H1';

export const ContexReducer = () => {
  return (
    <AppContext>
      <div>
        useContex + useReducer
        <H1 />
        ----------------------
      </div>
    </AppContext>
  );
};
