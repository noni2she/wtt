import React, { Component } from 'react';

export default class About extends Component {
  render() {
    const { header, description } = this.props.about;
    return (
      <div id="about" className="container-fluid">
        <div className="about-container col-lg-10 col-md-10 col-sm-12 col-xs-12">
            <div className="about-title">
              <h1>{header}</h1>
            </div>
            <div className="about-content">
              <p>{description}</p>
            </div>
        </div>
      </div>
    );
  }
}
