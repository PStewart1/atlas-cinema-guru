import './dashboard.css';
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../../components/navigation/Header';

function Dashboard({ userUsername, setIsLoggedIn }) {

  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

Dashboard.propTypes = {
  userUsername: PropTypes.string,
  setIsLoggedIn: PropTypes.func,
}

export default Dashboard