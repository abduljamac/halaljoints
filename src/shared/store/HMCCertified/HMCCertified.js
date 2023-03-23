import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import HalalJointsAPI from '../../api/HalalJointsAPI';
import { INITIAL_STATE } from '../../constants';

const initialState = {
  resturants: {},
  loading: false,
  error: null,
};

export const fetchHMCResturants = createAsyncThunk(
  'resturants/fetchHmcCertifiedResturants',
  async () => {
    const response = await HalalJointsAPI.get(
      `/restaurants?point=${INITIAL_STATE.longitude},${INITIAL_STATE.latitude}&s=hmc`,
    );

    return response.data;
  },
);

const getHMCertfiedResturants = createSlice({
  name: 'hmcCertified',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchHMCResturants.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchHMCResturants.fulfilled, (state, action) => {
      state.loading = false;
      state.resturants = action.payload.results;
    });
    builder.addCase(fetchHMCResturants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const hmcRestaurantsSelector = state => state.hmcCertified;

export default getHMCertfiedResturants.reducer;
