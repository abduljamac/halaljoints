import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Explore} from '../../screens';

import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../theme';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.colours.white,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="home" size={30} color={theme.colours.primaryColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="search" size={30} color={theme.colours.primaryColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
