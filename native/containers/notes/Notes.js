import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    View,
    FlatList,
    Text
  } from 'react-native';
import { styles } from '../../Styles';
import { getTasks } from '../../../framework/actions/Actions';
import PropTypes from 'prop-types';
import Note from './Note';
  
const mapStateToProps = (state) => {
	return {
    tasks: state.task.present.tasks,
    task: state.task.present.task,
		error: state.task.present.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    getTasks: () => dispatch(getTasks())
	};
};

class Notes extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    getTasks: PropTypes.func.isRequired,
    setUserID: PropTypes.func,
    tasks: PropTypes.array.isRequired,
    task: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired
 }

 static navigationOptions = ({ navigation  }) => ({
  headerRight: (
    <Button
      onPress={() => navigation.state.params.onAddNote()}
      title="Add Note"
    />
  )
})

onAddNote() {
  this.props.navigation.push('AddNote');
}

  componentDidMount() {
    this.props.getTasks();
    this.props.navigation.setParams({ onAddNote: () => this.onAddNote() })
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
          <Note data={item} navigation={this.props.navigation}/>
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