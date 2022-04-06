import { CardsReducerActionsType, CardsStateType } from 'finalProject/store/cards/types';

const initialState: CardsStateType = {
  page: 1,
  sort: '',
  cards: [],
  maxGrade: 0,
  minGrade: 0,
  pageCount: 5,
  packUserId: '',
  cardQuestion: '',
  cardsTotalCount: 0,
};

export const cardsReducer = (
  state: CardsStateType = initialState,
  action: CardsReducerActionsType,
): CardsStateType => {
  switch (action.type) {
    case 'SET-CARDS-DATA':
    case 'SET-CURRENT-PAGE':
    case 'SET-SORT_CARD_COLUMN':
    case 'SET-COUNT-ITEMS-ON-PAGE':
    case 'SET-SEARCH_CARD_QUESTION':
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return state;
    }
  }
};
