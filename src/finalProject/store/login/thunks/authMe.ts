import { Dispatch } from 'redux';

import { auth } from 'finalProject/services/api/auth';
import {
  setAppStatus,
  setAppSuccess,
  setIsInitialized,
} from 'finalProject/store/app/actions';
import { setIsLoggedIn } from 'finalProject/store/login/actions';
import { LoginActionsType } from 'finalProject/store/login/types';
import { setUserProfileData } from 'n1-main/m2-bll/a2-reducers/profile-reducer';

export const authMe = () => (dispatch: Dispatch<LoginActionsType>) => {
  dispatch(setAppStatus('loading'));
  auth
    .me()
    .then(res => {
      dispatch(setIsLoggedIn(true));
      dispatch(setUserProfileData(res.data));
      dispatch(setAppStatus('succeeded'));
      dispatch(setAppSuccess(res.statusText));
    })
    .catch(() => {
      // dispatch(setAppErrorAC(err.response.data.error))
      dispatch(setAppStatus('failed'));
    })
    .finally(() => {
      dispatch(setIsInitialized(true));
    });
};
