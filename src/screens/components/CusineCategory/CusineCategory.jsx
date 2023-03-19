import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Cuisines from '../../../shared/constants/cuisines';
import Category from './Category/Category';
import styles from '../CusineCategory/CusineCategory.style';

const CusineCategory = ({ setselectedCuisine }) => {
  const dataToShow = Cuisines.slice(0, 10);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Cusines</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        data={dataToShow}
        initialNumToRender={5}
        renderItem={({ item }) => (
          <Category item={item} setselectedCuisine={setselectedCuisine} />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default CusineCategory;
