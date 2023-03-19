export interface IStock {
  id: string
  key: string;
  entityName: string;
  EntityAddressCityOrTown: string;
  OperatingIncomeLoss: number;
  AssetsCurrent: number;
  NetIncomeLoss: number;
  Assets: number;
}

export interface IStocksReducer {
  items: IStock[],
  error: string | null,
  currentPage: number
}

export interface IParams {
  offset: number
}