import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './Store/Store';
import HomePage from './Page/HomePage';
import FavPage from './Page/FavPage';
import { Router, RouteComponentProps } from '@reach/router';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavPage />} path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
