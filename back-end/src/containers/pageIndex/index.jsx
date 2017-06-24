import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';

// Component
import NavBar from '../../components/common/navBar.jsx';

class PageIndex extends Component {
  render() {
    return (
      <div className="App container-with-nav-bar" >
        <NavBar />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default PageIndex;
