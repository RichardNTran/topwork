import moment from 'moment';
import { MAX_LENGHT_200, APP_TIME_FORMAT, APP_LOCAL_DATE_FORMAT } from '../constant';

export const required = value => (value ? undefined : 'テキストを入力してください（必須）');
export const emptyString = value => (typeof value && value.trim() ? undefined : 'テキストを入力してください（必須）');
export const maxLength = value => (value && value.length > MAX_LENGHT_200 ? '200文字以内で入力してください' : undefined);
export const timeFormat = value => (!moment(value, APP_TIME_FORMAT, true).isValid() ? '時間が無効です' : undefined);
export const datePickerFormat = data =>
  data && data.value && !moment(data.value, APP_LOCAL_DATE_FORMAT, true).isValid() ? '日付が無効です' : undefined;
