import './auth.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import axios from 'axios';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [_switch, set_switch] = useState(true);

  function handleLogin(value) {
    set_switch(value);
    console.log(_switch);
    setPassword("");
    setUsername("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (_switch) {
      axios.post('http://localhost:8000/api/auth/login', {
        username: username,
        password: password,
      })
      .then(response => {
        localStorage.setItem('accessToken', response.data.accessToken);
        setIsLoggedIn(true);
        setUserUsername(username);
      })
      .catch(error => {
        console.error(error);
      });
    } else {
      axios.post('http://localhost:8000/api/auth/register', {
        username: username,
        password: password,
      })
      .then(response => {
        localStorage.setItem('accessToken', response.data.accessToken);
        setIsLoggedIn(true);
        setUserUsername(username);
      })
      .catch(error => {
        console.error(error);
      });
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        {_switch ? 
        <Login 
          username={username} 
          password={password} 
          setUsername={setUsername} 
          setPassword={setPassword} 
          /> : 
        <Register 
          username={username} 
          password={password} 
          setUsername={setUsername} 
          setPassword={setPassword} 
        />}
        <div className="switch">
          <span onClick={() => handleLogin(true)} className={_switch ? "active" : ""}>Sign in</span>
          <span onClick={() => handleLogin(false)} className={!_switch ? "active" : ""}>Sign up</span>
        </div>
      </form>
    </div>
  )
}

Authentication.propTypes = {
  setIsLoggedIn: PropTypes.func,
  setUserUsernme: PropTypes.func,
}

export default Authentication
