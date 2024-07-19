import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './HomeStack';
import SettingsScreen from '../screens/SettingsScreen';
import {BottomTabsNavigatorParamList} from '../navigation/types';

const BottomTabs = createBottomTabNavigator<BottomTabsNavigatorParamList>();

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <BottomTabs.Screen name="Settings" component={SettingsScreen} />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator;
