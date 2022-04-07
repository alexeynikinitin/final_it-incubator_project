import {
  SetAppErrorType,
  SetAppStatusActionType,
  SetAppSuccessType,
} from 'finalProject/store/app/types';
import {
  setCardsData,
  setCountItemsOnPage,
  setCurrentPage,
  setSearchCardQuestion,
  setSortCardColumn,
} from 'finalProject/store/cards/actions';

export type CardsReducerActionsType =
  | ReturnType<typeof setCardsData>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setCountItemsOnPage>
  | ReturnType<typeof setSearchCardQuestion>
  | ReturnType<typeof setSortCardColumn>
  | SetAppErrorType
  | SetAppStatusActionType
  | SetAppSuccessType;
