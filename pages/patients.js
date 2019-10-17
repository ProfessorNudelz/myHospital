import React, { Component } from "react"
import Layout from '../components/layout'
import PatientTable from '../components/patientTable'

export default class patients extends Component {
  render() {
    return (
      <Layout pageTitle="Patients">
        <div className='row'>
          <div className='col-md-10 mx-auto table-head'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope='col'>First Name</th>
                  <th scope='col'>Last Name</th>
                  <th scope='col'>Medicare</th>
                </tr>
              </thead>
              <PatientTable />
            </table>
          </div>
        </div>
      </Layout>
    )
  }
}
