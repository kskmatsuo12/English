import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

class MemoDataDetailScreen extends React.Component {
  state = {
    memo: {}
  };

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>{this.state.memo.text}</Text>
            {/* <Text style={styles.memoHeaderDate}>{this.state.memo.value}</Text> */}
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoContentText}>{this.state.memo.mean}</Text>
        </View>

        <CircleButton
          name='pencil'
          color='white'
          style={styles.editButton}
          onPress={() => {
            this.props.navigation.navigate('MemoEdit');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff'
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1
  },
  memoContentText: {
    color: 'black'
  },
  editButton: {
    top: 75
  }
});

export default MemoDataDetailScreen;
