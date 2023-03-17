export interface IItemTable{
  key:string,
  entityName:string,
  EntityAddressCityOrTown:string
  AssetsCurrent:number
  NetIncomeLoss:number
  OperatingIncomeLoss:number

}

export interface ITest{
  i:number,
  item:IItemTable
}