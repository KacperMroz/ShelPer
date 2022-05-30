import React from 'react';
import './index.css';

const Color = props => {
  const colors = ['black', 'gray', 'brown', 'ginger', 'white', 'all'];
  const colorOptions = colors.map(color => {
    return (
      <input
        key={color}
        type={props.type}
        className={`input-${color}`}
        name='color'
        value={color}
        id={color}
        onChange={props.handleColorChange}
      />
    );
  });

  return <div className='colors'>{colorOptions}</div>;
};

export default Color;
