// MainStack.js

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InformationScreen from './InformationScreen';
import HomeScreen from './WelcomeScreen';

const WelcomeScreenStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Information"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="landing" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default WelcomeScreenStack;
