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
                        <img src="https://firebasestorage.googleapis.com/v0/b/techwell-74c86.appspot.com/o/contact%2Ftalk.png?alt=media&token=d32f9b2e-8583-427b-bf0f-c2e67063908a" alt=""/>
                      </div>
                      <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/techwell-74c86.appspot.com/o/contact%2FSK.png?alt=media&token=704b3e8b-83a4-4845-8f36-4784aeb45200" alt=""/>
                      </div>
                      <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/techwell-74c86.appspot.com/o/contact%2FFB.png?alt=media&token=bf7a26d2-954e-43b4-b981-61672ad6b595" alt=""/>
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
