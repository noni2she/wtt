import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default connect(null)(App);