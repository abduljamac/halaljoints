import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import HalalJointsApi from '../../api/HalalJointsApi';
import {INITIAL_STATE} from '../../constants';

export const fetchHMCertfiedRes = createAsyncThunk(
  'posts/fetchHMCertfiedRes',
  async () => {
    try {
      const response = await HalalJointsApi.get(
        `/restaurants?point=${INITIAL_STATE.longitude},${INITIAL_STATE.latitude}&s=hmc`,
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
const getHMCertfiedRes = createSlice({
  name: 'HMCertfiedRes',
  initialState: {value: initialStateValue},
  extraReducers: builder => {
    builder.addCase(fetchHMCertfiedRes.pending, state => {
      state.value.status = 'loading';
    });
    builder.addCase(fetchHMCertfiedRes.fulfilled, (state, action) => {
      state.value.status = 'succeeded';
      state.value.resturants = action.payload;
    });
    builder.addCase(fetchHMCertfiedRes.rejected, (state, action) => {
      state.value.status = 'failed';
    });
  },
  reducers: {},
});

export const HMCertfiedSelector = state => state.HMCCertified.value.resturants;

export default getHMCertfiedRes.reducer;
