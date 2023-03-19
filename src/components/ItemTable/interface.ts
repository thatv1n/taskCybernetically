export interface IItemTable {
  id: string
  key: string,
  entityName: string,
  EntityAddressCityOrTown: string
  AssetsCurrent: number
  NetIncomeLoss: number
  OperatingIncomeLoss: number

}

export interface ITest {
  index: number,
  item: IItemTable
}