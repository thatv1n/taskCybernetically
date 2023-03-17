export interface  IStock {
  key: string;
  entityName: string;
  EntityAddressCityOrTown: string;
  OperatingIncomeLoss: number;
  AssetsCurrent: number;
  NetIncomeLoss: number;
  Assets: number;
}

export interface IStocksReducer{
  items: IStock[] ,
  isLoading: boolean,
  error: string | null,
}

export interface IParams{
  limit: number, offset: number
}