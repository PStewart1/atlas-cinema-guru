import './components.css';
// import PropTypes from 'prop-types';
import React from 'react';

const Activity = ({ username, title,  date}) => {
  return (
    <div className="activity">
      <span>{username} </span>
      <span>added </span>
      <span>{title} </span>
      <span>to watch later - {date}</span>
    </div>
  );
}

export default Activity
