import {ProfileActionsType, profileReducer} from "./profile/profile-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import { combineReducers,  createStore, applyMiddleware } from 'redux';
const reducers = combineReducers({
   profile: profileReducer
})

export const store = createStore(
   reducers,
   applyMiddleware(thunk),
)

export type AppStoreType = ReturnType<typeof reducers>
export type AppActionCreatorsType = ProfileActionsType
export type ThunkType = ThunkAction<Promise<void>, AppStoreType, unknown, AppActionCreatorsType>
export type ThunkDispatchType = ThunkDispatch<AppStoreType, unknown, AppActionCreatorsType>;

// @ts-ignore
window.store = store