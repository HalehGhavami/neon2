//for sending req to server to ask user details
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function User() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(response.data.data);
    };
    fetchData();
  });

  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <>
      <img
        src={user.avatar}
        style={{ borderRadius: '50%', width: '100px' }}
        alt="avatar"
      />
      <h5 to={`/users/${user.id}`}>
        <div>
          {user.first_name} {user.last_name}
        </div>
      </h5>
      <h5>{user.email}</h5>
    </>
  );
}
