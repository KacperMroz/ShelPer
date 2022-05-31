import React, { useState } from 'react';
import NavBar from '../NavBar';
import Filter from '../Animals/Filter';
import './Animals.css';
import FetchFavourites from '../Animals/FetchFavourites';
import './Favourites.css';

const Favourites = () => {
  const [filters, setFilters] = useState('');
  const [order, setOrder] = useState('Najnowsze');

  return (
    <div className='animals-base-container'>
      <NavBar />
      <div className='animals-content-container'>
        {/*<Filter onSetFilters={setFilters} onSetOrder={setOrder} />*/}
        <div className={'container'}>
          <FetchFavourites url={'/favourites'} />
        </div>
      </div>
    </div>
  );
};

export default Favourites;
