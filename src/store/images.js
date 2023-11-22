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