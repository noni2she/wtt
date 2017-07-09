import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render () {
    const {header, description} = this.props.about;
    return (
      <div id="about" className="container-fluid">
        <Link to={'/edit/about'}>
          <div className="about-container col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="about-title">
                <h1>{header}</h1>
              </div>
              <div className="about-content">
                <p>{description}</p>
              </div>
          </div>
        </Link>
      </div>
    );
  }
}
