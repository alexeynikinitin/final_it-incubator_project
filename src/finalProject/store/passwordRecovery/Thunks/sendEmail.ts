import { Dispatch } from 'redux';

import { auth } from 'finalProject/services/api';
import { setAppError, setAppStatus, setAppSuccess } from 'finalProject/store/app/actions';
import { setIsEmailSend } from 'finalProject/store/passwordRecovery/Actions';
import { PasswordRecoveryActionType } from 'finalProject/store/passwordRecovery/Types';

export const sendEmail =
  (email: string) => async (dispatch: Dispatch<PasswordRecoveryActionType>) => {
    dispatch(setAppStatus('loading'));
    try {
      const res = await auth.recovery(email);
      dispatch(setIsEmailSend(true, email));
      dispatch(setAppSuccess(res.info));
      dispatch(setAppStatus('succeeded'));
    } catch (e: any) {
      dispatch(setAppError(e.response.data.error));
      dispatch(setAppStatus('failed'));
    }
  };
