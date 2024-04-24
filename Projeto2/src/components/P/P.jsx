import { useContext } from 'react';
import { GlobalContext } from '../contexts/AppContext';

export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    state: { body, counter },
    state,
    setState,
  } = theContext;
  return (
    <p onClick={() => setState({ ...state, counter: counter + 1 })}>
      {body} {counter}
    </p>
  );
};
