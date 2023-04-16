import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latitude: 51.5138871,
  longitude: -0.1281155,
};

const getUserLocation = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {},
});

export const userLocationSelector = state => state.userLocation;

export default getUserLocation.reducer;
