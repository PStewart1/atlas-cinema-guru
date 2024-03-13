import 'general.css';
import PropTypes from 'prop-types';
import React from 'react';

function SelectInput({ label, options, className, value, setValue }) {
  return (
    <div className={`input-container ${className}`}>
      {label && <label>{label}</label>}
      <select
        className={className}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  className: PropTypes.string,
  value: PropTypes.any,
  setValue: PropTypes.func,
}

export default SelectInput
