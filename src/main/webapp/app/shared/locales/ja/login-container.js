export const loginContainer = {
  title: 'topwork User Platformへのログイン',
  fields: {
    password: {
      label: 'パスワード',
      placeholder: 'パスワードを入力する'
    },
    email: {
      label: 'メールアドレス',
      placeholder: 'メールアドレスを入力する'
    }
  },
  buttons: {
    login: 'ログイン'
  },
  validates: {
    email: {
      require: 'メールアドレスは必須項目です。',
      format: 'メールアドレスの形式になっている必要あり'
    },
    password: {
      require: 'パスワードは必須項目です。',
      min_length: '８文字以上で入力してください',
      format: '半角英数記号で入力してください'
    }
  },
  errors: {
    default: 'ユーザー名またはパスワードが間違っています'
  },
  forgot_password: {
    link: 'パスワードを忘れた場合?'
  }
};
