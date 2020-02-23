import React, { Component } from 'react';
import { RegisterForm } from './components';
import { HeaderFormContainer } from 'app/shared/component';
import { connect } from 'react-redux';
import { register } from 'app/redux/actions';
import i18next from 'app/shared/locales';

interface IRegisterContainerProps extends StateProps, DispatchProps {
  registerAction: any;
}

class RegisterContainer extends Component<IRegisterContainerProps> {
  render() {
    const { registerAction } = this.props;
    return (
      <div className="public-container register-container">
        <React.Fragment>
          <HeaderFormContainer label={i18next.t('registerContainer.title')} />
          <div className="container">
            <RegisterForm handleSubmitForm={registerAction} />
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
  registerAction: params => dispatch(register(params))
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

const registerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);

export { registerContainer as RegisterContainer };
