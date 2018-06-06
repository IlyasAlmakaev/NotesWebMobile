import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    View,
    FlatList,
    Text,
    Switch
  } from 'react-native';
import { styles } from '../../Styles';
import { setUserID, getTasks } from '../../requests/Requests';
import PropTypes from 'prop-types';
import Note from './Note';
import { Actions } from 'react-native-router-flux';
  
const mapStateToProps = (state) => {
	return {
    id: state.task.present.id,
    tasks: state.task.present.tasks,
    task: state.task.present.task,
		error: state.task.present.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    getTasks: (id) => dispatch(getTasks(id)),
    setUserID: (id) => dispatch(setUserID(id))
	};
};

class Notes extends Component {

  static propTypes = {
    id: PropTypes.string,
    getTasks: PropTypes.func.isRequired,
    setUserID: PropTypes.func,
    tasks: PropTypes.array.isRequired,
    task: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired
 }

 static navigationOptions = ({ navigation  }) => ({
  headerRight: (
    <Button
      onPress={() => navigation.navigate('AddNote')}
      title="Add Note"
    />
  )
})

  componentDidMount() {
    this.props.getTasks(this.props.id);
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

    let notesTemplate;

    if (this.props.tasks.length > 0) {
      notesTemplate = <FlatList 
        data = {this.props.tasks}
        keyExtractor = {item => item.id.toString()}
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        renderItem={({item}) => (
          <Note data={item}/>
        )}
      />
    } else {
      notesTemplate = <Text>{'There are no notes'}</Text>
    }
    return (
	    <View style={styles.flatContainer} >
        {notesTemplate}
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);