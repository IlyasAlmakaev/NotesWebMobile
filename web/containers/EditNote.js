import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { setTitle, setBody, replaceTask } from '../../framework/actions/Actions';

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
    replaceTaskFromForm: (taskID, data) => dispatch(replaceTask(taskID, data)),
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
        taskID: PropTypes.number.isRequired}),
      PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        taskID: PropTypes.number.isRequired
      })),
    ]).isRequired,
    replaceTaskFromForm: PropTypes.func.isRequired,
    setTitle: PropTypes.func,
    setBody: PropTypes.func
 }

  constructor(props) {
    super(props);
    this.onBtnEditClickHandler = this.onBtnEditClickHandler.bind(this);
    this.onBtnCloseClickHandler = this.onBtnCloseClickHandler.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
}

  onBtnEditClickHandler(e) {
    e.preventDefault();

    let data = {
      title: this.props.data.title,
      body: this.props.data.body
      };

    this.props.replaceTaskFromForm(this.props.data.taskID, data)
    this.props.history.push('/notes');
	}

	onBtnCloseClickHandler(e) {
		e.preventDefault();
    let isClosed = window.confirm('Закрыть без сохранения?');

    if (isClosed) {
      this.props.history.push('/notes');
    } 
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
      <form className='add cf'>
      <input
        type='text'
        className='email'
        onChange={this.onFieldChange.bind(this, 'titleField')}
        placeholder='Заголовок'
        value={this.props.data.title}
      />
      <textarea
						className='email'
            placeholder='Содержимое заметки'
            onChange={this.onFieldChange.bind(this, 'bodyField')}
            value={this.props.data.body}
			></textarea>
      <button
              className='add__btn'
              onClick={this.onBtnEditClickHandler}
              ref='alert_button'>
              Редактировать
      </button>
      <button
              className='add__btn'
              onClick={this.onBtnCloseClickHandler}
              ref='alert_button'>
              Закрыть
      </button>
      <button
              className='add__btn'
              onClick={this.props.onUndo}
              disabled={!this.props.canUndo}
              ref='alert_button'>
              Отменить
      </button>
      <button
              className='add__btn'
              onClick={this.props.onRedo}
              disabled={!this.props.canRedo}
              ref='alert_button'>
              Повторить
      </button>

    </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);