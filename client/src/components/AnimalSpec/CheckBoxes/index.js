import React from 'react';
import './index.css';

const CheckBoxes = ({ name, value, type, handleChange, data }) => {
  const typesList = data.map((item) => {
    return (
      <input
        key={item.name}
        type={type}
        name={name}
        label={item.label}
        value={item.name}
        checked={item.name === value}
        id={item.name}
        onChange={handleChange}
      />
    );
  });

  return <div className="checkboxes">{typesList}</div>;
};

export default CheckBoxes;
