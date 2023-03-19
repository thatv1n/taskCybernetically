import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateItemId, removeLastZero } from '../../utils';
import { IStock, IStocksReducer } from './interface';
import { fetchStock } from './thunk';

const initialState: IStocksReducer = {
  items: [],
  error: null,
  currentPage: 0,
};

const StocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setFormattedList: (state, action: PayloadAction<IStock[]>) => {
      state.items = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStock.fulfilled, (state, { payload }) => {
      state.items = payload.map((item, i) => {
        const currentPageString = state.currentPage.toString();
        let page;
        currentPageString.length <= 2 ?
          page = Number(currentPageString.replace(/0/g, "")) :
          page = Number(removeLastZero(state.currentPage));
        const itemIndex = i + 1;
        item.id = generateItemId(page, itemIndex);
        return item;
      })
    });

    builder.addCase(fetchStock.rejected, (state, { payload }) => {
      if (payload) state.error = `${payload}`;
    });
  },
});

export const { setFormattedList, setCurrentPage } = StocksSlice.actions;

export default StocksSlice.reducer;
