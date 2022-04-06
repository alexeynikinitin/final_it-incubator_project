export const setIsLoggedIn = (value: boolean) =>
  ({
    type: 'LOGIN/SET_IS_LOGGED_IN',
    payload: { value },
  } as const);
