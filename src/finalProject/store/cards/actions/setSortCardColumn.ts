export const setSortCardColumn = (sort: string) =>
  ({
    type: 'SET-SORT_CARD_COLUMN',
    payload: { sort },
  } as const);
