import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import Navbar from './navbar'

export default class layout extends Component {
  render () {
    return (
      <div>
        {/* Receives the pageTitle props from the page and passes it to the header component  */}
        <Header pageTitle={this.props.pageTitle} />
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
