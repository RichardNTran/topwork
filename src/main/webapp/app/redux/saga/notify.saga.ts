import { put, all, takeLatest } from 'redux-saga/effects';
import { convertCamelObjectToSnake } from 'app/shared/utils/common';
import { CookiesStorage } from 'app/shared/utils/local-storage';
import { NOTIFY_ACTION, SUCCESS, FAILURE, REQUEST } from '../constant';
import { notifyService } from 'app/service';
import { CookieKey } from 'app/shared/constant';
function* subscribleNotify(action) {
  try {
    const { payload } = action;
    const response = yield notifyService.subscribe(convertCamelObjectToSnake(payload));
    const deviceToken = payload.deviceToken;
    CookiesStorage.setCookieData(CookieKey.deviceToken, deviceToken);
    yield put({
      type: SUCCESS(NOTIFY_ACTION.SUBSCRIBE_NOTIFY),
      payload: response.data
    });
  } catch (e) {
    yield put({ type: FAILURE(NOTIFY_ACTION.SUBSCRIBE_NOTIFY), errors: e.errors });
  }
}

function* unsubscribleNotify(action) {
  try {
    const { payload } = action;
    const response = yield notifyService.unsubscribe(convertCamelObjectToSnake(payload));
    yield put({
      type: SUCCESS(NOTIFY_ACTION.UNSUBSCRIBE_NOTIFY),
      payload: response.data
    });
  } catch (e) {
    yield put({ type: FAILURE(NOTIFY_ACTION.UNSUBSCRIBE_NOTIFY), errors: e.errors });
  }
}

export default function* notifySaga() {
  yield all([takeLatest(REQUEST(NOTIFY_ACTION.SUBSCRIBE_NOTIFY), subscribleNotify)]);
  yield all([takeLatest(REQUEST(NOTIFY_ACTION.UNSUBSCRIBE_NOTIFY), unsubscribleNotify)]);
}
