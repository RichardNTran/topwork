export const registerContainer = {
  title: 'Register Account',
  fields: {
    email: {
      label: 'Email address'
    },
    authorisation: {
      label: 'Authorisation'
    },
    name: {
      label: 'Name',
      placeholder: 'Enter your Name'
    },
    password: {
      label: 'Password',
      placeholder: 'Enter the Password'
    },
    password_confirm: {
      label: 'Password confirmation',
      placeholder: 'Enter the password again for confirmation'
    }
  },
  buttons: {
    register: 'Register'
  },
  validates: {
    name: {
      require: 'Name is required'
    },
    password: {
      require: 'Password is required',
      min_length: 'length must bigger than 8',
      format: 'password is must haft width Alphanumeric'
    },
    password_confirm: {
      require: 'Password confirmation is required',
      min_length: '',
      format: ''
    }
  }
};
