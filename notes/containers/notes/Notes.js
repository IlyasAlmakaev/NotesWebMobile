import React, { Component } from 'react';
import {
    Button,
    View,
    FlatList,
    Text,
    Switch
  } from 'react-native';
import { styles } from '../../Styles';
  

export default class Notes extends Component {

  constructor() {
    super();
    this.state = { done: true };
  }

  componentWillMount() {
    this.props.navigation.setParams({
        'onRight': this.onAddNote
    })
  }

  onAddNote() {
    alert('add note')
  }

  onDeleteNote() {
    alert('delete note')
  }

  onDone = (value) => {
    this.setState({ done: value })
 }

 FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#607D8B",
      }}
    />
  );
}

  render() {
    
    let notes=[{key: 'a'}, {key: 'b'}];
    let notesTemplate;

    if (notes.length > 0) {
      notesTemplate = <FlatList 
        data = {notes}
        keyExtractor = {item => item.key}
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        renderItem={({item}) => (
          <View>
            <Text>{item.key}</Text>
            <Text>{"item.body"}</Text>
            <Switch 
              onValueChange={ this.onDone } 
              value={ this.state.done } 
            />
            <Button
              onPress={this.onDeleteNote}
              title="Delete Note"
            />
          </View>)}
      />
    } else {
      notesTemplate = <Text>{'There are no notes'}</Text>
    }
    return (
	    <View style={styles.flatContainer}>
        {notesTemplate}
      </View>
    );
  }
}