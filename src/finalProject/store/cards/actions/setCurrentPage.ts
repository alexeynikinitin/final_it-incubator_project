export const setCurrentPage = (currentPage: number) =>
  ({
    type: 'SET-CURRENT-PAGE',
    payload: { page: currentPage },
  } as const);
