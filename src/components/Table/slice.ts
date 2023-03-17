import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStock, IStocksReducer } from './interface';
import { fetchStock } from './thunk';


const initialState: IStocksReducer = {
    items: [],
    isLoading: false,
    error: null,
};

const StocksSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
     setFormattedList:(state, action: PayloadAction<IStock[]>) => {
      state.items = action.payload;
  },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStock.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchStock.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.items = payload;
        });

        builder.addCase(fetchStock.rejected,
            (state, {payload}) => {
                state.isLoading = false;
                if (payload) state.error = `${payload}`;
            });
    },
});

export const {setFormattedList } = StocksSlice.actions

export default StocksSlice.reducer;
