import React, { Component } from 'react';
import ImgItem from '../common/imgItem.jsx';

export default class Contact extends Component {
  render () {
    const about = this.props.about;
    return (
      <div id="contact-div" className="container">
        <div>
          <h2 className="text-uppercase" >{about.header}</h2>
          <p>{about.subheader}</p>
        </div>
        <div className="company-information">
          <div className="company-introduction col-lg-5">
            <ImgItem imgItem={about.subImg} />
            <h4>{about.company}</h4>
            <div>
              <ul className="list-unstyled">
                <li>
                  <i className="glyphicon glyphicon-earphone"></i>
                  <span>{about.phone}</span>
                </li>
                <li>
                  <i className="glyphicon glyphicon-print"></i>
                  <span>{about.fax}</span>
                </li>
                <li>
                  <i className="glyphicon glyphicon-envelope"></i>
                  <span>{about.email}</span>
                </li>
                <li>
                  <i className="glyphicon glyphicon-map-marker"></i>
                  <span>{about.location}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="company-map col-lg-7">
            <ImgItem imgItem={about.mainImg} />
          </div>
        </div>
      </div>
    );
  }  
}
