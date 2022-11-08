import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Explore} from './src/screens';
import TabNavigator from './src/shared/navigation/Navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="ExploreScreen" component={Explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
