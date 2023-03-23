import { configureStore } from '@reduxjs/toolkit';
import getNearbyResturants from './NearbyRestaurants/NearbyRestaurants';
import getTopRatedResturants from './TopRated/TopRated';
import getHMCertfiedRes from './HMCCertified/HMCCertified';

const store = configureStore({
  reducer: {
    nearbyResturants: getNearbyResturants,
    topRated: getTopRatedResturants,
    hmcCertified: getHMCertfiedRes,
    nearby: getNearbyResturants,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
