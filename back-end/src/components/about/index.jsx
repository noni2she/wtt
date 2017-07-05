import React, { Component } from 'react';

export default class About extends Component {
  render () {
    const {header, description} = this.props.about;
    return (
      <div id="about">
        <div className="about-container">
          <div className="about-title">
            <h1 className="text-uppercase">{header}</h1>
          </div>
          <div className="about-content">
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }  
}
