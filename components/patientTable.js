import React, { Component } from 'react'
import axios from 'axios'

export default class patientTable extends Component {
  constructor (props) {
    super(props)
    // Inital State
    this.state = { data: [] }
  }

  // Before the component is rendered, a GET request is sent to the database to fetch all of the videos and the response is set to the state.
  componentWillMount () {
    axios.get('http://localhost:4000/patients')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }

  // Maps over the state to show each row in the table
  mapper () {
    return this.state.data.map(patient => {
      return (
        <tr>
          <th scope="row">{patient.id}</th>
          <td>{patient.firstName}</td>
          <td>{patient.lastName}</td>
          <td>{patient.medicare}</td>
        </tr>
      )
    })
  }

  render () {
    return (
      <tbody>
        {this.mapper()}
      </tbody>
    )
  }
}
