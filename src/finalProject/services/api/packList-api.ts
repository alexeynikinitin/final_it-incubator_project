import {instance} from "./a1-instance-api";
import {PackListStateType} from "../m2-bll/a2-reducers/pack-list-reducer";
import {TNullable} from "../m2-bll/a2-reducers/profile-reducer";

export const packListAPI = {
    getPacks(data: packListRequestType) {
        return instance.get<PackListStateType>('cards/pack', {
            params: data
        })
    },

    addNewPack(data: AddPackListRequestType) {
        return instance.post(`cards/pack`,{...data})
    },

    updatePackName(data: UpdatePackListNameRequestType) {
        return instance.put(`cards/pack`, {...data})
    },

    deletePack(packId: string) {
        return instance.delete(`cards/pack?id=${packId}`)
    }
}

export type  packListRequestType = {
    min?: number,
    max?: number,
    sortPacks?: string,
    page?: number,
    pageCount?: number,
    user_id?: string | null
    packName: string,
}

export type AddPackListRequestType = {
    cardsPack: {
        name?: string
        deckCover?: string
        private?: boolean
    }
}

export type UpdatePackListNameRequestType = {
    cardsPack: {
        _id: TNullable<string>
        name?: string
    }
}