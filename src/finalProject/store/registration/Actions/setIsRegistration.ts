export const setIsRegistration = (isRegistration: string) =>
  ({
    type: 'registrationReducer/IS-REGISTRATION',
    payload: { isRegistration },
  } as const);
