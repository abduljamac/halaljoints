import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './RestaurantCard.style';
import { BlurView } from '@react-native-community/blur';
import StarRating from '../../StarRating/StarRating';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const RestaurantCard = React.memo(({ res, viewableItems }) => {
  const navigation = useNavigation();

  // console.log(viewableItems);

  const rStyle = useAnimatedStyle(() => {
    // const isVisible = Boolean(
    //   viewableItems.value
    //     .filter(item => item.isViewable)
    //     .find(viewableItem => viewableItem.item.id === item.id),
    // );

    const isVisible = viewableItems.value.filter(item => console.log(item));
    // .find(viewableItem => viewableItem.item.id === item.id);

    console.log(isVisible);
    // return {
    //   opacity: withTiming(isVisible ? 1 : 0),
    //   transform: [
    //     {
    //       scale: withTiming(isVisible ? 1 : 0.6),
    //     },
    //   ],
    // };
    return {
      opacity: 1,
    };
  }, []);

  return (
    <Animated.View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.card}
        onPress={() => {
          navigation.navigate('RestaurantDetails', { details: res });
        }}>
        <Image source={{ uri: res.thumbUrl }} style={styles.cardImage} />

        <View style={styles.category}>
          <Text style={styles.cuisines}>{res.cuisines[0]}</Text>
        </View>

        <BlurView blurType="dark" style={styles.content}>
          <Text numberOfLines={1} style={styles.title}>
            {res.nickname}
          </Text>
          <StarRating rating={res.googleRating} />
        </BlurView>
      </TouchableOpacity>
    </Animated.View>
  );
});

export default RestaurantCard;
