import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global-styles.css';
import { Home } from './templates/Home';
import { CounterContextProvider } from './contexts/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterContextProvider>
    <Home />
  </CounterContextProvider>,
);
