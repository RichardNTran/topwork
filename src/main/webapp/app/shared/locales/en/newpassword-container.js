export const newPasswordContainer = {
  title: 'Reset the password',
  fields: {
    password: {
      label: 'New password',
      placeholder: 'Please enter the new password'
    },
    confirmPassword: {
      label: 'Confirm new password',
      placeholder: 'Please enter the new password again to confirm'
    }
  },
  buttons: {
    change: 'Change the password'
  },
  validates: {
    password: {
      require: 'Password is required',
      min_length: 'length must bigger than 8',
      format: 'password is must haft width Alphanumeric'
    }
  },
  errors: {
    default: 'password is wrong'
  }
};
