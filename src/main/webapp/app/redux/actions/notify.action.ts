import { NOTIFY_ACTION, REQUEST } from '../constant';

export function subscribeNotify(data) {
  return {
    type: REQUEST(NOTIFY_ACTION.SUBSCRIBE_NOTIFY),
    payload: data
  };
}

export function unsubscribeNotify(data) {
  return {
    type: REQUEST(NOTIFY_ACTION.UNSUBSCRIBE_NOTIFY),
    payload: data
  };
}
