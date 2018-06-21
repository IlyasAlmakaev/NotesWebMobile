import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { authorizeRequest, setUserID } from '../../framework/actions/Actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
	return {
		items: state.user.data,
		error: state.user.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url, user) => dispatch(authorizeRequest(url, user)),
		setUserIDFromForm: (id) => dispatch(setUserID(id))
	};
};

class AuthorizeTemplate extends Component {

	constructor(props) {
		super(props);
		this.state = {emailIsEmpty: true,
					  passwordIsEmpty: true};
		this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
		this.onBtnGoClickHandler = this.onBtnGoClickHandler.bind(this);
		this.onFieldChange = this.onFieldChange.bind(this);			  
	}

	static propTypes = {
		fetchData: PropTypes.func.isRequired,
		setUserID: PropTypes.func,
		items: PropTypes.object.isRequired,
		error: PropTypes.string.isRequired
	 }

	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.email).focus();
	}

	componentWillReceiveProps(props) {	
		console.log("itt " + props.items.id + "err" + props.error);
		if (props.error) {
			alert(props.error)
		} else if (props.items) {
			
			this.props.history.push(this.props.nextForm);

			if (this.props.nextForm === "/notes") {
				console.log("itt11 " + props.items.id + "err" + props.error);
				props.setUserIDFromForm(props.items.id);
				localStorage.setItem('userID', props.items.id);
			}
		}
	}

	onBtnClickHandler(e) {
		e.preventDefault();

		let user = {
			email: this.refs.email.value,
			password: this.refs.password.value
		};

		this.props.fetchData(this.props.apiUrl, user)
	}

	onBtnGoClickHandler(e) {
		e.preventDefault();

		this.props.history.push(this.props.navigateAddress);
	}

	onFieldChange(fieldName, e) {
		this.setState({[fieldName]: !e.target.value.trim().length})
	}

  render() {

    var emailIsEmpty = this.state.emailIsEmpty,
      passwordIsEmpty = this.state.passwordIsEmpty;

    return (
      <form className='add cf'>
				<input
					type='text'
					className='email'
					onChange={this.onFieldChange.bind(this, 'emailIsEmpty')}
					placeholder='Электронная почта'
					ref='email'
					value={this.state.value}
				/>
				<input
					type='text'
					className='password'
					onChange={this.onFieldChange.bind(this, 'passwordIsEmpty')}
					placeholder='Пароль'
					ref='password'
					value={this.state.value}
				/>
				<button
								className='add__btn'
								onClick={this.onBtnClickHandler}
								ref='alert_button'
								disabled={emailIsEmpty || passwordIsEmpty}>
								{this.props.firstNameButton}
				</button>
				<button
								className='add__btn'
								onClick={this.onBtnGoClickHandler}
								ref='alert_button'>
								{this.props.secondNameButton}
				</button>
			</form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizeTemplate);