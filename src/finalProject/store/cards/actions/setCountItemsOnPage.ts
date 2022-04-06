export const setCountItemsOnPage = (countItemsOnPage: number) =>
  ({
    type: 'SET-COUNT-ITEMS-ON-PAGE',
    payload: { pageCount: countItemsOnPage },
  } as const);
