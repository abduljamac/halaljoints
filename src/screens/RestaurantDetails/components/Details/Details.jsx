import {View, Text} from 'react-native';
import React from 'react';
import styles from './Details.style';

const Details = ({name, address}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
    </View>
  );
};

export default Details;
