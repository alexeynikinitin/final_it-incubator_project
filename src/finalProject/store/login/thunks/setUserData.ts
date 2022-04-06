import { Dispatch } from 'redux';

import { auth } from 'finalProject/services/api/login';
import { LoginParamsType } from 'finalProject/services/api/types';
import { setAppStatus, setIsInitialized } from 'finalProject/store/app/actions';
import { setIsLoggedIn } from 'finalProject/store/login/actions';
import { LoginActionsType } from 'finalProject/store/login/types';
import { setAppErrorAC } from 'n1-main/m2-bll/a2-reducers/error-reducer';
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
        dispatch(setAppErrorAC(null));
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
