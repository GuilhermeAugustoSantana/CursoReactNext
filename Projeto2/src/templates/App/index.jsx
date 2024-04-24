import './App.css';
import P from 'prop-types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MemoEx } from '../../components/MemoEx/MemoEx';
import { ContexUse } from '../../components/ContextUse/ContextUse';
import { Reducer } from '../../components/Reducer/Reducer';
import { ContexReducer } from '../../components/ContexReducer/ContexReducer';
import { MyHook } from '../../components/MyHook/MyHook';

function eventFn() {
  alert('h1 clicado');
}

const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(1)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  //ComponentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    //ComponentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>

        <button type="button" onClick={handleClick}>
          Reverse {reverseClass}
        </button>
        {btn}
      </header> */}
      <MyHook />
      <ContexReducer />
      <Reducer />
      <ContexUse />
      <MemoEx />
    </div>
  );
}

export default App;
