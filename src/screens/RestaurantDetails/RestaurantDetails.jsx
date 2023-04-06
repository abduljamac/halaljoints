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
  fetchNearbyResturants,
  nearbyRestaurantsSelector,
} from '../../shared/store/NearbyRestaurants/NearbyRestaurants';
import Restaurants from '../components/Restaurants/Restaurants';

const RestaurantDetails = ({ route }) => {
  const navigation = useNavigation();
  const { details } = route.params;
  const dispatch = useDispatch();
  // console.log(JSON.stringify(details, null, 2));
  console.log(JSON.stringify(details.googleOpeningHoursWeekdayText, null, 2));

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
    dispatch(fetchNearbyResturants());
  }, []);

  const nearbyResturants = useSelector(nearbyRestaurantsSelector);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{ uri: details.thumbUrl }}
          style={styles.backgroundImage}>
          <View style={styles.icnonWrapperOne}>
            <TouchableOpacity
              style={styles.iconButtons}
              onPress={() => {
                navigation.goBack();
              }}>
              <Ionicons
                name="arrow-back"
                size={theme.spacing.large}
                color={theme.colours.primaryColor}
              />
            </TouchableOpacity>
            <View style={styles.iconWrapperTwo}>
              <View>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={handleInstagramPress}>
                  <AntDesign
                    name="instagram"
                    size={24}
                    color={theme.colours.primaryColor}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={handlePhonePress}>
                  <AntDesign
                    name="phone"
                    size={24}
                    color={theme.colours.primaryColor}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.icons}
                  onPress={handleSharePress}>
                  <Feather
                    name="share"
                    size={24}
                    color={theme.colours.primaryColor}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.descriptionWrapper}>
          <View style={styles.resturantDetails}>
            <Text style={styles.restaurantName}>{details.name}</Text>
            <Text style={styles.restaurantAddress}>{details.address}</Text>
          </View>
          {details.halalRatings.length > 0 && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: theme.spacing.large,
                marginRight: theme.spacing.large,
                paddingVertical: theme.spacing.medium,
              }}>
              {details.halalRatings.map((text, i) => (
                <View style={styles.tagsWrapper} key={i}>
                  <Text style={styles.tagText}>{formatString(text)}</Text>
                </View>
              ))}
            </ScrollView>
          )}
        </View>

        <View
          style={{
            paddingVertical: theme.spacing.large,
            backgroundColor: theme.colours.white,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: theme.fontSizes.heading2,
              marginHorizontal: theme.spacing.large,
            }}>
            Halal Info
          </Text>
          <HalaInfo
            name={details.name}
            halalDescription={details.halalDescription}
            halalDescriptionDate={details.halalDescriptionDate}
            halalDescriptionSource={details.halalDescriptionSource}
          />
        </View>
        <View style={styles.dateWrapper}>
          {formattedHours.map(item => (
            <View
              key={item.day}
              style={{ flexDirection: 'row', marginBottom: 8 }}>
              <Text style={{ flex: 1, fontWeight: 'bold' }}>{item.day}</Text>
              <Text style={{ flex: 1, textAlign: 'right' }}>{item.hours}</Text>
            </View>
          ))}
        </View>
        {/* Nearby */}
        <View
          style={{
            paddingHorizontal: theme.spacing.small,
            backgroundColor: theme.colours.white,
          }}>
          <Restaurants
            items={nearbyResturants}
            title={'Nearby'}
            showAll={false}
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
