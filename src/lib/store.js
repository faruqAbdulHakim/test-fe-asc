import { configureStore } from '@reduxjs/toolkit';
import { authUserReducer } from './features/authUser/authUserSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      authUser: authUserReducer
    },
  });
};
