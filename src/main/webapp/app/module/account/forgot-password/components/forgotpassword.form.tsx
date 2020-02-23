import React, { Component } from 'react';
import { FormProps, Form } from 'react-final-form';
import i18next from 'app/shared/locales';
import { required, maxLength } from 'app/shared/validate';
import { InputField } from 'app/shared/component';

interface IForgotPasswordFormProps {
  handleSubmitForm?: any;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values));
};

class ForgotPasswordForm extends Component<IForgotPasswordFormProps, FormProps> {
  renderFormContent({ handleSubmit, submitting }) {
    return (
      <form className="main-form resetpass-form wd-100p" onSubmit={handleSubmit}>
        <div className="wd-100p d-flex flex-column flex-sm-row mg-b-40">
          <InputField
            name="email"
            type="string"
            className="orm-control wd-sm-250 flex-fill"
            placeholder={i18next.t('forgotPasswordContainer.fields.email.label')}
            validates={[required, maxLength]}
          />
          <button type="submit" className="btn btn-brand-02 mg-sm-l-10 mg-t-10 mg-sm-t-0 oplbtn-primary" disabled={submitting}>
            {i18next.t('forgotPasswordContainer.buttons.send_email')}
          </button>
        </div>
      </form>
    );
  }

  render() {
    return <Form onSubmit={onSubmit} render={this.renderFormContent} />;
  }
}

export { ForgotPasswordForm };
