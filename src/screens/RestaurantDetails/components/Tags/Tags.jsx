import {View, Text} from 'react-native';
import React from 'react';
import styles from './Tags.style';

const Tags = ({cuisines}) => {
  return (
    <View style={styles.container}>
      {cuisines.map((res, index) => {
        return <Text key={index} style={styles.tag}> {res}</Text>;
      })}
    </View>
  );
};

export default Tags;
