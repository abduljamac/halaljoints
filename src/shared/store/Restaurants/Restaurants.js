import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import HalalJointsApi from '../../api/HalalJointsApi';
import {INITIAL_STATE} from '../../constants';

export const fetchResturants = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    try {
      const response = await HalalJointsApi.get(
        `/restaurants?point=${INITIAL_STATE.longitude},${INITIAL_STATE.latitude}&maxRadius=1000&pageSize=5`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const initialStateValue = {
  resturants: {},
  status: 'idle',
};
const getResturants = createSlice({
  name: 'resturants',
  initialState: {value: initialStateValue},
  extraReducers: builder => {
    builder.addCase(fetchResturants.pending, state => {
      state.value.status = 'loading';
    });
    builder.addCase(fetchResturants.fulfilled, (state, action) => {
      state.value.status = 'succeeded';
      state.value.resturants = action.payload;
    });
    builder.addCase(fetchResturants.rejected, (state, action) => {
      state.value.status = 'failed';
    });
  },
  reducers: {},
});

export const restaurantsSelector = state => state.restaurants.value.resturants;

export default getResturants.reducer;
