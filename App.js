import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Stacknavigation from './src/Navigation/Stacknavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stacknavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
