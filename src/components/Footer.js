import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
        <footer className="blue lighten-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">This is a footer</h5>
                <p className="grey-text text-lighten-4"></p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Hey</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Wow</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Okay</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 Copyright Mom Industries
            
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer;