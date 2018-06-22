import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../framework/actions/Actions';

const mapStateToProps = (state) => {
	return {
        id: state.task.present.id,
        task: state.task.present.task,
		error: state.task.present.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        addTaskFromForm: (data) => dispatch(addTask(data))
	};
};

class AddNote extends Component {

    static propTypes = {
        id: PropTypes.string,
        addTaskFromForm: PropTypes.func.isRequired,
        task: PropTypes.object.isRequired,
        error: PropTypes.string.isRequired
     }

    constructor(props) {
		super(props);
        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);  
        this.onBtnCloseClickHandler = this.onBtnCloseClickHandler.bind(this);
    }

    componentWillReceiveProps(props) {	
		if (props.task) {
			this.props.history.push('/notes');
		} else {
            alert("Ошибка при добавлении заметки")
        }
	}

    onBtnClickHandler(e) {
		e.preventDefault();

        let data = {
            title: this.refs.titleNote.value,
            body: this.refs.bodyNote.value
              };

          this.props.addTaskFromForm(data)
	}

	onBtnCloseClickHandler(e) {
		e.preventDefault();
    let isClosed = window.confirm('Закрыть без сохранения?');

    if (isClosed) {
        this.props.history.push('/notes');
    } 
	}

  render() {

    return (
      <form className='add cf'>
      <input
        type='text'
        className='email'
        placeholder='Заголовок'
        ref='titleNote'
       // value={this.state.value}
      />
      <textarea
						className='email'
						placeholder='Содержимое заметки'
						ref='bodyNote'
			></textarea>
      <button
              className='add__btn'
              onClick={this.onBtnClickHandler}
              ref='alert_button'>
              Добавить заметку
      </button>
      <button
              className='add__btn'
              onClick={this.onBtnCloseClickHandler}
              ref='alert_button'>
              Закрыть
      </button>
    </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);