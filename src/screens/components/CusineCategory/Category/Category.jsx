import {Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Category.style';
import {useNavigation} from '@react-navigation/native';

const Category = ({item, setselectedCuisine}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => {
        setselectedCuisine(item.title);
      }}>
      <Image source={item.source} style={styles.cuisineImage} />
      <Text style={styles.discoverItemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default Category;
