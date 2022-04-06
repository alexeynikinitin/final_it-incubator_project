import { CardsStateType } from 'finalProject/store/cards/types';

export const setCardsData = (data: CardsStateType) =>
  ({
    type: 'SET-CARDS-DATA',
    payload: { ...data },
  } as const);
