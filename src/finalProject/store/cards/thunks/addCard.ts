import { ActionCreator } from 'redux';

import { cards } from 'finalProject/services/api/cards';
import { CreateCardDataType } from 'finalProject/services/api/types';
import { fetchingCardsData } from 'finalProject/store/cards/thunks/fetchingCardsData';
import { CardsReducerActionsType } from 'finalProject/store/cards/types';
import { setAppStatusAC } from 'finalProject/store/app/app-reducer';

export const addCard =
  (cardsPackId: string, question: string, answer: string) =>
  async (dispatch: ActionCreator<CardsReducerActionsType>) => {
    dispatch(setAppStatusAC('loading'));
    try {
      const data: CreateCardDataType = {
        card: {
          cardsPackId,
          answer,
          question,
        },
      };
      await cards.addCard(data);
      dispatch(fetchingCardsData(cardsPackId));
      dispatch(setAppStatusAC('succeeded'));
    } catch (e: any) {
      dispatch(setAppStatusAC('failed'));
    }
  };
