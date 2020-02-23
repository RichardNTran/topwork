import { combineReducers } from 'redux';

import loadingReducer, { LoadingState } from './loading.reducer';
import authReducer, { AuthenticationState } from './auth.reducer';
import appDataReducer, { AppDataState } from './app-data.reducer';
import attachmentReducer, { AttachmentState } from './attachment.reducer';

export interface IRootState {
  readonly loadingReducer: LoadingState;
  readonly authReducer: AuthenticationState;
  readonly appDataReducer: AppDataState;
  readonly attachmentReducer: AttachmentState;
}

const rootReducer = combineReducers<IRootState>({
  loadingReducer,
  authReducer,
  appDataReducer,
  attachmentReducer
});

export default rootReducer;
