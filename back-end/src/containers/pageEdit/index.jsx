import React, { Component } from 'react';
import NavBar from 'components/common/navBar.jsx';

class PageEdit extends Component {
  render() {
    return (
      <div className="container-with-nav-bar">
        <NavBar />

        <div id="page-edit" className="container">
          <form>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Displayed
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFile">File input</label>
              <input type="file" id="exampleInputFile" />
              <p className="help-block">Example block-level help text here.</p>
            </div>
            
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}


export default PageEdit;
