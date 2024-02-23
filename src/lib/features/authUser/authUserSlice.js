import { createSlice } from '@reduxjs/toolkit';

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState: {
    value: null,
  },
  reducers: {
    login: (state) => {
      const user = { name: 'Faruq' };

      state.value = user;
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

export const authUserActions = authUserSlice.actions;
export const authUserReducer = authUserSlice.reducer;

export default authUserSlice;
