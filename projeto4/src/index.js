import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global-styles.css';
import { Home } from './templates/Home';
import { HomeUseLayoutEffect } from './templates/HomeUseLayoutEffect';
import { HomeCustomHookMediaQuery } from './templates/HomeCustomHookMediaQuery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeCustomHookMediaQuery />
  </React.StrictMode>,
);
