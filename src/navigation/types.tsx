import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Detail: {
    name: string;
    birthYear: string;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Detail'
>;

export type DetailScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Detail'
>;
