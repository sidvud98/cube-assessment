import { createSlice } from '@reduxjs/toolkit';





const cardsSlice = createSlice({
  name: 'cards',
  initialState: { users: [] },
  reducers: {
    add(state, action) {
      state = [...new Set([...state.users, ...action])]
    },
  },
});

export const cardsActions = cardsSlice.actions;

export default cardsSlice.reducer;