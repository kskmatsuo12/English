import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight
} from 'react-native';
import { AsyncStorage } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

//this.props.navigation.navigate('MemoEdit')

class MemoListScreen extends React.Component {
  state = {
    posts: []
    // keys: []
  };

  componentWillMount() {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let word = store[i][0];
          // console.log(key);
          let value = store[i][1];
          let post = { word, value };
          this.setState({
            posts: this.state.posts.concat({ ...post, key: word })
          });
        });
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList
          memoList={this.state.posts}
          navigation={this.props.navigation}
        />
        <CircleButton
          name='plus'
          onPress={() => {
            this.props.navigation.navigate('MemoCreate');
          }}
        />
        <TouchableHighlight>
          <Button
            title='データベースに繋ぐ'
            onPress={() => {
              this.props.navigation.navigate('MemoData');
            }}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  dataButton: {
    position: 'absolute',
    bottom: 150
  }
});

export default MemoListScreen;
