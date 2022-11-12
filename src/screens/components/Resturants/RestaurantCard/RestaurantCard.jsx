import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './RestaurantCard.style';
import {BlurView} from '@react-native-community/blur';
import StarRating from '../../StarRating/StarRating';
import {useNavigation} from '@react-navigation/native';

const RestaurantCard = res => {
  // const isOpen = res.item.googlePlaceDetail.opening_hours.open_now;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.card}
      onPress={() => {
        navigation.navigate('RestaurantDetails', {details: res});
      }}>
      <Image source={{uri: res.item.thumbUrl}} style={styles.cardImage} />

      <View style={styles.category}>
        <Text style={styles.cuisines}>{res.item.cuisines[0]}</Text>
      </View>

      <BlurView blurType="dark" style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {res.item.nickname}
        </Text>
        <Text numberOfLines={1} style={styles.description}>
          {res.item.description}
        </Text>
        <StarRating rating={res.item.googleRating} />
      </BlurView>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
