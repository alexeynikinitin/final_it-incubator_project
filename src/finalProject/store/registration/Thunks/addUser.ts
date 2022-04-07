import { Dispatch } from 'redux';

import { registration } from 'finalProject/services/api';
import { setAppError, setAppStatus, setAppSuccess } from 'finalProject/store/app/actions';
import { setIsRegistration } from 'finalProject/store/registration/Actions';

export const addUser = (email: string, password: string) => (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'));
  registration
    .addUser(email, password)
    .then(res => {
      dispatch(setIsRegistration(res.statusText));
      dispatch(setAppSuccess(res.statusText));
      dispatch(setAppError(null));
      dispatch(setAppStatus('succeeded'));
    })
    .catch(error => {
      dispatch(setAppStatus('failed'));
      dispatch(setAppError(error.response.data.error));
    });
};
