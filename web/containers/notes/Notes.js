import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks, setUserID } from '../../../framework/actions/Actions';
import Note from './Note'

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
    getTasksFromForm: () => dispatch(getTasks())
	};
};


class NotesList extends Component {

  constructor(props) {
		super(props); 
  }

  render() {

    let data = this.props.data;
    let notesTemplate;
    let self = this;

		if (data.length > 0) {
			notesTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
						<Note data={item} history={self.props.history} index={index}/>
					</div>
				)
			})
		} else {
			notesTemplate = <p>Заметок нет</p>
		}

    return (
    <div>
    {notesTemplate}
    </div>)
  }
}

class Notes extends Component {

  static propTypes = {
    id: PropTypes.string,
    getTasksFromForm: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    task: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired
 }

  constructor(props) {
		super(props);
		this.onAddNoteBtnClickHandler = this.onAddNoteBtnClickHandler.bind(this);  
  }

  componentDidMount() {
    this.getTasksComponents();
  }

  getTasksComponents() {
    this.props.getTasksFromForm();
  }

  onAddNoteBtnClickHandler(e) {
    e.preventDefault();

    this.props.history.push('/addNote');
	}

  render() {
    let self = this;
    return (
      <form className='notes'>
        <h1>Заметки</h1>
        <NotesList data={self.props.tasks} history={self.props.history} />
        <button
          className='add__btn'
          onClick={this.onAddNoteBtnClickHandler}
          ref='alert_button'>
          Создать заметку
        </button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);