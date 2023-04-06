import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import styles from './Resturant.style';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import Animated, { FadeInLeft } from 'react-native-reanimated';

const Restaurants = ({ items, title, showAll }) => {
  if (items.loading) return null;

  return (
    <Animated.View style={styles.container} entering={FadeInLeft.delay(300)}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {showAll && (
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show all</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items.restaurants}
        initialNumToRender={5}
        renderItem={({ item, index }) => (
          <RestaurantCard res={item} key={index} />
        )}
        keyExtractor={item => item.googlePlaceId}
      />
    </Animated.View>
  );
};

export default Restaurants;
