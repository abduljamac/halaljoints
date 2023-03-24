import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import React from 'react';
import styles from './Articles.stlye';
import { ARTICLES } from '../../../shared/constants/articles';
import Animated, { FadeInLeft } from 'react-native-reanimated';

const Articles = () => {
  return (
    <Animated.View style={styles.container} entering={FadeInLeft.delay(300)}>
      <Text style={styles.title}>Get Inspired</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ARTICLES}
        renderItem={item => {
          return (
            <TouchableOpacity
              activeOpacity={4}
              style={styles.articleContainer}
              onPress={async () => {
                Linking.canOpenURL(item.item.link).then(supported => {
                  return Linking.openURL(item.item.link);
                });
              }}>
              <Image
                source={item.item.source}
                style={styles.articleImage}
                resizeMode="cover"
              />
              <Text style={styles.articleTitle}>{item.item.title}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.title}
      />
    </Animated.View>
  );
};

export default Articles;
