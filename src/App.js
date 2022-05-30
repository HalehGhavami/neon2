import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Users from './components/users';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import User from './components/user';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            {/* id parameter for new URL */}
            <Route path="/users/:id" element={<User />} />

            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
