import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLoginAuthSubmit } from '../actions/login';
import logo from '../assets/img/oval.svg';
import PropTypes from 'prop-types';

export class Login extends Component{
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.state = {
      email: '',
      password: '',
    }
  }

  onSubmit(event) {
    event.preventDefault();

    // trigger authorization action
    // disable the button when loading
    this.props.onLoginAuthSubmit({
      ...this.state,
      loginLoading: true,
    });
  }
  onFormChange({ target }) {
    // make sure that state attribute match input field name
    if (this.state.hasOwnProperty(target.name)) {
      this.setState({
        [target.name]: target.value,
      });
    }
  }
  render() {
    const { loginLoading, loginMessage } = this.props.loginStatus;
    return(
      <div className="container">
        <form className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input 
            id="inputEmail"
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address" 
            onChange={this.onFormChange}
            value={this.state.email}
            required={true}
            autoFocus={true}
          />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input 
            id="inputPassword"
            name="password"
            type="password"
            className="form-control"
            placeholder="Password" 
            onChange={this.onFormChange}
            value={this.state.password}
            required={true}
          />
          <label className='font-danger'>
            { loginMessage ? `* ${loginMessage}` : '' }
          </label>
          <button
            onClick={this.onSubmit}
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={loginLoading}
          >
            { loginLoading ? (
               <img className="loading-oval" src={logo} alt={'loading-oval'}/>
            ) : (
              'Sign in'
            )}
          </button>
        </form>
      </div> 
    )
  }
}

Login.propTypes = {
  loginStatus: PropTypes.object.isRequired,
  onLoginAuthSubmit: PropTypes.func,
};

export default connect(null, { onLoginAuthSubmit })(Login);
            