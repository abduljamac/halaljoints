import {View, ImageBackground, Animated, Text, Image} from 'react-native';
import React, {useRef} from 'react';
import styles from './RestaurantHeader.style';

const RestaurantHeader = ({img}) => {
  return (
    <View>
      <ImageBackground
        source={{uri: img}}
        resizeMode="cover"
        style={{
          height: 250,
          // width:  80,
        }}
      />
    </View>
  );
};

export default RestaurantHeader;
