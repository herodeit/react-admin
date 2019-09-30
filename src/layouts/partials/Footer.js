import React, { PureComponent } from 'react'
import { Link } from "react-router-dom"

class Footer extends PureComponent {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="text-center d-lg-none w-100">
          <button type="button" className="navbar-toggler dropdown-toggle" data-toggle="collapse"
                  data-target="#navbar-footer">
            <i className="icon-unfold mr-2"/>
            Footer
          </button>
        </div>

        <div className="navbar-collapse collapse" id="navbar-footer">
          <span className="navbar-text">&copy; 2015 - 2018.
            <Link to="#">Limitless Web App Kit</Link> by
            <Link to="http://themeforest.net/user/Kopyov" target="_blank">Eugene Kopyov</Link>
          </span>

          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item">
              <Link to="https://kopyov.ticksy.com/" className="navbar-nav-link"
                    target="_blank"><i
                className="icon-lifebuoy mr-2"/> Support
              </Link></li>
            <li className="nav-item">
              <Link to="http://demo.interface.club/limitless/docs/" className="navbar-nav-link" target="_blank">
                <i className="icon-file-text2 mr-2"/> Docs
              </Link>
            </li>

            <li className="nav-item">
              <Link to="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328?ref=kopyov"
                    className="navbar-nav-link font-weight-semibold">
                <span className="text-pink-400"><i className="icon-cart2 mr-2"/> Purchase</span></Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
