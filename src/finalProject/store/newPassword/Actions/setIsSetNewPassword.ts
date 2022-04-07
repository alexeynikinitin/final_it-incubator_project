export const setIsSetNewPassword = (isSetNewPassword: boolean) =>
  ({
    type: 'newPasswordReducer/SET-IS-SET-NEW-PASSWORD',
    payload: { isSetNewPassword },
  } as const);
