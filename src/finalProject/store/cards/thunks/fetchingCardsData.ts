import { ActionCreator } from 'redux';

import { cards } from 'finalProject/services/api/cards';
import { setCardsData } from 'finalProject/store/cards/actions';
import { CardsReducerActionsType, CardsStateType } from 'finalProject/store/cards/types';
import { AppRootStateType } from 'finalProject/store/store';
import { setAppStatusAC } from 'n1-main/m2-bll/a2-reducers/app-reducer';

export const fetchingCardsData =
  (packId: string) =>
  async (
    dispatch: ActionCreator<CardsReducerActionsType>,
    getState: () => AppRootStateType,
  ) => {
    const { page, pageCount, sort, cardQuestion } = getState().cards;
    dispatch(setAppStatusAC('loading'));
    try {
      const data: CardsStateType = await cards.getCardsByPackId(
        packId,
        sort,
        page,
        pageCount,
        cardQuestion,
      );
      dispatch(setCardsData(data));
      dispatch(setAppStatusAC('succeeded'));
    } catch (e: any) {
      dispatch(setAppStatusAC('failed'));
    }
  };
