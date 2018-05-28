import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { deleteTask, getTasks, setEditTaskData, replaceTask } from '../../requests/Requests';
import { Notes } from './Notes';
import {
    Button,
    View,
    Text,
    Switch
  } from 'react-native';
  import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
	return {
        id: state.task.present.id,
        task: state.task.present.task,
        deletedTask: state.task.present.deletedTask,
        replacedTask: state.task.present.replacedTask,
	    error: state.task.present.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        getTasks: (id) => dispatch(getTasks(id)),
        deleteTask: (id, taskID) => dispatch(deleteTask(id, taskID)),
        setEditTaskData: (data) => dispatch(setEditTaskData(data)),
        replaceTask: (id, taskID, data) => dispatch(replaceTask(id, taskID, data))
	};
};

class Note extends Component {

    static propTypes = {
      data: PropTypes.oneOfType([
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
        done: PropTypes.bool.isRequired}),
        PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          done: PropTypes.bool.isRequired
        })),
      ]).isRequired,
      id: PropTypes.string,
      deletedTask: PropTypes.object.isRequired,
      deleteTask: PropTypes.func.isRequired,
      getTasks: PropTypes.func.isRequired,
      setEditTaskData: PropTypes.func,
      replaceTask: PropTypes.func.isRequired
   }
  
    static defaultProps = {
      data: []
    }
    
    constructor(props) {
          super(props);
    }
  
    onPressCell = (e) =>{
        e.preventDefault();

        
        let data = {
                title: this.props.data.title,
                body: this.props.data.body,
                taskID: this.props.data.id,
                userID: this.props.id   
        };
        
        this.props.setEditTaskData(data);
        Actions.replace('editNote');
    }

    onDeleteNote() {
        alert('delete note')
        this.props.deleteTaskFromForm(this.props.id, this.props.data.id);
      }
    
      onDone = (value) => {
        console.log(`replace /${this.props.id}/`);
        let data = { title: this.props.data.title,
            body: this.props.data.body,
            done: value};

        this.props.replaceTask(this.props.id, this.props.data.id, data)
     }
  
    render() {

        let item = this.props.data;

      return (
        <TouchableOpacity onPress={this.onPressCell}>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
          <Switch 
            onValueChange={this.onDone} 
            value={item.done} 
          />
          <Button
            onPress={this.onDeleteNote}
            title="Delete Note"
          />
        </View>
        </TouchableOpacity>
        )
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Note);