import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight
} from 'react-native';
import { AsyncStorage } from 'react-native';

import MemoListData from '../components/MemoListData';
import CircleButton from '../elements/CircleButton';

//this.props.navigation.navigate('MemoEdit')

class MemoDataScreen extends React.Component {
  state = {
    posts: ''
    // keys: []
  };

  componentWillMount() {
    const request = new XMLHttpRequest();
    let json;
    let self = this;
    request.onreadystatechange = function(e) {
      if (this.readyState == 4 && this.status == 200) {
        json = JSON.parse(this.responseText);
        console.log(json);
        // this.state = this.state.bind(this);
        self.setState({
          posts: json
        });
      }
    };
    console.log('aaa');

    request.open(
      'GET',
      'https://ksk-tennis.sakura.ne.jp/php2/secret2.php',
      true
    );
    request.send();
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoListData
          memoList={this.state.posts}
          navigation={this.props.navigation}
        />
        <CircleButton
          name='plus'
          onPress={() => {
            this.props.navigation.navigate('MemoDataCreate');
          }}
        />
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

export default MemoDataScreen;
