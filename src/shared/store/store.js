import { configureStore } from '@reduxjs/toolkit';
import getNearbyRestaurants from './NearbyRestaurants/NearbyRestaurants';
import getTopRatedRestaurants from './TopRated/TopRated';
import getHMCertfiedRestaurants from './HMCCertified/HMCCertified';

const store = configureStore({
  reducer: {
    nearbyResturants: getNearbyRestaurants,
    topRated: getTopRatedRestaurants,
    hmcCertified: getHMCertfiedRestaurants,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
