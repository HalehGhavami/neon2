import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                <Link to={`/users/${user.id}`}>
                  <h4>
                    {user.first_name} {user.last_name}
                  </h4>
                </Link>
                <h5>{user.email}</h5>
                <div className="row">
                  <div className="col-6">
                    <button
                      onClick={() => {
                        this.handleUpdate(user);
                      }}
                      className="btn btn-sm btn-info"
                    >
                      Update
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      onClick={() => {
                        this.handleDelete(user);
                      }}
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
  handleCreate = async () => {
    const newUser = {
      first_name: 'Haleh',
      last_name: 'Ghavami',
      email: 'hg030156@gmil.com',
      avatar:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    };

    const response = await axios.post('https://reqres.in/api/users', newUser);
    //adding new user to our prev.state
    this.setState({ users: [...this.state.users, newUser] });
    console.log(response.data);
  };

  handleUpdate = async (user) => {
    user.first_name = 'Update';
    const response = await axios.put(
      `https://reqres.in/api/users/${user.id}`,
      user
    );
    console.log(response);
    //we used fake api and we have to implement our updates manually in state array
    const updatedUsers = [...this.state.users];
    const index = updatedUsers.indexOf(user);
    updatedUsers[index] = { ...user };
    this.setState({ users: updatedUsers });
  };

  handleDelete = async (user) => {
    const response = await axios.delete(
      `https://reqres.in/api/users/${user.id}`
    );
    const newUsers = this.state.users.filter((u) => u.id !== user.id);
    this.setState({ users: newUsers });
    console.log(response);
  };
}

export default Users;
