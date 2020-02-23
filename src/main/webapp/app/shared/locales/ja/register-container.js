export const registerContainer = {
  title: 'アカウント作成',
  fields: {
    email: {
      label: 'アカウント作成'
    },
    authorisation: {
      label: '権限'
    },
    name: {
      label: '名前',
      placeholder: 'Enter your Name'
    },
    password: {
      label: 'パスワード',
      placeholder: 'パスワードを作成してください'
    },
    password_confirm: {
      label: 'パスワード確認',
      placeholder: '確認のためもう一度入力してください'
    }
  },
  buttons: {
    register: '登録'
  },
  validates: {
    name: {
      require: '名前が必要です'
    },
    password: {
      require: 'パスワードは必須項目です。',
      min_length: '８文字以上で入力してください',
      format: '半角英数記号で入力してください'
    },
    password_confirm: {
      require: 'パスワードの確認が必要です',
      min_length: '',
      format: ''
    }
  }
};
