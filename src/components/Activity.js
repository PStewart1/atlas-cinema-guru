import "./components.css";
import PropTypes from "prop-types";
import React from "react";

const Activity = ({ username, title, list, date }) => {
  return (
    <div className="activity">
      <li>
        {username} added {title} to {list} - {date}
      </li>
    </div>
  );
};

Activity.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string,
  list: PropTypes.string,
  date: PropTypes.string,
};

export default Activity;
