import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <footer className="footer-container">
          <div className="footer-logo">
            <img
              src="/img/footer/logo.png"
              alt="LOGO"
            />
          </div>
          <div className="footer-description">
            <p>2017 Techwell industried co.,ltd. All</p>
          </div>
        </footer>
      </div>
    );
  }
}
