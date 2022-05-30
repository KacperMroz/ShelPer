import React, { useState } from 'react';
import NavBar from '../NavBar';
import Filter from '../Animals/Filter';
import './Animals.css';
import FetchAnimals from '../Animals/FetchAnimals';

const Animals = () => {
  const [data, setData] = useState('');
  const [filters, setFilters] = useState({});
  const [order, setOrder] = useState('Najnowsze');

  return (
    <div className='animals-base-container'>
      <NavBar />
      <div className='animals-content-container'>
        <Filter onSetFilters={setFilters} onSetOrder={setOrder} />
        <div className={'container'}>
          <FetchAnimals
            url={'/animals'}
            onLoadData={setData}
            filters={filters}
            order={order}
          />
        </div>
      </div>
    </div>
  );
};

export default Animals;
