import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Nav{''}
        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
      </a>
    </nav>
            </div>
        )
    }
}
