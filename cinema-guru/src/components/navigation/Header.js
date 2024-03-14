import './navigation.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ userUsername, setIsLoggedIn }) => {
  function logout() {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  }

  return (
    <nav className="header-nav">
      <h3>Cinema Guru</h3>
      <div className="user-info">
        <img src="https://picsum.photos/100/100" alt="random avatars" />
        <p className="welcome">Welcome, {userUsername}!</p>
        <span onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <p>Logout</p>
        </span>
      </div>
    </nav>
  );
};

Header.propTypes = {
  userUsername: PropTypes.string,
  setIsLoggedIn: PropTypes.func,
}

export default Header
