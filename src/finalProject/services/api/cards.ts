import { instance } from 'finalProject/services/api/config';
import { CreateCardDataType, UpdateCardDataType } from 'finalProject/services/api/types';
import { CardsStateType } from 'finalProject/store/cards/types';

export const cards = {
  getCardsByPackId(
    packId: string,
    sortCards: string,
    page: number,
    pageCount: number,
    cardQuestion: string,
  ) {
    return instance
      .get<CardsStateType>(
        `cards/card?&cardsPack_id=${packId}&sortCards=${sortCards}&page=${page}&pageCount=${pageCount}&cardQuestion=${cardQuestion}`,
      )
      .then(res => res.data);
  },
  updateCard(data: UpdateCardDataType) {
    return instance.put(`cards/card`, { ...data }).then(res => res.data);
  },
  addCard(data: CreateCardDataType) {
    return instance.post(`cards/card`, { ...data }).then(res => res.data);
  },
};
