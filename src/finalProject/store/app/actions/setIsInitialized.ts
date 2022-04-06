export const setIsInitialized = (isInitialized: boolean) =>
  ({
    type: 'APP/SET_INITIALIZED',
    payload: { isInitialized },
  } as const);
