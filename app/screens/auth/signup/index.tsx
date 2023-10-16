import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './signUpScreen';

const RegisterStack = createNativeStackNavigator();

function RegistrationStack() {
  return (
    <RegisterStack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerShown: false,
      }}>
      <RegisterStack.Screen name="SignUp" component={SignUpScreen} />
    </RegisterStack.Navigator>
  );
}

export default RegistrationStack;
