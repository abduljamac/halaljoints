import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../theme';

const CustomTabNavigator = ({state, navigation}) => {
  const tabIconsArray = [
    <Icon name="home" size={24} color="white" />,
    <Icon name="search" size={24} color="white" />,
  ];

  return (
    <View
      style={{
        // position: 'absolute',
        // bottom: '3%',
        // left: theme.spacing.large,
        // right: theme.spacing.large,
        // flexDirection: 'row',
        // height: 55,
        // backgroundColor: theme.colours.primaryColor,
        // borderRadius: 30,
      }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const tabIcons = index => {
          return tabIconsArray[index];
        };

        return (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            key={index}>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={onPress}
              onLongPress={onLongPress}>
              {tabIcons(index)}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default CustomTabNavigator;
