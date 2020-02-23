import { SUCCESS, FAILURE, AUTH_ACTION } from '../constant';
const initialState = {
  currentUser: null,
  error: {}
};

export type AuthenticationState = Readonly<typeof initialState>;

export default (state: AuthenticationState = initialState, action): AuthenticationState => {
  switch (action.type) {
    case SUCCESS(AUTH_ACTION.GET_CURRENT_INFO):
      const { currentUser } = action.payload;
      return {
        ...state,
        currentUser
      };
    case FAILURE(AUTH_ACTION.GET_CURRENT_INFO):
      const { error } = action;
      return {
        ...state,
        error,
        currentUser: null
      };
    default:
      return state;
  }
};
