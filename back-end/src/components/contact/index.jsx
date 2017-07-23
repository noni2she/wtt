import React, { Component } from 'react';
import { Link } from 'react-router';
import ImgItem from 'components/common/imgItem.jsx';

export default class Contact extends Component {
  render () {
    const {
      header, subheader, subImg, company,
      phone, fax, email, location, mainImg
    } = this.props.contact;
    return (
      <div id="contact" className="container">
        <Link to={'/edit/contact/header'}>
          <div>
            <h2>{header}</h2>
            <p>{subheader}</p>
          </div>
        </Link>
        <Link to={'/edit/contact'}>
          <div className="company-information row">
            <div className="company-introduction col-lg-4">
              <div>
                <div className="company-introduction-mainImg">
                  <ImgItem imgItem={subImg} />
                </div>
                <div className="company-introduction-info">
                  <h4>{company}</h4>
                  <ul className="list-unstyled">
                    <li>
                      <span>
                        <i className="glyphicon glyphicon-earphone" />
                        {phone}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="glyphicon glyphicon-print" />
                        {fax}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="glyphicon glyphicon-envelope" />
                        {email}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="glyphicon glyphicon-map-marker" />
                        {location}
                      </span>
                    </li>
                    <li>
                      <div>
                        <img src="contact/talk.png" alt="contact us"/>
                      </div>
                      <div>
                        <img src="contact/skype.png" alt="skype"/>
                      </div>
                      <div>
                        <img src="contact/facebook.png" alt="facebook"/>
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
