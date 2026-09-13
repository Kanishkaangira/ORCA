import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import HomeBottomNavigation from './HomeBottomNavigation';
import Chatbot from '../Screens/Chatbot';
import Details from '../Screens/Details';

const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Splash Screen */}
      <Stack.Screen
        name="Splash"
        component={Splash}
      />

      {/* Login Screen */}
      <Stack.Screen
        name="Login"
        component={Login}
      />

      {/* Main Application */}
      <Stack.Screen
        name="MainTabs"
        component={HomeBottomNavigation}
      />

      {/* Chatbot - separate from bottom navigation */}
      <Stack.Screen
        name="Chatbot"
        component={Chatbot}
      />

      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Stacknavigation;
