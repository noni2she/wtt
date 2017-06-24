import React from 'react';
import { connect } from 'react-redux';
import Login from './login.jsx';

class App extends React.Component {
  render() {
    // verify the content which user enter is login-able 
    const { loginComfirmed } = this.props.loginStatus;
    const loginFlowEnable = 
      process.env.NODE_ENV === 'development' &&
      process.env.REACT_APP_LOGIN === 'false';
     
    // if user enter the correct account and password set or disable login flow for development need
    // skip the login.
    return loginComfirmed || loginFlowEnable ? (
      <div>
        { this.props.children }
      </div>
    ) : (
      <div> 
        <Login loginStatus={this.props.loginStatus} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
export default connect(mapStateToProps)(App);