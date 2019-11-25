import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.appbar}>
        <Text style={styles.appBarTitle}>英単語メモ</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 78,
    backgroundColor: '#BBDEFB',
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default AppBar;
