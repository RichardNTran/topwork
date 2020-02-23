export const loginContainer = {
  title: 'Log in topwork User Platform',
  fields: {
    password: {
      label: 'Password',
      placeholder: 'Enter your password'
    },
    email: {
      label: 'E-mail',
      placeholder: 'Enter your email'
    }
  },
  buttons: {
    login: 'Log in'
  },
  validates: {
    email: {
      require: 'Mail address is required',
      format: 'email is wrong format'
    },
    password: {
      require: 'Password is required',
      min_length: 'length must bigger than 8',
      format: 'password is must haft width Alphanumeric'
    }
  },
  errors: {
    default: 'Username or password is wrong'
  },
  forgot_password: {
    link: 'Forgot password?'
  }
};
