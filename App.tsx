import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootApp} from './app/routes/index';

const App = () => {
  return (
    <NavigationContainer>
      <RootApp />
    </NavigationContainer>
  );
};

export default App;
