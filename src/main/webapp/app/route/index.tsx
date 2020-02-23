import React from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';

import history from 'app/config/history';
import AccountRoutes from './accountRoutes';
import { topworkPlatformRoute } from 'app/shared/constant';
import { CookiesStorage } from 'app/shared/utils';
import { LoginContainer } from 'app/module/account';
import { AUTH_ACTION } from 'app/redux/constant';
import { PublicFrame, DefaultFrame } from 'app/shared/component';
import HomeContainer from 'app/module/home';
import i18next from 'app/shared/locales';

const defaultRouteComponent = (props: any) => {
  if (CookiesStorage.authenticated()) {
    return <Redirect to={{ pathname: topworkPlatformRoute.Home }} />;
  }
  return <Redirect to={{ pathname: topworkPlatformRoute.Login }} />;
};

const logoutRouteComponenr = (props: any) => {
  CookiesStorage.clearData();
  return <Redirect to={topworkPlatformRoute.Login} />;
};

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={defaultRouteComponent} />
      <PublicFrame exact path={topworkPlatformRoute.Login} component={LoginContainer} loadingAction={AUTH_ACTION.LOGIN} />
      <DefaultFrame exact path={topworkPlatformRoute.Home} component={HomeContainer} title={i18next.t('page.title.ai')} />
      <Route path={topworkPlatformRoute.AccountInfo} component={AccountRoutes} />
      <Route exact path={topworkPlatformRoute.Logout} component={logoutRouteComponenr} />
    </Switch>
  </Router>
);

export default Routes;
