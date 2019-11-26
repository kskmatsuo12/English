import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { AsyncStorage } from 'react-native';

import CircleButton from '../elements/CircleButton';
import { withOrientation } from 'react-navigation';

class MemoCreateScreen extends React.Component {
  state = {
    text: '',
    mean: ''
    // date: new Date(),
    // posts: [],
    // keys: []
  };

  storeData = async name => {
    try {
      await AsyncStorage.setItem('posts', name);
    } catch (error) {
      console.log(error);
    }
    Alert.alert(name + ':stored');
  };
  handlePress() {
    if (this.state.text == '' || this.state.mean == '')
      return Alert.alert('未入力です');
    AsyncStorage.setItem(this.state.text, this.state.mean);
  }

  clear() {
    AsyncStorage.clear(); //デバッグ削除用
  }

  render() {
    const { create } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput1}
          placeholder='英単語'
          onChangeText={text => {
            this.setState({ text: text });
          }}
        />
        <TextInput
          style={styles.memoEditInput2}
          multiline
          placeholder='意味'
          onChangeText={text => {
            this.setState({ mean: text });
          }}
        />
        <CircleButton name='check' onPress={this.handlePress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50
  },
  memoEditInput1: {
    width: '100%',
    height: 50,
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    fontSize: 16
  },
  memoEditInput2: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    flex: 5,
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    fontSize: 16
  }
});

export default MemoCreateScreen;
