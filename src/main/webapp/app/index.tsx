import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { Provider } from 'react-redux';

import AppComponent from './app';
import initStore from './config/store';
import { SENTRY_ENV, DSN, serviceName } from 'app/config/constants';
const rootEl = document.getElementById('root');

const store = initStore();
if (SENTRY_ENV && SENTRY_ENV !== 'local') {
  Sentry.init({
    environment: SENTRY_ENV,
    dsn: DSN
  });

  Sentry.configureScope(scope => {
    scope.setTag('service_name', serviceName);
    // scope.clear();
  });
}

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootEl
  );

render(AppComponent);
