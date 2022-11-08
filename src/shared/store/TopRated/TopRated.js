import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import HalalJointsApi from '../../api/HalalJointsApi';
import {INITIAL_STATE} from '../../constants';

export const fetchTopRatedRestaurants = createAsyncThunk(
  'posts/fetchTopRatedRestaurants',
  async () => {
    try {
      const response = await HalalJointsApi.get(
        `/restaurants?point=${INITIAL_STATE.longitude},${INITIAL_STATE.latitude}&maxRadius=1000&pageSize=5&sort=-googleRating`,
      );
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
);

const initialStateValue = {
  resturants: {},
  status: 'idle',
};
const getTopRatedRestaurants = createSlice({
  name: 'topRated',
  initialState: {value: initialStateValue},
  extraReducers: builder => {
    builder.addCase(fetchTopRatedRestaurants.pending, state => {
      state.value.status = 'loading';
    });
    builder.addCase(fetchTopRatedRestaurants.fulfilled, (state, action) => {
      state.value.status = 'succeeded';
      state.value.resturants = action.payload;
    });
    builder.addCase(fetchTopRatedRestaurants.rejected, (state, action) => {
      state.value.status = 'failed';
    });
  },
  reducers: {},
});

export const topRatedSelector = state => state.topRated.value.resturants;

export default getTopRatedRestaurants.reducer;
