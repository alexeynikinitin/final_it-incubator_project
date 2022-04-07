import { AxiosResponse } from 'axios';

import { fromMessage, htmlMessage } from 'finalProject/constants';
import { instance } from 'finalProject/services/api/config';
import {
  ResponseType,
  LoginParamsType,
  LogOutResponseType,
  RequestNewPasswordDataType,
  PasswordRecoveryResponseType,
  RequestPasswordRecoveryDataType,
} from 'finalProject/services/api/types';

export const auth = {
  login(data: LoginParamsType) {
    return instance.post<LoginParamsType, AxiosResponse<ResponseType>>(
      'auth/login',
      data,
    );
  },
  logOut() {
    return instance.delete<LogOutResponseType>(`auth/me`);
  },
  me() {
    return instance.post<UserProfileStateType>(`auth/me`);
  },
  setNewPassword(password: string, resetPasswordToken: string) {
    const requestData: RequestNewPasswordDataType = {
      password,
      resetPasswordToken,
    };
    return instance
      .post<PasswordRecoveryResponseType>('auth/set-new-password', requestData)
      .then(res => res.data);
  },
  recovery(email: string) {
    const requestData: RequestPasswordRecoveryDataType = {
      email,
      from: fromMessage,
      message: htmlMessage,
    };
    return instance
      .post<PasswordRecoveryResponseType>('auth/forgot', requestData)
      .then(res => res.data);
  },
};
