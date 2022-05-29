import { useState } from 'react';
import Form from './Form';

const Filter = () => {
  const [filter, setFilter] = useState(false);
  const [order, setOrder] = useState('Najnowsze');

  const toggleFilter = () => {
    setFilter(!filter);
  };

  const handleOrderChange = e => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <button className='btn btn-primary' onClick={toggleFilter}>
        Pokaż filtry
      </button>
      {filter && (
        <>
          <Form />
        </>
      )}
      <select className='order' onChange={handleOrderChange}>
        <option>Najnowsze</option>
        <option>Najstarsze</option>
      </select>
    </div>
  );
};

export default Filter;
