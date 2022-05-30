import React, { Component } from 'react';
import Navbar from './components/navbar';
import Users from './components/users';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <Users />
        </div>
      </>
    );
  }
}

export default App;
