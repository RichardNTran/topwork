import { fork } from 'redux-saga/effects';
import authSaga from './auth.saga';
import appDataSaga from './app-data.saga';
import notifySaga from './notify.saga';
import fileSaga from './file-saga';
import attachmentSaga from './attachment.saga';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(appDataSaga);
  yield fork(notifySaga);
  yield fork(fileSaga);
  yield fork(attachmentSaga);
}
