import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global-styles.css';
import { HomeCodeSlitting } from './templates/HomeCodeSlitting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeCodeSlitting />
  </React.StrictMode>,
);
