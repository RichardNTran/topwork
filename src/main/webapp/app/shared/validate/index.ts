export * from './common';

import { MIN_LENGTH_8, regexEmail } from 'app/shared/constant';
import i18next from 'app/shared/locales';

export const passwordValidate = [
  value => (value ? undefined : i18next.t('loginContainer.validates.password.require')),
  value => (value && value.length < MIN_LENGTH_8 ? i18next.t('loginContainer.validates.password.min_length') : undefined)
];

export const emailValidate = [
  value => ((value || '').trim() ? undefined : i18next.t('loginContainer.validates.email.require')),
  value => (!regexEmail.test(value) ? i18next.t('loginContainer.validates.email.format') : undefined)
];
