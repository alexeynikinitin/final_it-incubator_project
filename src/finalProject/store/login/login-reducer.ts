import { LoginActionsType, LoginStateType } from 'finalProject/store/login/types';

export const initialState: LoginStateType = {
  isLoggedIn: false,
};

export const loginReducer = (
  state: LoginStateType = initialState,
  action: LoginActionsType,
): LoginStateType => {
  switch (action.type) {
    case 'LOGIN/SET_IS_LOGGED_IN':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
