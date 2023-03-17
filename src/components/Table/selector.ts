import { RootState } from "../../redux/store";


export const stocksSelector = (state:RootState) => state.stocks.items
export const isLoadingSelector = (state:RootState) => state.stocks.isLoading