import { instance } from 'finalProject/services/api/config';
import { AddUserResponseType } from 'finalProject/services/api/types';

export const registration = {
  addUser(email: string, password: string) {
    return instance.post<AddUserResponseType>(`/auth/register`, {
      email,
      password,
    });
  },
};
