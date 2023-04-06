import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HalalJointsAPI from '../../api/HalalJointsAPI';
import { INITIAL_STATE } from '../../constants';

const initialState = {
  restaurants: {},
  loading: false,
  error: null,
};

export const fetchNearbyResturants = createAsyncThunk(
  'restaurants/fetchNearbyResturants',
  async () => {
    const response = await HalalJointsAPI.get(
      `/restaurants?point=${INITIAL_STATE.longitude},${INITIAL_STATE.latitude}&maxRadius=1000&pageSize=5`,
    );
    return response.data;
  },
);

const getNearbyResturants = createSlice({
  name: 'nearbyResturants',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNearbyResturants.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchNearbyResturants.fulfilled, (state, action) => {
      state.loading = false;
      state.restaurants = action.payload.results;
    });
    builder.addCase(fetchNearbyResturants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const nearbyRestaurantsSelector = state => state.nearbyResturants;

export default getNearbyResturants.reducer;
