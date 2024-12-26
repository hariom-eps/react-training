import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function UsersPage() {
  const [users, setUsers] = useState(null);
  const [userCreateInProgress, setUserCreateInProgress] = useState(false);
  
  const getUserList = () => {
    console.log('Loading...')
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      console.log('Loaded...')
      console.log(response.data);
      setUsers(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  const addNewUser = () => {
    let userData = {
      "name": "Sumit",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };
    setUserCreateInProgress(true);

    axios.post('https://jsonplaceholder.typicode.com/users', userData).then((response) => {
      console.log('User created successfully!')
      setUserCreateInProgress(false);
      console.log(response.data);
      setUsers((prev) => [response.data, ...prev]);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getUserList();
  }, []);
  const handleScroll = (e) => {
    console.log(e);
  }
  return (
    <div className="container-fluid" >
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>

        <Link onClick={() => addNewUser()} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> {userCreateInProgress ? 'Please wait...' : 'Add New User'}</Link>
      </div>

      <div className="card shadow mb-4" onScroll={handleScroll}>
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            {users ? <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map((user, index) =>
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.company.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                  </tr>
                )}
              </tbody>
            </table> : 'Loading...'}
          </div>
        </div>
      </div>

    </div>
  )
}
