// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import Storage from 'react-native-storage';
import AsyncStorage from 'react-native';

import MemoListScreen from './src/screens/MemoListScreen';
// import MemoList from './src/components/MemoList';
// import AppBar from './src/components/AppBar';
// import CircleButton from './src/elements/CircleButton';
// import { onAnchorsDidUpdate } from 'expo/build/AR';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoDataCreateScreen from './src/screens/MemoDataCreateScreen';
import MemoDataScreen from './src/screens/MemoDataScreen';

getData = async () => {
  try {
    const value = await AsyncStorage.getItem('posts');
    if (value !== null) {
      Alert.alert('WE have' + value);
    } else {
      Alert.alert('We have no data');
    }
  } catch (error) {
    console.log(error);
  }
};

const App = createStackNavigator(
  {
    MemoData: {
      screen: MemoDataScreen
    },
    MemoDataCreate: {
      screen: MemoDataCreateScreen
    },
    Home: {
      screen: MemoListScreen
    },
    MemoCreate: {
      screen: MemoCreateScreen
    },
    MemoDetail: {
      screen: MemoDetailScreen
    },
    MemoEdit: {
      screen: MemoEditScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerTitle: '英単語',
      headerTintColor: '#fff',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#BBDEFB'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

export default createAppContainer(App);
