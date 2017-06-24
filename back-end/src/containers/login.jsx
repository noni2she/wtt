import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLoginAuthSubmit } from '../actions/login';

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
    this.props.onLoginAuthSubmit(this.state);
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
    return(
      <div className="container">
        <form className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <label className="sr-only">Email address</label>
          <input 
            id="inputEmail"
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address" 
            onChange={this.onFormChange}
            value={this.state.email}
          />
          <label className="sr-only">Password</label>
          <input 
            id="inputPassword"
            name="password"
            type="password"
            className="form-control"
            placeholder="Password" 
            onChange={this.onFormChange}
            value={this.state.password}
          />
          <button
            onClick={this.onSubmit}
            className="btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div> 
    )
  }
}

export default connect(null, { onLoginAuthSubmit })(Login);