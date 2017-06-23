import React from 'react';
import { getFirebase } from '../utils/firebase';

export class Login extends React.Component{
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

    const firebase = getFirebase();
    const { email, password } = this.state;
    // 
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        console.log('yes')
      })
      .catch(function(err) {
        console.log(err);
        console.log(err.message);
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

export default Login;