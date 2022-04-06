import { SetAppStatusActionType } from 'finalProject/store/app/types/SetAppStatusActionType';
import { SetIsInitializedActionType } from 'finalProject/store/app/types/SetIsInitializedActionType';

export type AppActionType = SetAppStatusActionType | SetIsInitializedActionType;
