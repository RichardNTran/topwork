import _ from 'lodash';
import { put, all, takeEvery } from 'redux-saga/effects';

import { ATTACHMENT_ACTION, SUCCESS, FAILURE, REQUEST } from '../constant';
import { fileService } from 'app/service';

function* uploadAttachment(action) {
  try {
    const { index, file, callback } = action.payload;
    const result = yield fileService.uploadAttachment(file);
    const attachment = result && result.data && result.data.data ? result.data.data[0] : {};
    const data = {
      id: attachment.id,
      name: attachment.attributes && attachment.attributes.name,
      path: attachment.attributes && attachment.attributes.path,
      size: attachment.attributes && attachment.attributes.size
    };

    yield put({
      type: SUCCESS(ATTACHMENT_ACTION.UPLOAD_ATTACHMENT),
      payload: { attachment: data, index },
      specialKey: action.specialKey
    });

    callback && callback();
  } catch (e) {
    const { callbackError } = action.payload;
    callbackError && callbackError();
    yield put({ type: FAILURE(ATTACHMENT_ACTION.UPLOAD_ATTACHMENT), errors: e.errors, specialKey: action.specialKey });
  }
}

function* removeAttachment(action) {
  try {
    const { index } = action.payload;
    yield put({
      type: SUCCESS(ATTACHMENT_ACTION.REMOVE_ATTACHMENT),
      payload: { index }
    });
  } catch (e) {
    yield put({ type: FAILURE(ATTACHMENT_ACTION.REMOVE_ATTACHMENT), errors: e.errors });
  }
}

function* setAttachment(action) {
  try {
    const { payload } = action;
    yield put({
      type: SUCCESS(ATTACHMENT_ACTION.SET_ATTACHMENT),
      payload: {
        attachments: payload
      }
    });
  } catch (e) {
    yield put({ type: FAILURE(ATTACHMENT_ACTION.SET_ATTACHMENT), errors: e.errors });
  }
}

export default function* attachmentSaga() {
  yield all([takeEvery(REQUEST(ATTACHMENT_ACTION.UPLOAD_ATTACHMENT), uploadAttachment)]);
  yield all([takeEvery(REQUEST(ATTACHMENT_ACTION.REMOVE_ATTACHMENT), removeAttachment)]);
  yield all([takeEvery(REQUEST(ATTACHMENT_ACTION.SET_ATTACHMENT), setAttachment)]);
}
