import React, { Component } from 'react';
import ImgItem from '../common/imgItem.jsx';

export default class Contact extends Component {
  render () {
    const {
      header, subheader, subImg, company,
      phone, fax, email, location, mainImg
    } = this.props.contact;
    return (
      <div id="contact" className="container">
        <div>
          <h2 className="text-uppercase" >{header}</h2>
          <p>{subheader}</p>
        </div>
        <div className="company-information">
          <div className="company-introduction col-lg-5">
            <ImgItem imgItem={subImg} />
            <h4>{company}</h4>
            <div>
              <ul className="list-unstyled">
                <li>
                  <i className="glyphicon glyphicon-earphone"></i>
                  <span>{phone}</span>
                </li>
                <li>
                  <i className="glyphicon glyphicon-print"></i>
                  <span>{fax}</span>
                </li>
                <li>
                  <i className="glyphicon glyphicon-envelope"></i>
                  <span>{email}</span>
                </li>
                <li>
                  <i className="glyphicon glyphicon-map-marker"></i>
                  <span>{location}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="company-map col-lg-7">
            <ImgItem imgItem={mainImg} />
          </div>
        </div>
      </div>
    );
  }  
}
