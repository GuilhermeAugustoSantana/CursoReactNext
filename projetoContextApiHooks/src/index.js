import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global-styles.css';
import { Home } from './templates/Home';
import { CounterContextProvider } from './contexts/CounterContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeUseHistory } from './templates/HomeUseHistory';
import { Menu } from './components/Menu';
import { Page404 } from './templates/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterContextProvider>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/useHistory/:slug?" component={HomeUseHistory} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  </CounterContextProvider>,
);
