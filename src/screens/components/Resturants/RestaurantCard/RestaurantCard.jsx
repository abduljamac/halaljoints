import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './RestaurantCard.style';
import { BlurView } from 'expo-blur';
import StarRating from '../../StarRating/StarRating';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({ res }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.card}
      onPress={() => {
        navigation.navigate('RestaurantDetails', { details: res });
      }}>
      <Image source={{ uri: res.thumbUrl }} style={styles.cardImage} />

      <View style={styles.category}>
        <Text style={styles.cuisines}>{res.cuisines[0]}</Text>
      </View>

      <BlurView blurType="dark" style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {res.nickname}
        </Text>
        <StarRating rating={res.googleRating} />
      </BlurView>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
