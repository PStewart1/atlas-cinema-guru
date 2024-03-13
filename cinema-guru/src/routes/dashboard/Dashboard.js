import './dashboard.css';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

function Dashboard({ userUsername, setIsLoggedIn }) {

  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <SideBar />
    </div>
  )
}

Dashboard.propTypes = {
  userUsername: PropTypes.string,
  setIsLoggedIn: PropTypes.func,
}

export default Dashboard