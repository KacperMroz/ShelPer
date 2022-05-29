import React from 'react';

const Location = props => {
  return (
    <div className='location'>
      <input
        type={props.type}
        name='location'
        placeholder='Podaj lokalizację'
        onChange={props.handleLocalizationChange}
      />
    </div>
  );
};

export default Location;
