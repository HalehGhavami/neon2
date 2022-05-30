import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = {
    users: [],
  };
  //axios return a promise
  async componentDidMount() {
    const response = await axios.get('https://reqres.in/api/users');
    console.log(response);
    this.setState({ users: response.data.data });
  }
  render() {
    return (
      <>
        <button onClick={this.handleCreate} className="btn btn-lg btn-primary">
          Create
        </button>
        <div className="row ">
          {this.state.users.map((user) => {
            return (
              <div key={user.id} className="col-4 text-center p-5">
                <img
                  src={user.avatar}
                  style={{ borderRadius: '50%', width: '100px' }}
                  alt="avatar"
                />
                <h4>
                  {user.first_name} {user.last_name}
                </h4>
                <h5>{user.email}</h5>
                <div className="row">
                  <div className="col-6">
                    <button
                      onClick={this.handleUpdate}
                      className="btn btn-sm btn-info"
                    >
                      Update
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      onClick={this.handleDelete}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  handleCreate = () => {};

  handleUpdate = (user) => {};

  handleDelete = (user) => {};
}

export default Users;
