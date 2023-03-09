import LoginScreen from '../screen/LoginScreen/index';
import RegisterScreen from '../screen/RegisterScreen/index';
import BiometricScreen from '../screen/BiometricScreen/index';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './BottomTab';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const {userInfo} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          userInfo?.token === null ? 'AuthStack' : 'BiometricScreen'
        }
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BiometricScreen" component={BiometricScreen} />
        <Stack.Screen name="AuthStack" component={AuthNavigation} />
        <Stack.Screen name="UserStack" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loginscreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
