import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../shared/theme';
import { Ionicons, AntDesign, Feather, Entypo } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import HalaInfo from '../components/HalalInfo/HalaInfo';
import styles from './RestaurantDetails.style';
import formatString from '../../shared/util/format-string';
import { BlurView } from 'expo-blur';
import {
  fetchNearbyRestaurants,
  nearbyRestaurantsSelector,
} from '../../shared/store/NearbyRestaurants/NearbyRestaurants';
import Restaurants from '../components/Restaurants/Restaurants';

const RestaurantDetails = ({ route }) => {
  const navigation = useNavigation();
  const { details } = route.params;
  const dispatch = useDispatch();

  const handleInstagramPress = () => {
    const instagramUrl = `https://www.instagram.com/${details.instagram}`;
    Linking.openURL(instagramUrl);
  };

  const handleSharePress = async () => {
    await Clipboard.setStringAsync(`${details.name} ${details.web}`);
  };

  const handlePhonePress = async () => {
    try {
      const phoneUrl = `tel:${details.telephone}`;
      await Linking.openURL(phoneUrl);
    } catch (error) {
      Alert.alert('Error', 'Failed to initiate phone call');
    }
  };
  const handleMapPress = () => {
    const scheme = Platform.select({
      ios: 'http://maps.apple.com/maps?q=',
      android: 'https://www.google.com/maps/search/?api=1&query=',
    });
    const latLng = `${details.latitude},${details.longitude}`;
    const url = `${scheme}${latLng}`;
    Linking.openURL(url);
  };

  const formattedHours = details.googleOpeningHoursWeekdayText.map(item => {
    const splitItem = item.split(': ');
    return {
      day: splitItem[0],
      hours: splitItem[1],
    };
  });

  useEffect(() => {
    dispatch(fetchNearbyRestaurants());
  }, []);

  const nearbyRestaurants = useSelector(nearbyRestaurantsSelector);

  // console.log('halalRating: ', details.halalRatings);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{ uri: details.thumbUrl }}
          style={styles.backgroundImage}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons
              name="arrow-back"
              size={theme.spacing.large}
              color={theme.colours.primaryColor}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.descriptionWrapper}>
          <View style={styles.resturantDetails}>
            <Text style={styles.restaurantName}>{details.name}</Text>
          </View>
        </View>

        <View
          style={{
            paddingVertical: theme.spacing.large,
            backgroundColor: theme.colours.white,
          }}>
          <HalaInfo
            name={details.name}
            halalDescription={details.halalDescription}
            halalDescriptionDate={details.halalDescriptionDate}
            halalDescriptionSource={details.halalDescriptionSource}
            halalRatings={details.halalRatings}
          />
        </View>
      </ScrollView>
      <BlurView
        blurType="dark"
        style={{
          paddingBottom: theme.spacing.large,
        }}>
        <TouchableOpacity onPress={handleMapPress}>
          <View style={styles.directionButton}>
            <Entypo name="direction" size={24} color={theme.colours.white} />
            <Text style={styles.directionButtonText}>Direction</Text>
          </View>
        </TouchableOpacity>
      </BlurView>
    </View>
  );
};

export default RestaurantDetails;
