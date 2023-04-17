import axios from 'axios';
import { GOOGLE_MAPS_API_KEY } from '@env';

const GOOGLE_MAPS_API = 'https://maps.googleapis.com/maps/api/geocode/json';

export const getLatLngFromLocation = async location => {
  const response = await axios.get(GOOGLE_MAPS_API, {
    params: {
      address: location,
      key: GOOGLE_MAPS_API_KEY,
    },
  });

  const geoLocation = response.data.results[0].geometry.location;

  return geoLocation;
};
