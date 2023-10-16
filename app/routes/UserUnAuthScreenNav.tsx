import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import User from '../components/User';
import WelcomeScreenStack from '../screens/auth/index';

const Stack = createNativeStackNavigator();

const UserAuthScreenNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="user" component={User} />
      <Stack.Screen name="Welcome" component={WelcomeScreenStack} /> */}
    </Stack.Navigator>
  );
};

export default UserAuthScreenNav;
