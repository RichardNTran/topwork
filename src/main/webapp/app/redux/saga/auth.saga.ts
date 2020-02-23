import { put, all, takeLatest } from 'redux-saga/effects';

import { AUTH_ACTION, SUCCESS, FAILURE, REQUEST } from '../constant';
import { authService } from 'app/service';
import { CookiesStorage, deserializerResponse } from 'app/shared/utils';
import { IAccountInfo } from 'app/shared/model';
import { CookieKey, topworkPlatformRoute } from 'app/shared/constant';
import history from 'app/config/history';

function* loginEmailPasswordWorker(action) {
  try {
    const result = yield authService.loginEmailPassword({ ...action.payload });
    const { data } = result;
    const accessToken = `${data.attributes.token_type} ${data.attributes.access_token}`;
    yield CookiesStorage.setAccessToken(accessToken);

    // const currentUserRes = yield authService.getcurentAccountInfo();
    // const currentUser = yield deserializerResponse(currentUserRes);
    // yield CookiesStorage.setCookieData(CookieKey.userRole, (currentUser.roles[0] || {}).name);
    history.push(topworkPlatformRoute.Home);
    yield put({
      type: SUCCESS(AUTH_ACTION.LOGIN),
      payload: {}
    });
  } catch (e) {
    yield put({ type: FAILURE(AUTH_ACTION.LOGIN), errors: e.errors });
  }
}

function* getCurrentUserInfo() {
  try {
    const accessToken = CookiesStorage.getAccessToken();
    authService.updateJWTAuthen(accessToken);
    const result = yield authService.getcurentAccountInfo();
    const currentUser: IAccountInfo = yield deserializerResponse(result);
    yield CookiesStorage.setCookieData(CookieKey.userRole, (currentUser.roles[0] || {}).name);
    yield put({
      type: SUCCESS(AUTH_ACTION.GET_CURRENT_INFO),
      payload: { currentUser }
    });
  } catch (e) {
    CookiesStorage.clearData();
    yield put({ type: FAILURE(AUTH_ACTION.GET_CURRENT_INFO), errors: e.errors });
  }
}

export default function* authSaga() {
  yield all([takeLatest(REQUEST(AUTH_ACTION.LOGIN), loginEmailPasswordWorker)]);
  yield all([takeLatest(REQUEST(AUTH_ACTION.GET_CURRENT_INFO), getCurrentUserInfo)]);
}
