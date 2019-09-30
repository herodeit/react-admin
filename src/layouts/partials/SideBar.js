import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import placeholder from '../../assets/Template/global_assets/images/placeholders/placeholder.jpg'

class SideBar extends PureComponent {
  render() {
    return (
      <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
        <div className="sidebar-mobile-toggler text-center">
          <Link to="#" className="sidebar-mobile-main-toggle">
            <i className="icon-arrow-left8"/>
          </Link>
          Navigation
          <Link to="#" className="sidebar-mobile-expand">
            <i className="icon-screen-full"/>
            <i className="icon-screen-normal"/>
          </Link>
        </div>

        <div className="sidebar-content">

          <div className="sidebar-user-material">
            <div className="sidebar-user-material-body">
              <div className="card-body text-center">
                <a href="#">
                  <img src={placeholder} className="img-fluid rounded-circle shadow-1 mb-3" width="80" height="80"
                       alt=""/>
                </a>
                <h6 className="mb-0 text-white text-shadow-dark">Victoria Baker</h6>
                <span className="font-size-sm text-white text-shadow-dark">Santa Ana, CA</span>
              </div>

              <div className="sidebar-user-material-footer">
                <a href="#user-nav" className="d-flex justify-content-between align-items-center text-shadow-dark dropdown-toggle" data-toggle="collapse">
                  <span>My account</span>
                </a>
              </div>
            </div>

            <div className="collapse" id="user-nav">
              <ul className="nav nav-sidebar">
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="icon-user-plus"/>
                    <span>My profile</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="icon-cog5"/>
                    <span>Account settings</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="icon-switch2"/>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card card-sidebar-mobile">
            <ul className="nav nav-sidebar" data-nav-type="accordion">

              <li className="nav-item-header">
                <div className="text-uppercase font-size-xs line-height-xs">Main</div>
                <i className="icon-menu" title="Main"/></li>
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <i className="icon-home4"/>
                  <span>Dashboard<span className="d-block font-weight-normal opacity-50">No active orders</span></span>
                </a>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-users"/> <span>User management</span></a>

                <ul className="nav nav-group-sub" data-submenu-title="Layouts">
                  <li className="nav-item"><a href="#" className="nav-link">User List</a></li>
                  <li className="nav-item"><a href="#" className="nav-link active">User Create 2</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">User Detail</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar
