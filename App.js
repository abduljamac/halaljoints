import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/shared/store/store';

const Stack = createNativeStackNavigator();
import {Home, Explore, RestaurantDetails} from './src/screens/index';
import TabNavigator from './src/shared/navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="HomeScreen" component={Home} />
          <Stack.Screen name="ExploreScreen" component={Explore} />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
