import { useContext } from 'react';
import { Context } from '../ContexReducer/context/index';

// eslint-disable-next-line
export const H1 = () => {
  const theContext = useContext(Context);
  const {
    state: { title },
  } = theContext;
  return <h1 onClick={() => theContext.changeTitle('Um texto')}>{title}</h1>;
};
