import React, { Component } from 'react';

import { FormProps, Form, Field } from 'react-final-form';

import i18next from 'app/shared/locales';
import { passwordValidate } from 'app/shared/validate';
import { NormalField } from 'app/shared/component';

interface INewPasswordFormProps {
  handleSubmitForm?: any;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values));
};

class NewPasswordForm extends Component<INewPasswordFormProps, FormProps> {
  renderFormContent({ handleSubmit, submitting, pristine }) {
    return (
      <form className="main-form newpass-form" onSubmit={handleSubmit}>
        <NormalField
          name="password"
          type="password"
          label={i18next.t('newPasswordContainer.fields.password.label')}
          placeholder={i18next.t('newPasswordContainer.fields.password.placeholder')}
          validates={passwordValidate}
        />
        <NormalField
          name="confirmPassword"
          type="password"
          label={i18next.t('newPasswordContainer.fields.confirmPassword.label')}
          placeholder={i18next.t('newPasswordContainer.fields.confirmPassword.placeholder')}
          validates={passwordValidate}
        />
        <div className="buttons">
          <button type="submit" className="btn btn-brand-02 btn-block oplbtn-primary" disabled={submitting || pristine}>
            {i18next.t('newPasswordContainer.buttons.change')}
          </button>
        </div>
      </form>
    );
  }

  render() {
    const { handleSubmitForm } = this.props;
    return <Form onSubmit={handleSubmitForm} initialValues={{ username: '', password: '' }} render={this.renderFormContent} />;
  }
}

export { NewPasswordForm };
