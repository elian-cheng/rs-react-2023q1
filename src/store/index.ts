import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import { modalAPI } from './modalAPI';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    [modalAPI.reducerPath]: modalAPI.reducer,
    form: formReducer,
    search: searchReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(modalAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
