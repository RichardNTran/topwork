import { sideBar } from './sideBar';
import { header, page } from './topwork-frame';
import * as component from './components';

import { registerContainer } from './register-container';
import { loginContainer } from './login-container';
import { forgotPasswordContainer } from './forgotpassword-container';
import { forgotPasswordCompleted } from './forgotpassword-completed';
import { newPasswordContainer } from './newpassword-container';
import { homeContainer } from './home-container';
import { errorMessage } from './error-message';
import { attachment } from './attachment';

export default {
  loginContainer,
  forgotPasswordContainer,
  registerContainer,
  newPasswordContainer,
  homeContainer,
  header,
  page,
  sideBar,
  component,
  forgotPasswordCompleted,
  errorMessage,
  attachment
};
