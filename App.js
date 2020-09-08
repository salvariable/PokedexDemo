/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/containers/HomeScreen';
import DetailScreen from './src/containers/DetailScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: (props) => (
            <Image
              resizeMode="contain"
              style={{ height: 100, width: 100 }}
              source={require('./assets/pokelogo.png')}
            />
          ),
          headerStyle: { backgroundColor: 'red' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
