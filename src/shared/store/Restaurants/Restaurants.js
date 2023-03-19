import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HalalJointsAPI from '../../api/HalalJointsAPI';
import { INITIAL_STATE } from '../../constants';

const initialState = {
  resturants: {},
  loading: false,
  error: null,
};

export const fetchResturants = createAsyncThunk(
  'resturants/fetchResturants',
  async () => {
    const response = await HalalJointsAPI.get(
      `/restaurants?point=${INITIAL_STATE.longitude},${INITIAL_STATE.latitude}&maxRadius=1000&pageSize=5`,
    );
    return response.data;
  },
);

const getResturants = createSlice({
  name: 'resturants',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchResturants.pending, (state, action) => {
      console.log(state);
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchResturants.fulfilled, (state, action) => {
      state.loading = false;
      state.resturants = action.payload.results;
    });
    builder.addCase(fetchResturants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const restaurantsSelector = state => state.resturants;

export default getResturants.reducer;
