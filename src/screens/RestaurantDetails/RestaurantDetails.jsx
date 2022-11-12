import {
  View,
  Text,
  ActivityIndicator,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import RestaurantHeader from './components/RestaurantHeader/RestaurantHeader';
import Details from './components/Details/Details';
import styles from './RestaurantDetails.style';
import Tags from './components/Tags/Tags';
import HalalInfo from './components/HalalInfo/HalalInfo';

const RestaurantDetails = ({route}) => {
  const {item} = route.params.details;
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [selectedResturants, setSelectedResturants] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setSelectedResturants([item]);
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading === true ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <RestaurantHeader
            img={selectedResturants[0].thumbUrl}
            animHeaderValue={scrollOffsetY}
          />

          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
              {useNativeDriver: false},
            )}
            contentContainerStyle={styles.container}>
            <Details
              name={selectedResturants[0].name}
              address={selectedResturants[0].address}
            />
            <Tags cuisines={selectedResturants[0].cuisines} />

            <HalalInfo
              halalDescription={selectedResturants[0].halalDescription}
              halalDescriptionSource={
                selectedResturants[0].halalDescriptionSource
              }
            />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default RestaurantDetails;
