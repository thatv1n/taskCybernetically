import { RootState } from "../../redux/store";

export const stocksSelector = (state: RootState) => state.stocks.items
export const currentPageSelector = (state: RootState) => state.stocks.currentPage