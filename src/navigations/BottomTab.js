import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screen/HomeScreen/index';
import SettingScreen from '../screen/SettingScreen/index';
import colors from '../utils/theme/colors';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.PrimaryColor,
        },
        tabBarStyle: {
          backgroundColor: colors.PrimaryColor,
        },
        tabBarIconStyle: {
          color: colors.White,
        },
        tabBarLabelStyle: {
          color: colors.White,
        },
        tabBarActiveTintColor: colors.LightGray,

        headerTitleStyle: {
          color: colors.White,
          fontWeight: 'bold',
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
};
export default MyTabs;
