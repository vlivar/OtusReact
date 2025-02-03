import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

const loginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
      dispatch(login({ username: credentials.username }));
      navigate('/');
  };

  return (
    <div className="login">
      <h1>LoginPage</h1>
      <input type="text" name="username" placeholder="Username" value={credentials.username} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default loginPage;