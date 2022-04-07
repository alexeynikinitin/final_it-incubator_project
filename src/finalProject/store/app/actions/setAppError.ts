export const setAppError = (error: string | null) =>
  ({
    type: 'APP/SET-APP-ERROR',
    payload: { error },
  } as const);
