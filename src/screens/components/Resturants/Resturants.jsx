import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './Resturant.style';
import RestaurantCard from './RestaurantCard/RestaurantCard';

const Resturants = ({items, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={items}
        initialNumToRender={5}
        renderItem={({item, index}) => (
          <RestaurantCard item={item} key={index} />
        )}
        keyExtractor={item => item.googlePlaceId}
      />
    </View>
  );
};

export default Resturants;
