import { RequestStatusType } from 'finalProject/store/app/types';

export const setAppStatus = (status: RequestStatusType) =>
  ({
    type: 'APP/SET_STATUS',
    payload: { status },
  } as const);
