import React, { Component } from 'react';

import { FormProps, Form, Field } from 'react-final-form';
import i18next from 'app/shared/locales';
import { emailValidate, passwordValidate } from 'app/shared/validate';
import { NormalField } from 'app/shared/component';

interface ILoginFormProps {
  handleSubmitForm?: any;
}

class LoginForm extends Component<ILoginFormProps, FormProps> {
  renderFormContent = ({ handleSubmit, submitting, pristine }) => (
    <form className="main-form login-form" onSubmit={handleSubmit}>
      <NormalField
        name="email"
        type="string"
        label={i18next.t('loginContainer.fields.email.label')}
        placeholder={i18next.t('loginContainer.fields.email.placeholder')}
        validates={emailValidate}
      />
      <NormalField
        name="password"
        type="password"
        label={i18next.t('loginContainer.fields.password.label')}
        placeholder={i18next.t('loginContainer.fields.password.placeholder')}
        validates={passwordValidate}
        // routelink="#"
        // linkText={i18next.t('loginContainer.forgot_password.link')}
      />
      <div className="buttons">
        <button type="submit" className="btn btn-brand-02 btn-block twbtn-primary" disabled={submitting}>
          {i18next.t('loginContainer.buttons.login')}
        </button>
      </div>
    </form>
  );

  render() {
    const { handleSubmitForm } = this.props;
    return <Form onSubmit={handleSubmitForm} render={this.renderFormContent} />;
  }
}

export { LoginForm };
