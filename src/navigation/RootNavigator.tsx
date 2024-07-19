import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './BottomTabs';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
