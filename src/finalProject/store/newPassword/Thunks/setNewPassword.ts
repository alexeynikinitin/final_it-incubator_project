import { Dispatch } from 'redux';
import { auth } from 'finalProject/services/api/login';
import { setAppError, setAppStatus, setAppSuccess } from 'finalProject/store/app/actions';
import { setIsSetNewPassword } from 'finalProject/store/newPassword/Actions';
import { NewPasswordActionType } from 'finalProject/store/newPassword/Types';



export const setNewPassword =
  (password: string, token: string) =>
  async (dispatch: Dispatch<NewPasswordActionType>) => {
    dispatch(setAppStatus('loading'));
    try {
      dispatch(setIsLoading(true));
      const res = await auth.(password, token);
      dispatch(setIsSetNewPassword(true));
      dispatch(setAppSuccess(res.info));
      dispatch(setAppStatus('succeeded'));
    } catch (e: any) {
      dispatch(setAppError(e.response.data.error));
      dispatch(setAppStatus('failed'));
    }
  };
