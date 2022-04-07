export const setAppSuccess = (success: string | null) =>
  ({
    type: 'APP/SET-APP-SUCCESS',
    payload: { success },
  } as const);
