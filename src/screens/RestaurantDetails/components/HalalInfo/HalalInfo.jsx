import {View, Text} from 'react-native';
import React from 'react';
import styles from './HalalInfo.style';

const HalalInfo = ({
  name,
  halalDescription,
  halalDescriptionSource,
  halalRatings,
}) => {
  return (
    <View style={styles.container}>
      <Text> Halal Info</Text>
      
    </View>
  );
};

export default HalalInfo;
