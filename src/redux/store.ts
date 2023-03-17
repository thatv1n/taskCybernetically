import { combineReducers, configureStore } from '@reduxjs/toolkit';

import StocksSlice from '../components/Table/slice';


const store = combineReducers({
  stocks:StocksSlice
});

const data = configureStore({
  reducer: store,
});

export type RootState = ReturnType<typeof data.getState>;
export type AppDispatch = typeof data.dispatch;
export default data;
