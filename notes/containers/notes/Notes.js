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

  render() {
    
    let notes=[{key: 'a'}, {key: 'b'}];
    let notesTemplate;

    if (notes.length > 0) {
      notesTemplate = <FlatList
        data = {notes}
        renderItem={({item}) => (
          <View>
            <Text>{"item.title"}</Text>
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
	    <View style={styles.container}>
        {notesTemplate}
      </View>
    );
  }
}