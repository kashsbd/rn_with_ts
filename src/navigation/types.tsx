import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Detail: {
    name: string;
    birthYear: string;
  };
};

export type DetailScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Detail'
>;

export type BottomTabsNavigatorParamList = {
  HomeStack: HomeStackNavigatorParamList;
  Settings: HomeStackNavigatorParamList['Detail'];
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, 'Detail'>,
  BottomTabNavigationProp<BottomTabsNavigatorParamList, 'Settings'>
>;

export type SettingsScreenRouteProp = RouteProp<
  BottomTabsNavigatorParamList,
  'Settings'
>;
