import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ImgItem from 'components/common/imgItem.jsx';

import facebookLogo from 'img/contact/facebook.png';
import contactLogo from 'img/contact/talk.png';
import skypeLogo from 'img/contact/skype.png';

export default class Contact extends Component {
  render () {
    const {
      header, subheader, subImg, company,
      phone, fax, email, location, mainImg
    } = this.props.contact;
    return (
      <div id="contact" className="container">
        <Link to={'/edit/contact/header'}>
          <div className="contact-title">
            <h2>{header}</h2>
            <p>{subheader}</p>
          </div>
        </Link>
        <Link to={'/edit/contact'}>
          <div className="company-information row">
            <div className="company-introduction col-lg-4">
              <div className="company-introduction-container">
                <div className="company-introduction-mainImg">
                  <ImgItem imgItem={subImg} />
                </div>
                <div className="company-introduction-info">
                  <h4 className="company-name">{company}</h4>
                  <ul className="list-unstyled">
                    <li>
                      <p>
                        <i className="glyphicon glyphicon-earphone" />
                        {phone}
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="glyphicon glyphicon-print" />
                        {fax}
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="glyphicon glyphicon-envelope" />
                        {email}
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="glyphicon glyphicon-map-marker" />
                        {location}
                      </p>
                    </li>
                    <li>
                      <div className="icon-container">
                        <div className="icon">
                          <img src={contactLogo} alt="contact us"/>
                        </div>
                        <div className="icon">
                          <img src={facebookLogo} alt="facebook"/>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="company-map col-lg-8">
              <ImgItem imgItem={mainImg} />
            </div>
          </div>
        </Link>
      </div>
    );
  }  
}

Contact.propTypes = {
  contact: PropTypes.object
};
