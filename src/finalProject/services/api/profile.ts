import { instance } from 'finalProject/services/api/config';
import { UpdateUserResponseType } from 'finalProject/services/api/types';

export const profile = {
  updateUserData(name: string, avatar: string) {
    return instance.put<UpdateUserResponseType>(`auth/me`, {
      name,
      avatar,
    });
  },
};
