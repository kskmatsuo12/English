import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class MemoDataCreateScreen extends React.Component {
  state = {
    text: '',
    mean: ''
  };
  addSQL() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        if (request.status == 200) {
          console.log('通信成功');
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
    request.send(`text=${this.state.text}&mean=${this.state.mean}`);
  }
  test() {
    console.log('test');
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder='Textをここに入力'
          onChangeText={text => {
            this.setState({
              text: text
            });
          }}
        ></TextInput>
        <TextInput
          placeholder='Meanをここに入力'
          onChangeText={text => {
            this.setState({
              mean: text
            });
          }}
        ></TextInput>
        <Text>{this.state.text}</Text>
        <Text>{this.state.mean}</Text>
        <Button title='送信' onPress={() => this.addSQL()} />
      </View>
    );
  }
}
export default MemoDataCreateScreen;
