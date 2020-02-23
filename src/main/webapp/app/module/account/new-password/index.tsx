import React, { Component } from 'react';
import { NewPasswordForm } from './components';
import { HeaderFormContainer } from 'app/shared/component';
import { connect } from 'react-redux';
import { verifyNewpassword } from 'app/redux/actions';
import i18next from 'app/shared/locales';

interface INewPasswordContainerProps extends StateProps, DispatchProps {
  verifyNewpasswordAction: any;
}

class NewPasswordContainer extends Component<INewPasswordContainerProps> {
  render() {
    const { verifyNewpasswordAction } = this.props;
    return (
      <div className="public-container newpassword-container">
        <React.Fragment>
          <HeaderFormContainer label={i18next.t('newPasswordContainer.title')} />
          <div className="container">
            <NewPasswordForm handleSubmitForm={verifyNewpasswordAction} />
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
  verifyNewpasswordAction: params => dispatch(verifyNewpassword(params))
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

const newPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPasswordContainer);

export { newPasswordContainer as NewPasswordContainer };
