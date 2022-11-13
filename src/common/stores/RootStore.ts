import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from '@stores/counter/CounterSlice';

export const rootReducer = combineReducers({
  counter: counterSlice,
});

const rootStore = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware()
  //         .concat(LoadingMiddleware)
});

export default rootStore;
