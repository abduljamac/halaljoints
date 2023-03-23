import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useRef } from 'react';
import styles from './Resturant.style';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import { useSharedValue } from 'react-native-reanimated';

const Resturants = ({ items, title }) => {
  if (items.loading) return null;

  const viewableItems = useSharedValue([]);
  const handleViewableItemsChanged = useRef(({ changed }) => {
    // console.log('Changed in this iteration', changed[0]);
    viewableItems.value = changed[0].isViewable;
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items.resturants}
        initialNumToRender={5}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        renderItem={({ item, index }) => (
          <RestaurantCard
            res={item}
            key={index}
            viewableItems={viewableItems}
          />
        )}
        keyExtractor={item => item.googlePlaceId}
      />
    </View>
  );
};

export default Resturants;
