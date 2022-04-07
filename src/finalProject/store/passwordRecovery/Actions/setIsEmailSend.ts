export const setIsEmailSend = (isEmailSend: boolean, email: string) =>
  ({
    type: 'passwordRecovery/SET-IS-EMAIL-SEND',
    payload: { isEmailSend, email },
  } as const);
