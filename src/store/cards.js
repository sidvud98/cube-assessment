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













/*
  COPYRIGHT NOTICE:

  This project and its contents are confidential and proprietary to Sai Siddharth Vudikavalasa. 
  They are intended solely for the use of the individual or entity to whom they are addressed.
  All rights reserved. Unauthorized use or distribution, in whole or in part, is prohibited. 
  Use of this project for commercial purposes is not permitted without prior consent from the author.

  Sai Siddharth Vudikavalasa
  22nd November 2023
  sidvud98@gmail.com
*/