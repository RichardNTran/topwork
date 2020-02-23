import { ATTACHMENT_ACTION, REQUEST } from '../constant';

export function uploadAttachment(data) {
  return {
    type: REQUEST(ATTACHMENT_ACTION.UPLOAD_ATTACHMENT),
    payload: data,
    specialKey: data.index
  };
}

export function removeAttachment(data) {
  return {
    type: REQUEST(ATTACHMENT_ACTION.REMOVE_ATTACHMENT),
    payload: data
  };
}

export function setAttachment(data) {
  return {
    type: REQUEST(ATTACHMENT_ACTION.SET_ATTACHMENT),
    payload: data
  };
}

export function downloadAttachment(data) {
  return {
    type: REQUEST(ATTACHMENT_ACTION.DOWN_LOAD_FILE),
    payload: data
  };
}
