import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HalalJointsAPI from '../../api/HalalJointsAPI';
import { INITIAL_STATE } from '../../constants';

const initialState = {
  resturants: {},
  loading: false,
  error: null,
};

export const fetchTopRatedResturants = createAsyncThunk(
  'topRated/topRatedResturants',
  async () => {
    const response = await HalalJointsAPI.get(
      `/restaurants?point=${INITIAL_STATE.longitude},${INITIAL_STATE.latitude}&maxRadius=1000&pageSize=5&sort=-googleRating`,
    );
    return response.data;
  },
);

const getTopRatedResturants = createSlice({
  name: 'topRated',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTopRatedResturants.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTopRatedResturants.fulfilled, (state, action) => {
      state.loading = false;
      state.resturants = action.payload.results;
    });
    builder.addCase(fetchTopRatedResturants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const topRatedRestaurantsSelector = state => state.topRated;

export default getTopRatedResturants.reducer;
