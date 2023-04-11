import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HalalJointsAPI from '../../api/HalalJointsAPI';
import { INITIAL_STATE } from '../../constants';

const initialState = {
  restaurants: {},
  loading: false,
  error: null,
};

export const fetchTopRatedRestaurants = createAsyncThunk(
  'restaurants/fetchTopRatedRestaurants',
  async () => {
    const response = await HalalJointsAPI.get(
      `/restaurants?point=${INITIAL_STATE.longitude},${INITIAL_STATE.latitude}&maxRadius=1000&pageSize=5&sort=-googleRating`,
    );
    return response.data;
  },
);

const getTopRatedRestaurants = createSlice({
  name: 'topRated',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTopRatedRestaurants.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTopRatedRestaurants.fulfilled, (state, action) => {
      state.loading = false;
      state.restaurants = action.payload.results;
    });
    builder.addCase(fetchTopRatedRestaurants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const topRatedRestaurantsSelector = state => state.topRated;

export default getTopRatedRestaurants.reducer;
