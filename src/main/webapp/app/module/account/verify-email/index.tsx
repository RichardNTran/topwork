import React, { Component } from 'react';
import i18next from 'app/shared/locales';
const imgMail = 'content/images/img17.png';

class VerifyEmailContainer extends Component {
  render() {
    return (
      <div className="content content-fixed content-auth-alt public-container">
        <div className="container pd-x-0">
          <div className="ht-100p wd-100p wd-md-80p wd-lg-700 m-auto d-flex flex-column align-items-center justify-content-center">
            <div className="wd-150 wd-sm-250 mg-b-30">
              <img src={imgMail} className="img-fluid" alt="" />
            </div>
            <h2 className="tx-color-01 tx-20 tx-sm-24 mg-b-8">{i18next.t('forgotPasswordCompleted.title')}</h2>
            <p className="tx-14 tx-sm-14 tx-lg-16 tx-normal mg-b-5">{i18next.t('forgotPasswordCompleted.message.message_1')}</p>
            <p className="tx-14 tx-sm-14 tx-lg-16 tx-normal mg-b-30">{i18next.t('forgotPasswordCompleted.message.message_2')}</p>
            <p className="tx-12 tx-color-03 mg-b-5">{i18next.t('forgotPasswordCompleted.note.note_1')}</p>
            <p className="tx-12 tx-color-03">{i18next.t('forgotPasswordCompleted.note.note_2')}</p>
          </div>
        </div>
      </div>
    );
  }
}

export { VerifyEmailContainer };
