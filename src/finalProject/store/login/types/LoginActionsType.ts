import { setIsLoggedIn } from 'finalProject/store/login/actions';
import { SetAppStatusActionType, SetIsInitializedActionType } from 'finalProject/store/app/types';

import { SetAppErrorType, SetAppSuccessType } from 'n1-main/m2-bll/a2-reducers/error-reducer';
import { SetUserProfileDataType } from 'n1-main/m2-bll/a2-reducers/profile-reducer';

export type LoginActionsType =
  | SetUserProfileDataType
  | ReturnType<typeof setIsLoggedIn>
  | SetIsInitializedActionType
  | SetAppErrorType
  | SetAppStatusActionType
  | SetAppSuccessType