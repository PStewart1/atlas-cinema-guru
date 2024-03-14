import './navigation.css';
import React from 'react';
import PropTypes from 'prop-types';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ userUsername, setIsLoggedIn }) => {

  function logout() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false)
  }

  return (
    <nav className="header-nav">
      <h1>Cinema Guru</h1>
      <div className="user-info">
        <img src='https://picsum.photos/100/100' alt='random avatars' />
        <p className='welcome'>Welcome, {userUsername}!</p>
        <button onClick={logout} icon={faSignOutAlt} >Logout</button>
      </div>
    </nav>
  )
}

Header.propTypes = {
  userUsername: PropTypes.string,
  setIsLoggedIn: PropTypes.func,
}

export default Header
