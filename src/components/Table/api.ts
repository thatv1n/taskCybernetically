import instance from "../../api/instance";
import { IParams } from "./interface";

export const apiStock = {

  async fetch(params: IParams) {
    try {
      const { data } = await instance.get(
        `/stable/time-series/REPORTED_FINANCIALS?filter=key,AssetsCurrent,IncomeTaxExpenseBenefit,InvestmentIncomeInterestAndDividend,OperatingIncomeLoss,NetIncomeLoss,Asset&sort=asc&token=${process.env.REACT_APP_API_KEY}&limit=10&offset=${params.offset}`,
      );
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error('Unknown error occurred.');
      }
    }
  },
};
