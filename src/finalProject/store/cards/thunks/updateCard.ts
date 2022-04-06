import { ActionCreator } from 'redux';

import { cards } from 'finalProject/services/api/cards';
import { UpdateCardDataType } from 'finalProject/services/api/types';
import { fetchingCardsData } from 'finalProject/store/cards/thunks/fetchingCardsData';
import { CardsReducerActionsType } from 'finalProject/store/cards/types';
import { setAppStatusAC } from 'n1-main/m2-bll/a2-reducers/app-reducer';

export const updateCard =
  (packId: string, cardId: string, question: string, answer: string) =>
  async (dispatch: ActionCreator<CardsReducerActionsType>) => {
    dispatch(setAppStatusAC('loading'));
    try {
      const data: UpdateCardDataType = {
        card: {
          _id: cardId,
          answer,
          question,
        },
      };
      await cards.updateCard(data);
      dispatch(fetchingCardsData(packId));
      dispatch(setAppStatusAC('succeeded'));
    } catch (e: any) {
      dispatch(setAppStatusAC('failed'));
    }
  };
