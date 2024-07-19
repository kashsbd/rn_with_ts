import React from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../navigation/types';

type DATAProps = {
  id: number;
  name: string;
  birth_year: string;
};

const DATA: Array<DATAProps> = [
  {
    id: 1,
    name: 'Luke Skywalker',
    birth_year: '19BBY',
  },
  {
    id: 2,
    name: 'C-3PO',
    birth_year: '112BBY',
  },
  {
    id: 3,
    name: 'R2-D2',
    birth_year: '33BBY',
  },
  {
    id: 4,
    name: 'Darth Vader',
    birth_year: '41.9BBY',
  },
  {
    id: 5,
    name: 'Leia Organa',
    birth_year: '19BBY',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameStyle: {
    fontSize: 18,
    padding: 12,
  },
  divider: {
    color: '#ccc',
    borderWidth: StyleSheet.hairlineWidth,
  },
});

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const renderItem = ({item}: {item: DATAProps}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Settings', {
            name: item.name,
            birthYear: item.birth_year,
          })
        }>
        <Text style={styles.nameStyle}>{item.name}</Text>
        <View style={styles.divider} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList data={DATA} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default HomeScreen;
