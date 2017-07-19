import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <footer className="footer-container">
          <div className="footer-logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/techwell-74c86.appspot.com/o/footer%2FLOGO.png?alt=media&token=8dbbb444-8a94-4ecb-b32e-a0494d809004"
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
