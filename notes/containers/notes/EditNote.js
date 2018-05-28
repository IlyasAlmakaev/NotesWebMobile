import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { replaceTask, setTitle, setBody } from '../../requests/Requests';
import { styles } from '../../Styles';

const mapStateToProps = (state) => {
	return {
    data: state.task.present.data,
    error: state.task.present.error,
    replacedTask: state.task.present.replacedTask,
    canUndo: state.task.past.length > 0,
    canRedo: state.task.future.length > 0
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    replaceTaskFromForm: (id, taskID, data) => dispatch(replaceTask(id, taskID, data)),
    setTitle: (title) => dispatch(setTitle(title)),
    setBody: (body) => dispatch(setBody(body)),
    onUndo: (e) => {
      e.preventDefault();
      dispatch(UndoActionCreators.undo());
    },
    onRedo: (e) => {
      e.preventDefault();
      dispatch(UndoActionCreators.redo());
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
        userID: PropTypes.string.isRequired}),
      PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        taskID: PropTypes.number.isRequired,
        userID: PropTypes.string.isRequired
      })),
    ]).isRequired,
    replaceTaskFromForm: PropTypes.func.isRequired,
    replacedTask: PropTypes.object.isRequired,
    setTitle: PropTypes.func,
    setBody: PropTypes.func
 }

 componentWillMount() {
  this.props.navigation.setParams({
      'onRight': this.onSaveNote,
      'onLeft': this.onClose
  })
}

onSaveNote() {
  alert('save note')
}

onClose() {
  Alert.alert(
    'Is exit without saving?',
    '',
    [
      {text: 'Cancel', onPress: () => {}, style: 'cancel'},
      {text: 'OK', onPress: () => Actions.replace('notes')},
    ],
    { cancelable: false }
  );
}

 onFieldChange(fieldName, e) {
  if (fieldName == 'titleField') {
    this.props.setTitle(e.target.value);
  } else  {
    this.props.setBody(e.target.value);
  }
}

  render() {

    return (
      <View style={styles.container}>
        <TextInput
          autoFocus={true}
          onChangeText={this.onFieldChange.bind(this, 'titleField')} 
          placeholder='Заголовок'
          ref='email'
          value={this.props.data.title}
        />
        <TextInput
          onChangeText={this.onFieldChange.bind(this, 'bodyField')}
          placeholder='Содержимое заметки'
          ref='password' 
          value={this.props.data.body}
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