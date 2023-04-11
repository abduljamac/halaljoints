import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HalalJointsAPI from '../../api/HalalJointsAPI';
import { INITIAL_STATE } from '../../constants';

const initialState = {
  restaurants: {},
  loading: false,
  error: null,
};

export const fetchHMCRestaurants = createAsyncThunk(
  'restaurants/fetchHmcCertifiedRestaurants',
  async () => {
    const response = await HalalJointsAPI.get(
      `/restaurants?point=${INITIAL_STATE.longitude},${INITIAL_STATE.latitude}&s=hmc`,
    );

    return response.data;
  },
);

const getHMCertfiedRestaurants = createSlice({
  name: 'hmcCertified',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchHMCRestaurants.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchHMCRestaurants.fulfilled, (state, action) => {
      state.loading = false;
      state.restaurants = action.payload.results;
    });
    builder.addCase(fetchHMCRestaurants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const hmcRestaurantsSelector = state => state.hmcCertified;

export default getHMCertfiedRestaurants.reducer;
