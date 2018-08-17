import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class UserList extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    axios
      .get('/api/user')
      .then((response) => {
        this.setState({ users: response.data });
      });
  }

  render() {
    return (
      <table className="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Tel</th>
          <th>Address</th>
          <th>actions</th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.tel}</td>
              <td>{u.address}</td>
              <td>
                <a href={`/user/${u.id}`}>show</a>
                <a href={`/user/${u.id}`}>edit</a>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    );
  }
}
