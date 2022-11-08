import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import HalalJointsApi from '../../api/HalalJointsApi';
import {INITIAL_STATE} from '../../constants';

export const fetchNeighbourhoods = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    try {
      const response = await HalalJointsApi.get(
        `/neighbourhoods?city=${INITIAL_STATE.city}&sort=-updatedAt&pageSize=8&status=enabled`,
      );
      return response.data.results;
    } catch (error) {
      return error;
    }
  },
);

const initialStateValue = {
  neighbourhoods: {},
  status: 'idle',
};
const getNeighbourhoods = createSlice({
  name: 'neighbourhoods',
  initialState: {value: initialStateValue},
  extraReducers: builder => {
    builder.addCase(fetchNeighbourhoods.pending, state => {
      state.value.status = 'loading';
    });
    builder.addCase(fetchNeighbourhoods.fulfilled, (state, action) => {
      state.value.status = 'succeeded';
      state.value.neighbourhoods = action.payload;
    });
    builder.addCase(fetchNeighbourhoods.rejected, (state, action) => {
      state.value.status = 'failed';
    });
  },
  reducers: {},
});

export default getNeighbourhoods.reducer;
