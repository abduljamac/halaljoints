import {configureStore} from '@reduxjs/toolkit';
import getResturants from './Restaurants/Restaurants';
import getNeighbourhoods from './Neighbourhoods/Neighbourhoods';
import getTopRatedRestaurants from './TopRated/TopRated';
import getHMCertfiedRes from './HMCCertified/HMCCertified';

const store = configureStore({
  reducer: {
    restaurants: getResturants,
    neighbourhoods: getNeighbourhoods,
    topRated: getTopRatedRestaurants,
    HMCCertified: getHMCertfiedRes,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
