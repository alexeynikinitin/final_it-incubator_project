import { Dispatch } from 'redux';

import { auth } from 'finalProject/services/api/login';
import { setAppStatus } from 'finalProject/store/app/actions';
import { setIsLoggedIn } from 'finalProject/store/login/actions';
import { LoginActionsType } from 'finalProject/store/login/types';

export const logOut = () => (dispatch: Dispatch<LoginActionsType>) => {
  dispatch(setAppStatus('loading'));
  auth
    .logOut()
    .then(res => {
      dispatch(setIsLoggedIn(false));
      dispatch(setAppStatus('succeeded'));
      dispatch(setAppSuccess(res.statusText));
    })
    .catch(err => {
      dispatch(setAppError(err.response.data.error));
      dispatch(setAppStatus('failed'));
    });
};
