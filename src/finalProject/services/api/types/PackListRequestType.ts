export type PackListRequestType = {
  min?: number;
  max?: number;
  sortPacks?: string;
  page?: number;
  pageCount?: number;
  user_id?: string | null;
  packName: string;
};
