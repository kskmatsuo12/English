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
    // let object = {
    //   text: 'a',
    //   mean: 'u'
    // };
    // let data = [this.state.date, object];
    AsyncStorage.setItem(this.state.text, this.state.mean);
    // this.storage.save({
    //   key: 'test',
    //   data: {
    //     name: 'test1san',
    //     content: 'testcontent'
    //   }
    // });
  }

  // getTest = storage.load({ key: 'test' }).then(res => console.log(res));
  clear() {
    AsyncStorage.clear(); //デバッグ削除用
  }

  render() {
    const { create } = this.props;

    return (
      <View style={styles.container}>
        {/* <Text>{this.state.posts[0]}</Text>
        <Text>{this.state.keys}</Text> */}
        {/* <Text>{this.state.posts.mean}</Text> */}
        <TextInput
          style={styles.memoEditInput1}
          multiline
          placeholder='英単語'
          // value={this.state.body}
          onChangeText={text => {
            this.setState({ text: text });
          }}
        />
        <TextInput
          style={styles.memoEditInput2}
          multiline
          placeholder='意味'
          // value={this.state.body}
          onChangeText={text => {
            this.setState({ mean: text });
          }}
        />
        <CircleButton name='check' onPress={this.handlePress.bind(this)} />
        {/* <CircleButton name='plus' onPress={this.clear.bind(this)} /> */}

        {/* <Button
          style={styles.testButton}
          title='取得'
          onPress={() => this.getData()}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
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
    flex: 1,
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    fontSize: 16
  }
  // testButton: {
  //   position: 'absolute',
  //   top: 250,
  //   right: 32,
  //   backgroundColor: 'white'
  // }
});

export default MemoCreateScreen;
