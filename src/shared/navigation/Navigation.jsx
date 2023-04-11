import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Explore, Bookmark } from '../../screens';
import CustomTabNavigator from './CustomTabNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabNavigator {...props} />}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ExploreTab"
        component={Explore}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        // options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
