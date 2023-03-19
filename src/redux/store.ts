import { combineReducers, configureStore } from '@reduxjs/toolkit';

import StocksSlice from '../components/Table/slice';


const rootReducer = combineReducers({
  stocks: StocksSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
