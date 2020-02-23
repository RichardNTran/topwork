import { AUTH_ACTION, REQUEST } from '../constant';

export function getCurrentUserInfo() {
  return {
    type: REQUEST(AUTH_ACTION.GET_CURRENT_INFO)
  };
}

export function logout() {
  return {
    type: REQUEST(AUTH_ACTION.LOGOUT)
  };
}

export function getSession(data) {
  return {
    type: REQUEST(AUTH_ACTION.GET_SESSION),
    payload: data
  };
}

export function login(data) {
  return {
    type: REQUEST(AUTH_ACTION.LOGIN),
    payload: data
  };
}

export function register(data) {
  return {
    type: REQUEST(AUTH_ACTION.REGISTER),
    payload: data
  };
}

export function verifyNewpassword(data) {
  return {
    type: REQUEST(AUTH_ACTION.NEWPASSWORD),
    payload: data
  };
}

export function clearAuthentication() {
  return {
    type: REQUEST(AUTH_ACTION.CLEAR_AUTH)
  };
}
