import {
  SetAppErrorType,
  SetAppStatusActionType,
  SetAppSuccessType,
} from 'finalProject/store/app/types';
import {
  setIsEmailSendAC,
  setIsLoadingAC,
} from 'finalProject/store/passwordRecovery/passwordRecovery-reducer';

export type PasswordRecoveryActionType =
  | ReturnType<typeof setIsEmailSendAC>
  | ReturnType<typeof setIsLoadingAC>
  | SetAppErrorType
  | SetAppStatusActionType
  | SetAppSuccessType;
