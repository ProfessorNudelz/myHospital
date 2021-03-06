import React, { Component } from 'react'
import Link from 'next/link'

export default class navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">MyHospital</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li><Link href="/">
              <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
            </Link></li>
            <li><Link href="/patients">
              <a className="nav-link" href="/patients">Patients</a>
            </Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
