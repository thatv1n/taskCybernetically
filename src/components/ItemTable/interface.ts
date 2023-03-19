export interface IItemTable {
  id: string
  key: string,
  AssetsCurrent: string,
  IncomeTaxExpenseBenefit: string
  NetIncomeLoss: number
  OperatingIncomeLoss: number

}

export interface ITest {
  index: number,
  item: IItemTable
}