import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {SettingsScreenRouteProp} from '../navigation/types';

const SettingsScreen = () => {
  const route = useRoute<SettingsScreenRouteProp>();

  return (
    <SafeAreaView>
      <Text>{route.params.name}</Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
