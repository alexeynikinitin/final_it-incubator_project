import { AxiosResponse } from 'axios';

import { instance } from 'finalProject/services/api/config';
import {
  LoginParamsType,
  LogOutResponseType,
  ResponseType,
} from 'finalProject/services/api/types';
import { UserProfileStateType } from 'n1-main/m2-bll/a2-reducers/profile-reducer';

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
};
