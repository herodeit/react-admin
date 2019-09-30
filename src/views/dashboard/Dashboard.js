import React, { Component } from 'react'
import { withTranslation } from "react-i18next"

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="col-lg-4">

            <div className="card bg-teal-400">
              <div className="card-body">
                <div className="d-flex">
                  <h3 className="font-weight-semibold mb-0">3,450</h3>
                  <span className="badge bg-teal-800 badge-pill align-self-center ml-auto">+53,6%</span>
                </div>

                <div>
                  Members online
                  <div className="font-size-sm opacity-75">489 avg</div>
                </div>
              </div>

              <div className="container-fluid">
                <div id="members-online"/>
              </div>
            </div>

          </div>

          <div className="col-lg-4">

            <div className="card bg-pink-400">
              <div className="card-body">
                <div className="d-flex">
                  <h3 className="font-weight-semibold mb-0">49.4%</h3>
                  <div className="list-icons ml-auto">
                    <div className="list-icons-item dropdown">
                      <a href="#" className="list-icons-item dropdown-toggle" data-toggle="dropdown"><i
                        className="icon-cog3"/></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item"><i className="icon-sync"/> Update data</a>
                        <a href="#" className="dropdown-item"><i className="icon-list-unordered"/> Detailed log</a>
                        <a href="#" className="dropdown-item"><i className="icon-pie5"/> Statistics</a>
                        <a href="#" className="dropdown-item"><i className="icon-cross3"/> Clear list</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  Current server load
                  <div className="font-size-sm opacity-75">34.6% avg</div>
                </div>
              </div>

              <div id="server-load"/>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card bg-blue-400">
              <div className="card-body">
                <div className="d-flex">
                  <h3 className="font-weight-semibold mb-0">$18,390</h3>
                  <div className="list-icons ml-auto">
                    <a className="list-icons-item" data-action="reload"/>
                  </div>
                </div>

                <div>
                  Today's revenue
                  <div className="font-size-sm opacity-75">$37,578 avg</div>
                </div>
              </div>

              <div id="today-revenue"/>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default withTranslation()(Dashboard)
