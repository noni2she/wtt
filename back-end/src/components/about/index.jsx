import React, { Component } from 'react';

export default class About extends Component {
  render () {
    const about = this.props.about;
    return (
      <div id="about-div">
        <div className="about-container">
          <div className="about-title">
            <h1>{about.header}</h1>
          </div>
          <div className="about-content">
            <p>{about.description}</p>
          </div>
        </div>
      </div>
    );
  }  
}

