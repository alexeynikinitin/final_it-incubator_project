import { RequestStatusType } from 'finalProject/store/app/types/RequestStatusType';

export type AppStateType = {
  status: RequestStatusType;
  isInitialized: boolean;
};
