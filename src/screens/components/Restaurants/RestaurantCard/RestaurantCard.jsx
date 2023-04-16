import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './RestaurantCard.style';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const RestaurantCard = ({ restaurant, isMapView }) => {
  const navigation = useNavigation();

  const containerStyle = isMapView ? styles.mapContainer : styles.card;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={containerStyle}
      onPress={() => {
        navigation.navigate('RestaurantDetails', { details: restaurant });
      }}>
      <Image source={{ uri: restaurant.thumbUrl }} style={styles.cardImage} />

      <View style={styles.category}>
        <Text style={styles.cuisines}>{restaurant.cuisines[0]}</Text>
      </View>

      <View style={styles.content}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text numberOfLines={1} style={styles.title}>
            {restaurant.nickname}
          </Text>
          <AntDesign
            name="star"
            size={15}
            color="lightgrey"
            style={{ paddingLeft: 5 }}
          />
          <Text style={styles.rating}> {restaurant.googleRating}</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View style={styles.locationContainer}>
            <FontAwesome5
              name="location-arrow"
              size={15}
              color="white"
              style={styles.locationIcon}
            />
            <Text style={styles.locationName}>{restaurant.locationName}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
