import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CUISINES from '../../../shared/constants/cuisines';
import Category from './Category/Category';
import styles from '../CusineCategory/CusineCategory.style';

const CusineCategory = ({setselectedCuisine}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Cusines</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        data={CUISINES}
        initialNumToRender={5}
        renderItem={({item}) => (
          <Category item={item} setselectedCuisine={setselectedCuisine} />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default CusineCategory;
