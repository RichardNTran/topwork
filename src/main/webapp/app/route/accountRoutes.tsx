import React from 'react';
import { Switch } from 'react-router-dom';

import { topworkPlatformRoute } from 'app/shared/constant';
import { DefaultFrame, PublicFrame } from 'app/shared/component';
import {
  AccountInfoContainer,
  ForgotPasswordContainer,
  VerifyEmailContainer,
  RegisterContainer,
  NewPasswordContainer
} from 'app/module/account';
import i18next from 'app/shared/locales';

const AccountRoutes = () => (
  <Switch>
    <DefaultFrame exact path={topworkPlatformRoute.AccountInfo} component={AccountInfoContainer} title={i18next.t('page.title.ai')} />
    <PublicFrame exact path={topworkPlatformRoute.AccountForgotPassword} component={ForgotPasswordContainer} />
    <PublicFrame exact path={topworkPlatformRoute.AccountVerifyEmail} component={VerifyEmailContainer} />
    <PublicFrame exact path={topworkPlatformRoute.AccountNewPassword} component={NewPasswordContainer} />
    <PublicFrame exact path={topworkPlatformRoute.Register} component={RegisterContainer} />
  </Switch>
);

export default AccountRoutes;
