export interface IStock {
  id: string
  key: string;
  AssetsCurrent: string;
  IncomeTaxExpenseBenefit: string;
  OperatingIncomeLoss: number;
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