import './auth.css';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';
import { faUser, faKey, faPlus } from '@fortawesome/free-solid-svg-icons';

function Login({ username, password, setUsername, setPassword }) {
  return (
    <div className="login">
      <h1>Sign in with your account</h1>
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
      <Button label="Sign In" icon={faPlus} className="squareButton" />
    </div>
  )
}

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
}

export default Login