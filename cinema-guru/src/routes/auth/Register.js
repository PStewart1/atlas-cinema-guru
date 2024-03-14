import './auth.css';
import PropTypes from 'prop-types';
import React from 'react';
import { faKey, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';

function Register({ username, password, setUsername, setPassword }) {
  return (
    <div className="register">
      <h1>Create a new account</h1>
      <Input
        label="Username"
        type="text"
        value={username}
        setValue={setUsername}
        icon={faUser}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        setValue={setPassword}
        icon={faKey}
      />
      <Button label="Sign Up" icon={faPlus} className="register-button" />
    </div>
  )
}

Register.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
}

export default Register
