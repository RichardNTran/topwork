import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { LoginForm } from './components';
import { HeaderFormContainer } from 'app/shared/component';
import { CookieKey } from 'app/shared/constant';
import { FE_TOPWORK_URL } from 'app/config/constants';
import { CookiesStorage } from 'app/shared/utils';
import { login } from 'app/redux/actions';

interface ILoginContainerProps extends StateProps, DispatchProps {
  loginAction: any;
  loadingRef?: string;
}

class LoginContainer extends Component<ILoginContainerProps> {
  componentWillReceiveProps() {
    if (CookiesStorage.authenticated()) {
      const pastUrl = CookiesStorage.getCookieData(CookieKey.pastUrl);
      CookiesStorage.clearCookieData(CookieKey.pastUrl);
      window.location.assign(_.isEmpty(pastUrl) ? FE_TOPWORK_URL : pastUrl);
      return null;
    }
  }
  render() {
    const { loginAction } = this.props;
    return (
      <div className="public-container login-container">
        <React.Fragment>
          <HeaderFormContainer />
          <div className="container">
            <LoginForm handleSubmitForm={loginAction} />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = storeState => {
  const { authReducer } = storeState;
  const { error, result } = authReducer;
  return {
    error,
    result
  };
};

const mapDispatchToProps = dispatch => ({
  loginAction: params => dispatch(login(params))
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

const loginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

export { loginContainer as LoginContainer };
