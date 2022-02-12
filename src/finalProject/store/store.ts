import {combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profile/profile-reducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const reducers = combineReducers({
   profile: profileReducer
})

export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>
export type AppActionCreatorsType = ProfileActionsType
export type ThunkType = ThunkAction<Promise<void>, AppStoreType, unknown, AppActionCreatorsType>
export type ThunkDispatchType = ThunkDispatch<AppStoreType, unknown, AppActionCreatorsType>;

// @ts-ignore
window.store = store