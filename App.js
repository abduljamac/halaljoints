import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/shared/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Explore, RestaurantDetails} from './src/screens';
import TabNavigator from './src/shared/navigation/Navigation';
import { theme } from './src/shared/theme';

const Stack = createNativeStackNavigator();

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
            options={{
              title: '',
              headerStyle: {
                // backgroundColor: theme.colours.transparentGray,
              },
              // headerTintColor: theme.colours.black,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            // options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
