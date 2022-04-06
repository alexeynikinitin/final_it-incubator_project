import { CardType } from 'finalProject/store/cards/types/CardType';
import { OwnCardsStateType } from 'finalProject/store/cards/types/OwnCardsStateType';

export type CardsStateType = OwnCardsStateType & {
  cards: CardType[];
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};
