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
import {ARTICLES} from '../../../shared/constants/articles';

const Articles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Inspired</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ARTICLES}
        initialNumToRender={5}
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
    </View>
  );
};

export default Articles;
