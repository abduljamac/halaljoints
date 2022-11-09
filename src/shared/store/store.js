import {configureStore} from '@reduxjs/toolkit';
import getResturants from './Restaurants/Restaurants';
import getNeighbourhoods from './Neighbourhoods/Neighbourhoods';
import getTopRatedRestaurants from './TopRated/TopRated';
import getHMCertfiedRes from './HMCCertified/HMCCertified';
import {INITIAL_STATE} from '../constants';

const store = configureStore({
  reducer: {
    initialState: INITIAL_STATE,
    restaurants: getResturants,
    neighbourhoods: getNeighbourhoods,
    topRated: getTopRatedRestaurants,
    HMCCertified: getHMCertfiedRes,
  },
});

export default store;
