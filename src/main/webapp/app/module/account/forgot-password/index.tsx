import React, { Component } from 'react';
import { ForgotPasswordForm, IntroFormContainer } from './components';
import i18next from 'app/shared/locales';
const imgMail = 'content/images/img18.png';

class ForgotPasswordContainer extends Component {
  render() {
    return (
      <div className="content content-fixed content-auth-alt public-container">
        <React.Fragment>
          <div className="container d-flex justify-content-center ht-100p pd-sm-0">
            <div className="ht-100p mx-wd-350 wd-sm-450 m-auto d-flex flex-column align-items-center justify-content-center">
              <div className="wd-70p wd-sm-250 wd-lg-300 m-auto pd-b-15">
                <img src={imgMail} className="img-fluid" alt="" />
              </div>
              <h2 className="tx-color-01 tx-20 tx-sm-24 mg-b-10">{i18next.t('forgotPasswordContainer.title')}</h2>
              <IntroFormContainer />
              <ForgotPasswordForm />
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export { ForgotPasswordContainer };
