import { useState } from 'react';
import Form from './Form';

const Filter = props => {
  const [filter, setFilter] = useState(false);
  const [order, setOrder] = useState('Najnowsze');
  const [formFilters, setFormFilters] = useState({});

  const toggleFilter = () => {
    setFilter(!filter);
  };

  const handleOrderChange = e => {
    setOrder(e.target.value);
    props.onSetOrder(e.target.value);
  };

  props.onSetFilters(formFilters);

  return (
    <div>
      <button className='btn btn-primary' onClick={toggleFilter}>
        Pokaż filtry
      </button>
      {filter && (
        <>
          <Form onChangeFormFilters={setFormFilters} />
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
