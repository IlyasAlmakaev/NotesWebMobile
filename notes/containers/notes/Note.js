import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { deleteTask, getTasks, setEditTaskData, replaceTask } from '../../requests/Requests';
import { Notes } from './Notes';
import { styles } from '../../Styles';
import {
    Button,
    View,
    Text,
    Switch
  } from 'react-native';

const mapStateToProps = (state) => {
	return {
        task: state.task.present.task,
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
  
    onPressCell = (e) => {
        e.preventDefault();

        let data = {
                title: this.props.data.title,
                body: this.props.data.body,
                done: this.props.data.done,
                taskID: this.props.data.id,
                userID: this.props.id   
        };
        
        this.props.setEditTaskData(data);
        this.props.navigation.navigate('EditNote')
    }

    onDeleteNote = () => {
        this.props.deleteTask(this.props.id, this.props.data.id);
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
            <View style={styles.horisontalContent}>
              <Switch 
                onValueChange={this.onDone} 
                value={item.done} 
              />
              <Text>{"Done"}</Text>
            </View>
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