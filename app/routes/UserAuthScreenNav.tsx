import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreenStack from '../screens/auth/index';
import RegistrationStack from 'app/screens/auth/signup/index';

const Stack = createNativeStackNavigator();

const NoAuthScreenNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreenStack} />
      <Stack.Screen name="Register" component={RegistrationStack} />
    </Stack.Navigator>
  );
};

export default NoAuthScreenNav;
