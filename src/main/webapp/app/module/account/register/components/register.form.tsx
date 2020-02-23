import React, { Component } from 'react';

import { FormProps, Form } from 'react-final-form';

import i18next from 'app/shared/locales';
import { emailValidate, passwordValidate } from 'app/shared/validate';
import { NormalField, NormalViewOnlyField } from 'app/shared/component';

interface IRegisterFormProps {
  handleSubmitForm?: any;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values));
};

class RegisterForm extends Component<IRegisterFormProps, FormProps> {
  renderFormContent({ handleSubmit, submitting, pristine }) {
    return (
      <form className="main-form register-form" onSubmit={handleSubmit}>
        <NormalViewOnlyField name="email" type="string" label={i18next.t('registerContainer.fields.email.label')} value="taro@mail.com" />
        <NormalViewOnlyField
          name="authorisation"
          type="string"
          label={i18next.t('registerContainer.fields.authorisation.label')}
          value="Guest"
        />
        <NormalField
          name="name"
          type="string"
          label={i18next.t('registerContainer.fields.name.label')}
          placeholder={i18next.t('registerContainer.fields.name.placeholder')}
          validates={emailValidate}
        />
        <NormalField
          name="password"
          type="password"
          label={i18next.t('registerContainer.fields.password.label')}
          placeholder={i18next.t('registerContainer.fields.password.placeholder')}
          validates={passwordValidate}
        />
        <NormalField
          name="password"
          type="password"
          label={i18next.t('registerContainer.fields.password_confirm.label')}
          placeholder={i18next.t('registerContainer.fields.password_confirm.placeholder')}
          validates={passwordValidate}
        />
        <div className="buttons">
          <button
            type="submit"
            className="btn btn-brand-02 btn-block oplbtn-primary"
            onClick={handleSubmit}
            disabled={submitting || pristine}
          >
            {i18next.t('registerContainer.buttons.register')}
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

export { RegisterForm };
