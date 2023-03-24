import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../shared/theme';
const { height } = Dimensions.get('window');
import { Ionicons, AntDesign, Feather, Entypo } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import HalaInfo from '../components/HalalInfo/HalaInfo';

const RestaurantDetails = ({ route }) => {
  const navigation = useNavigation();
  const { details } = route.params;
  console.log(details.businessStatus);

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

  return (
    <View style={{ backgroundColor: theme.colours.white }}>
      <ScrollView>
        <View>
          <ImageBackground
            style={{
              padding: theme.spacing.large,
              height: height / 2.5,
              paddingTop: theme.spacing.XXLarge,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            source={{ uri: details.thumbUrl }}>
            <TouchableOpacity
              style={{
                height: theme.spacing.XLarge + 2,
                width: theme.spacing.XLarge + 2,
                backgroundColor: theme.colours.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: theme.spacing.large,
              }}
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

          <View
            style={{
              flex: 1,
              padding: theme.spacing.large,
              paddingTop: theme.spacing.XLarge,
              marginTop: -theme.spacing.large,
              borderTopLeftRadius: theme.spacing.XLarge,
              borderTopRightRadius: theme.spacing.XLarge,
              backgroundColor: theme.colours.white,
            }}>
            <View
              style={{
                marginBottom: theme.spacing.XLarge,
              }}>
              <Text
                style={{
                  fontSize: theme.fontSizes.heading1,
                  fontWeight: '600',
                  marginLeft: theme.spacing.small,
                }}>
                {details.name}
              </Text>
              <Text
                style={{
                  fontSize: theme.fontSizes.heading,
                  fontWeight: '300',
                  marginLeft: theme.spacing.small,
                }}>
                {details.address}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: theme.spacing.small,
                marginTop: -theme.spacing.large,
              }}>
              <TouchableOpacity
                style={{ paddingRight: theme.spacing.large }}
                onPress={handleInstagramPress}>
                <AntDesign
                  name="instagram"
                  size={24}
                  color={theme.colours.primaryColor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingRight: theme.spacing.large }}
                onPress={handlePhonePress}>
                <AntDesign
                  name="phone"
                  size={24}
                  color={theme.colours.primaryColor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingRight: theme.spacing.large }}
                onPress={handleSharePress}>
                <Feather
                  name="share"
                  size={24}
                  color={theme.colours.primaryColor}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              padding: theme.spacing.small,
              marginTop: -theme.spacing.large,
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
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleMapPress}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: theme.spacing.large,
            backgroundColor: theme.colours.primaryColor,
            borderRadius: theme.spacing.XXLarge + 10,
            paddingVertical: theme.spacing.large,
          }}>
          <Entypo name="direction" size={24} color={theme.colours.white} />
          <Text
            style={{
              fontSize: theme.fontSizes.heading2,
              marginLeft: theme.spacing.medium,
              color: theme.colours.white,
            }}>
            Direction
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantDetails;
