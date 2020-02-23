import React from 'react';
import { Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';
import { composeValidators } from 'app/shared/utils/common';
import { topworkPlatformRoute } from 'app/shared/constant';
interface INormalFieldProps {
  placeholder?: string;
  label?: string;
  type: string;
  name: string;
  validates?: any;
  prefix?: any;
  initialValue?: boolean;
}

const RemeberMeGroups: React.SFC<INormalFieldProps> = props => {
  const { placeholder, validates, name, type, initialValue } = props;
  return (
    <div className="field-wraper remember-field-group">
      <Field name={name} type={type} placeholder={placeholder} validate={validates ? composeValidators(...validates) : null}>
        {({ input, meta }) => {
          const hasError = (meta.visited || meta.touched) && meta.error;
          return (
            <div className={`input-content ${hasError ? 'has-error' : ''}`}>
              <Checkbox type={type} defaultChecked {...input}>
                {props.children}
              </Checkbox>
              {hasError ? <span className="error"> {meta.error} </span> : ''}
            </div>
          );
        }}
      </Field>
      <Link className="login-form-forgot" to={topworkPlatformRoute.AccountForgotPassword}>
        Forgot password
      </Link>
    </div>
  );
};

export { RemeberMeGroups };
