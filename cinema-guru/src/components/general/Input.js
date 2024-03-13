import 'general.css';
import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({ label, type, className, value, setValue, icon, inputAttributes }) {
  return (
    <div className={`input-container ${className}`}>
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        {icon && <FontAwesomeIcon icon={icon} />}
        <input
          type={type}
          className={className}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...inputAttributes}
        />
      </div>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func,
  icon: PropTypes.object,
  inputAttributes: PropTypes.object,
}

export default Input
