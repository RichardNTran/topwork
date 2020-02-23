import _ from 'lodash';
import { put, all, takeEvery } from 'redux-saga/effects';
import { ATTACHMENT_ACTION, SUCCESS, FAILURE, REQUEST } from '../constant';
import { fileService } from 'app/service';

function* downloadFile(action) {
  try {
    const { payload } = action;
    yield fileService.downloadFileSever(payload);
    yield put({
      type: SUCCESS(ATTACHMENT_ACTION.DOWN_LOAD_FILE)
    });
  } catch (e) {
    yield put({ type: FAILURE(ATTACHMENT_ACTION.DOWN_LOAD_FILE), errors: e.errors });
  }
}

export default function* fileSaga() {
  yield all([takeEvery(REQUEST(ATTACHMENT_ACTION.DOWN_LOAD_FILE), downloadFile)]);
}
