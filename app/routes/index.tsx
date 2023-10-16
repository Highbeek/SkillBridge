// MainStack.js

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NoAuthScreenNav from './UserUnAuthScreenNav';
import UserAuthScreenNav from './UserAuthScreenNav';

export const RootApp = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <RootStack.Navigator
      initialRouteName="UserAuth"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="NoAuth" component={NoAuthScreenNav} />
      <RootStack.Screen name="UserAuth" component={UserAuthScreenNav} />
    </RootStack.Navigator>
  );
};
