import { createSlice } from '@reduxjs/toolkit';





const cardsSlice = createSlice({
  name: 'cards',
  initialState: { users: [], activeId: 1, activeUser: undefined },
  reducers: {
    add(state, action) {
      state.users = Array.from(
        new Set([...state.users, ...action.payload].map(JSON.stringify))
      ).map(JSON.parse)
      state.activeUser = state.users[state.activeId]
    },
    changeActiveId(state, action) {
      state.activeId = action.payload
      state.activeUser = state.users[state.activeId]
    },
  },
});

export const cardsActions = cardsSlice.actions;

export default cardsSlice.reducer;