import P from 'prop-types';
import './style.css';
import { useCounterContext } from '../../contexts/CounterContext';

export const Button = ({ children, onButtonClick }) => {
  const [state, actions] = useCounterContext();

  return <button onClick={onButtonClick}>{children}</button>;
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
};
