import { instance } from 'finalProject/services/api/config';
import {
  AddPackListRequestType,
  PackListRequestType,
  UpdatePackListNameRequestType,
} from 'finalProject/services/api/types';
import { PackListStateType } from 'n1-main/m2-bll/a2-reducers/pack-list-reducer';

export const packList = {
  getPacks(data: PackListRequestType) {
    return instance.get<PackListStateType>('cards/pack', {
      params: data,
    });
  },

  addNewPack(data: AddPackListRequestType) {
    return instance.post(`cards/pack`, { ...data });
  },

  updatePackName(data: UpdatePackListNameRequestType) {
    return instance.put(`cards/pack`, { ...data });
  },

  deletePack(packId: string) {
    return instance.delete(`cards/pack?id=${packId}`);
  },
};
