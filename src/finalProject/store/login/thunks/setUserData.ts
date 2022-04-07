import { Dispatch } from 'redux';

import { auth } from 'finalProject/services/api/auth';
import { LoginParamsType } from 'finalProject/services/api/types';
import {
  setAppError,
  setAppStatus,
  setAppSuccess,
  setIsInitialized,
} from 'finalProject/store/app/actions';
import { setIsLoggedIn } from 'finalProject/store/login/actions';
import { LoginActionsType } from 'finalProject/store/login/types';
import { setUserProfileData } from 'n1-main/m2-bll/a2-reducers/profile-reducer';

export const setUserData =
  (data: LoginParamsType) => (dispatch: Dispatch<LoginActionsType>) => {
    dispatch(setAppStatus('loading'));
    auth
      .login(data)
      .then(res => {
        dispatch(setIsLoggedIn(true));
        dispatch(setUserProfileData(res.data));
        dispatch(setAppSuccess(res.statusText));
        dispatch(setAppError(null));
        dispatch(setAppStatus('succeeded'));
      })
      .catch(err => {
        dispatch(setAppStatus('failed'));
        dispatch(setAppError(err.response.data.error));
      })
      .finally(() => {
        dispatch(setIsInitialized(true));
        dispatch(setAppStatus('failed'));
      });
  };
