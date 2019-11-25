import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList
} from 'react-native';

class MemoList extends React.Component {
  renderMemo({ item }) {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.navigation.navigate('MemoDetail', { memo: item });
        }}
      >
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.word}</Text>
          <Text style={styles.memoDate}>{item.value}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    // const list = [];
    // this.props.memoList.forEach(memo => {
    //   list.push(this.renderMemo(memo));
    // });
    // console.log(this.props.memoList);
    return (
      <View style={styles.memoList}>
        <FlatList
          data={this.props.memoList}
          renderItem={this.renderMemo.bind(this)}
        />
        {/* {list} */}
        {/* <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate('MemoDetail');
          }}
        >
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/11/15</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/11/15</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/11/15</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/11/15</Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff'
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2'
  }
});

export default MemoList;
