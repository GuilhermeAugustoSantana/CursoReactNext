import './styles.css';
import { useCounterContext } from '../../contexts/CounterContext';
import { useEffect } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

export const Home = () => {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  useEffect(() => {
    console.log(state);
  }, [state, actions]);

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>increase</Button>
        <Button onButtonClick={actions.decrease}>decrease</Button>
        <Button onButtonClick={actions.reset}>reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>set 10</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>set 100</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          async increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          async error
        </Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncDecrease}>
          async Decrease
        </Button>
      </div>
    </div>
  );
};
