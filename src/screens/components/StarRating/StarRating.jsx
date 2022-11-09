import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './StarRating.style';

const StarRating = props => {
  let stars = [];
  let num = Math.round(props.rating);
  for (var i = 1; i <= num; i++) {
    let name = 'star';
    stars.push(<Icon name={name} size={10} style={styles.star} key={i} />);
  }

  return <View style={styles.container}>{stars}</View>;
};

export default StarRating;
