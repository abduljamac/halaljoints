import { configureStore } from '@reduxjs/toolkit';
import getResturants from './Restaurants/Restaurants';

const store = configureStore({
  reducer: {
    restaurants: getResturants,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
