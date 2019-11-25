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

class MemoDataScreen extends React.Component {
  state = {
    posts: []
    // keys: []
  };

  componentWillMount() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function(e) {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let json = JSON.parse(this.responseText);
        console.log(json.id);
      }
    };

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
        <Text>test</Text>
        <MemoList
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
