import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latitude: 51.5138871,
  longitude: -0.1281155,
};

const getUserLocation = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {
    setUserLocation: (state, action) => {
      state.latitude = action.payload.lat;
      state.longitude = action.payload.lng;
    },
  },
});

export const userLocationSelector = state => state.userLocation;

export const { setUserLocation } = getUserLocation.actions;

export default getUserLocation.reducer;
