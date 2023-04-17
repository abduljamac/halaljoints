import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './Header.style';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
// import navigation from react navigation
import { useNavigation } from '@react-navigation/native';

import { setUserLocation } from '../../../shared/store/UserLocation/userLocation';
import { getLatLngFromLocation } from '../../../shared/utils/getLatLngFromLocation';
import { fetchNearbyRestaurants } from '../../../shared/store/NearbyRestaurants/nearbyRestaurants';

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [input, setInput] = useState('');

  const handleSearch = async () => {
    try {
      const location = await getLatLngFromLocation(input);
      dispatch(setUserLocation(location));
      dispatch(fetchNearbyRestaurants());
      navigation.navigate('ExploreTab');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText2}>
          Find Halal food. <Text style={styles.insideText}> Fast! </Text>
        </Text>
      </View>

      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Location"
            style={styles.textInput}
            onChangeText={setInput}
            value={input}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
