import React, { Component } from 'react';
import {
    Button,
    View,
    FlatList,
    Text
  } from 'react-native';
import { styles } from '../../Styles';
  

export default class Notes extends Component {

  componentWillMount() {
    this.props.navigation.setParams({
        'onRight': this.onAddNote
    })
  }

  onAddNote() {
    alert('add note')
  }

  render() {

    return (
	    <View style={styles.container}>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}