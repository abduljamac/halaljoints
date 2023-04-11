import { View, Text } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from './Explore.style';

const Explore = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.513561,
          longitude: -0.137706,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}>
        <Marker
          coordinate={{ latitude: 51.513561, longitude: -0.137706 }}
          image={require('../../shared/assets/map-marker.png')}
        />
      </MapView>
    </View>
  );
};

export default Explore;
