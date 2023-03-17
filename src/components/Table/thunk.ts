import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiStock } from './api';
import { IParams, IStock } from './interface';

export const fetchStock = createAsyncThunk('main/stock', async (params:IParams) => {
    const data: IStock[] = await apiStock.fetch(params);
    return data;
});
