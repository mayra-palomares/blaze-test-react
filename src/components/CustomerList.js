import React, {Component} from 'react';
import './../styles/App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from 'axios'

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "First Name", field: "firstName", sortable: true, filter: true
      }, {
        headerName: "Last Name", field: "lastName", sortable: true, filter: true
      }, {
        headerName: "Email", field: "email", sortable: true, filter: true
      },
      {
        headerName: "Phone Number", field: "phoneNumber"
      }],
      rowData: []
    }
  }

  componentDidMount() {
    let url = process.env.API_URL||'http://localhost:5000/'
    url = url + 'customers?limit=1000'
    axios.get(url)
    .then(response => {
      this.setState({rowData: response.data.data})})
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
        height: '500px',
        width: '600px' }}
      >
        <AgGridReact
          rowModelType="clientSide"
          pagination={true}
          paginationAutoPageSize={true}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}


export default CustomerList;
