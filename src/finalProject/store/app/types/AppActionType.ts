import { SetAppErrorType } from 'finalProject/store/app/types/SetAppErrorType';
import { SetAppStatusActionType } from 'finalProject/store/app/types/SetAppStatusActionType';
import { SetAppSuccessType } from 'finalProject/store/app/types/SetAppSuccessType';
import { SetIsInitializedActionType } from 'finalProject/store/app/types/SetIsInitializedActionType';

export type AppActionType =
  | SetAppStatusActionType
  | SetIsInitializedActionType
  | SetAppErrorType
  | SetAppSuccessType;
