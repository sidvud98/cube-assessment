import { configureStore } from '@reduxjs/toolkit';

import cards from './cards';
import images from './images';

const store = configureStore({
  reducer: { cards, images },
});

export default store;