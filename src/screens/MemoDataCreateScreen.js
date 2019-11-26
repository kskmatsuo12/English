import React from 'react';
import {
  View,
  Alert,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import axios from 'axios';

class MemoDataCreateScreen extends React.Component {
  state = {
    text: '',
    mean: ''
  };
  addSQL() {
    //   let qs = require('qs');
    //   axios
    //     .post(
    //       'https://ksk-tennis.sakura.ne.jp/php2/secret.php',
    //       qs.stringify({
    //         text: this.state.text,
    //         mean: this.state.mean
    //       })
    //     )
    //     .then(res => {
    //       if (res.status == 200) {
    //         alert('登録OK！');
    //       } else {
    //         alert('投稿エラー');
    //       }
    //     })
    //     .catch(error => console.log(error));
    // }

    if (this.state.text == '' && this.state.mean == '')
      return Alert.alert('未入力です');
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        if (request.status == 200) {
          Alert.alert('送信しました');
        } else {
          console.log('通信失敗');
        }
      }
    };
    request.onload = function() {
      console.log('通信完了！');
    };
    request.open(
      'POST',
      'https://ksk-tennis.sakura.ne.jp/php2/secret.php',
      true
    );
    request.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    request.send(`text=${this.state.text}&mean=${this.state.mean}`);
  }
  test() {
    console.log('test');
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder='Textをここに入力'
          onChangeText={text => {
            this.setState({
              text: text
            });
          }}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder='Meanをここに入力'
          multiline
          onChangeText={text => {
            this.setState({
              mean: text
            });
          }}
        ></TextInput>
        <TouchableHighlight>
          <Button title='送信' onPress={() => this.addSQL()} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  textInput: {
    backgroundColor: '#fff',
    fontSize: 16,
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16
  }
});

export default MemoDataCreateScreen;
