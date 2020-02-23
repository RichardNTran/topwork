import { SUCCESS, FAILURE, ATTACHMENT_ACTION, REQUEST } from '../constant';

const initialState = {
  attachments: [],
  error: {}
};

export type AttachmentState = Readonly<typeof initialState>;

export default (state: AttachmentState = initialState, action): AttachmentState => {
  switch (action.type) {
    case REQUEST(ATTACHMENT_ACTION.UPLOAD_ATTACHMENT):
      // todo
      return state;
    default:
      return state;
  }
};
