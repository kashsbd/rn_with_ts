import React from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {DetailScreenRouteProp} from '../navigation/types';

const DetailScreen = () => {
  const route = useRoute<DetailScreenRouteProp>();

  return <Text>{route.params.name}</Text>;
};

export default DetailScreen;
