import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TextInput,
  Button,
  Switch,
  View,
  Alert
} from 'react-native';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { replaceTask, setTitle, setBody, setDone } from '../../../framework/requests/Requests';
import { styles } from '../../Styles';

const mapStateToProps = (state) => {
	return {
    data: state.task.present.data,
    error: state.task.present.error,
    canUndo: state.task.past.length > 0,
    canRedo: state.task.future.length > 0
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    replaceTask: (id, taskID, data) => dispatch(replaceTask(id, taskID, data)),
    setTitle: (title) => dispatch(setTitle(title)),
    setBody: (body) => dispatch(setBody(body)),
    setDone: (done) => dispatch(setDone(done)),
    onUndo: (e) => {
      e.preventDefault();
      dispatch(UndoActionCreators.undo());
    },
    onRedo: (e) => {
      e.preventDefault();
      dispatch(UndoActionCreators.redo());
    },
    onClearHistory: (e) => {
      dispatch(UndoActionCreators.clearHistory());
  } 
	};
};

class EditNote extends Component {

  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        taskID: PropTypes.number.isRequired,
        userID: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
      }),
      PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        taskID: PropTypes.number.isRequired,
        userID: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
      })),
    ]).isRequired,
    replaceTask: PropTypes.func.isRequired,
    setTitle: PropTypes.func,
    setBody: PropTypes.func,
    setDone: PropTypes.func
 }

 constructor(props) {
  super(props);
  this.onFieldChange = this.onFieldChange.bind(this);
}

 componentWillMount() {
  this.props.navigation.setParams({
      'onRight': this.onSaveNote,
      'onLeft': this.onClose
  })
}

componentDidMount() {
  this.props.navigation.setParams({ onClose: () => this.onClose(),
    onSaveNote: () => this.onSaveNote()
  })
}

static navigationOptions = ({ navigation  }) => ({
  title: "Edit Note",
  headerLeft: (
    <Button
      onPress={() => navigation.state.params.onClose()}
      title="Close"
    />
  ),
  headerRight: (
    <Button
      onPress={() => navigation.state.params.onSaveNote()}
      title="Add Note"
    />
  )
})

onSaveNote = () => {
  let data = {
    title: this.props.data.title,
    body: this.props.data.body,
    done: this.props.data.done
  };

  this.props.replaceTask(localStorage.getItem('userID'), this.props.data.taskID, data)
  this.props.onClearHistory();
  this.props.navigation.push('Notes');
}

onClose = () =>{
  Alert.alert(
    'Is exit without saving?',
    '',
    [
      {text: 'Cancel', onPress: () => {}, style: 'cancel'},
      {text: 'OK', onPress: () => {
        this.props.onClearHistory();
        this.props.navigation.push('Notes');;
      }},
    ],
    { cancelable: false }
  );
}

 onFieldChange(fieldName, e) {
  if (fieldName == 'titleField') {
    this.props.setTitle(e);
  } else  {
    this.props.setBody(e);
  }
}

  render() {

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textField}
          autoFocus={true}
          onChangeText={this.onFieldChange.bind(this, 'titleField')} 
          placeholder='Заголовок'
          ref='email'
          value={this.props.data.title}
        />
        <TextInput
          style={styles.textField}
          multiline = {true}
          onChangeText={this.onFieldChange.bind(this, 'bodyField')}
          placeholder='Содержимое заметки'
          ref='password' 
          value={this.props.data.body}
        />
        <Switch 
            onValueChange={(value) => {this.props.setDone(value)}} 
            value={this.props.data.done} 
          />
        <Button
          onPress={this.props.onUndo}
          title={'Отменить'}
          color="#007DDC"
          disabled={!this.props.canUndo}
        />
        <Button
          onPress={this.props.onRedo}
          title={'Повторить'}
          color="#007DDC"
          disabled={!this.props.canRedo}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);