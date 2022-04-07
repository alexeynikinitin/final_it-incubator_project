import {
  SetAppErrorType,
  SetAppStatusActionType,
  SetAppSuccessType,
} from 'finalProject/store/app/types';
import { setIsSetNewPassword } from 'finalProject/store/newPassword/Actions';
import { setIsLoadingAC } from 'n1-main/m2-bll/a2-reducers/password-recovery-reducer';

export type NewPasswordActionType =
  | ReturnType<typeof setIsSetNewPassword>
  | ReturnType<typeof setIsLoadingAC>
  | SetAppErrorType
  | SetAppStatusActionType
  | SetAppSuccessType;
