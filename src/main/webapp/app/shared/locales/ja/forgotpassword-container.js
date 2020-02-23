export const forgotPasswordContainer = {
  title: 'パスワード再設定',
  note: {
    note_1: '登録済みのメールアドレスを入力してください。',
    note_2: '再設定用メールをお送りします。'
  },
  fields: {
    email: {
      label: 'メールアドレス',
      placeholder: 'メールアドレスを入力する'
    }
  },
  buttons: {
    send_email: '再設定用メールを送信'
  },
  validates: {
    email: {
      require: 'メールアドレスは必須項目です。',
      format: 'メールアドレスの形式になっている必要あり'
    }
  },
  errors: {
    default: 'メールアドレスの形式になっている必要あり'
  }
};
