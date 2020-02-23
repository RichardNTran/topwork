export const forgotPasswordContainer = {
  title: 'Reset password',
  note: {
    note_1: 'Please enter the email address.',
    note_2: 'We will send you an email to reset the password.'
  },
  fields: {
    email: {
      label: 'E-mail',
      placeholder: 'Enter your email'
    }
  },
  buttons: {
    send_email: 'Send an email to reset'
  },
  validates: {
    email: {
      require: 'Mail address is required',
      format: 'email is wrong format'
    }
  },
  errors: {
    default: 'email is wrong format'
  }
};
