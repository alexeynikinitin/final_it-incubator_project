export const setSearchCardQuestion = (cardQuestion: string) =>
  ({
    type: 'SET-SEARCH_CARD_QUESTION',
    payload: { cardQuestion },
  } as const);
