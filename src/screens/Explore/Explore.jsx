import { View, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from './Explore.style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../shared/theme';
import Restaurants from '../Components/Restaurants/Restaurants';
import {
  fetchNearbyRestaurants,
  nearbyRestaurantsSelector,
} from '../../shared/store/NearbyRestaurants/nearbyRestaurants';

import { userLocationSelector } from '../../shared/store/UserLocation/userLocation';

const Explore = () => {
  const navigation = useNavigation();

  // get location from redux store
  const location = useSelector(userLocationSelector);

  const [region, setRegion] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.08,
    longitudeDelta: 0.05,
  });

  const nearbyRestaurants = useSelector(nearbyRestaurantsSelector);

  useEffect(() => {
    // Only update the region if there are restaurants
    if (nearbyRestaurants?.restaurants?.length > 0) {
      // Find the min and max latitude and longitude values
      const minLat = Math.min(
        ...nearbyRestaurants.restaurants.map(restaurant => restaurant.latitude),
      );
      const maxLat = Math.max(
        ...nearbyRestaurants.restaurants.map(restaurant => restaurant.latitude),
      );
      const minLng = Math.min(
        ...nearbyRestaurants.restaurants.map(
          restaurant => restaurant.longitude,
        ),
      );
      const maxLng = Math.max(
        ...nearbyRestaurants.restaurants.map(
          restaurant => restaurant.longitude,
        ),
      );

      // Update the map's region
      setRegion({
        latitude: (minLat + maxLat) / 2,
        longitude: (minLng + maxLng) / 2,
        latitudeDelta: Math.abs(maxLat - minLat) + 0.01,
        longitudeDelta: Math.abs(maxLng - minLng) + 0.01,
      });
    }
  }, [nearbyRestaurants]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {nearbyRestaurants?.restaurants?.map((restaurant, i) => (
          <Marker
            key={i}
            coordinate={{
              latitude: restaurant.latitude,
              longitude: restaurant.longitude,
            }}
            title={restaurant.name}
            description={restaurant.address}
            image={require('../../shared/assets/map-marker.png')}
          />
        ))}
      </MapView>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconButton}>
          <Ionicons
            name="arrow-back"
            size={theme.spacing.large}
            color={theme.colours.primaryColor}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterIcon}>
          <Ionicons
            name="filter"
            size={theme.spacing.large}
            color={theme.colours.primaryColor}
          />
        </TouchableOpacity>
      </View>

      {nearbyRestaurants?.restaurants?.length ? (
        <Restaurants
          items={nearbyRestaurants}
          title={'Suggested Restaurants'}
          isMapView={true}
        />
      ) : (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noRes}>No results found</Text>
        </View>
      )}
    </View>
  );
};

export default Explore;
