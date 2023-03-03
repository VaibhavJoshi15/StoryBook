import LoginScreen from '../screen/LoginScreen/index';
import RegisterScreen from '../screen/RegisterScreen/index';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './BottomTab';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="UserStack" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
