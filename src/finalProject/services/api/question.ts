import { instance } from 'finalProject/services/api/config';
import { CardsStateType } from 'finalProject/store/cards/types';

export const question = {
  getCards(packID: string | undefined, pageCount: number) {
    return instance.get<CardsStateType>(
      `cards/card?&cardsPack_id=${packID}&pageCount=${pageCount}`,
    );
  },
  updateCardsGrade(updatedGrade: Partial<GetCardsGrade>) {
    return instance.put('cards/grade', updatedGrade);
  },
};
