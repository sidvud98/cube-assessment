import { createSlice } from '@reduxjs/toolkit';


const imgSlice = createSlice({
  name: 'images',
  initialState: { urls: [], okay: 1 },
  reducers: {
    addUrls(state, action) {
      state.urls = action.payload.data.results.map(x => ({ img: x.urls.thumb, hash: x.blur_hash }))
    },
  },
});

export const imgActions = imgSlice.actions;

export default imgSlice.reducer;















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