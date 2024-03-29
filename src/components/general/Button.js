import './general.css';
import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ label, type, className, onClick, icon }) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} className="button-icon"/>}
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.object,
}

export default Button
