import { configureStore } from '@reduxjs/toolkit';
import getNearbyRestaurants from './NearbyRestaurants/nearbyRestaurants';
import getTopRatedRestaurants from './TopRated/topRated';
import getHMCertfiedRestaurants from './HMCCertified/hmcCertified';
import getUserLocation from './UserLocation/userLocation';

const store = configureStore({
  reducer: {
    nearbyResturants: getNearbyRestaurants,
    topRated: getTopRatedRestaurants,
    hmcCertified: getHMCertfiedRestaurants,
    userLocation: getUserLocation,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
