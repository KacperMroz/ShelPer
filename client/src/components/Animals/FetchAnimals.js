import Card from '../Animal/Card';
import useFetchGetParam from '../../hooks/useFetchGetParam';
import { useState, useEffect } from 'react';

const FetchAnimals = props => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [towns, setTowns] = useState('');
  const [loading2, setLoading2] = useState(true);
  const [hasError2, setError2] = useState(false);
  const [sizes, setSizes] = useState('');
  const [loading3, setLoading3] = useState(true);
  const [hasError3, setError3] = useState(false);
  useFetchGetParam(props.url, setData, setLoading, setError);
  useFetchGetParam('/towns', setTowns, setLoading2, setError2);
  useFetchGetParam('/sizes', setSizes, setLoading3, setError3);

  props.onLoadData(data);

  const returnWhenLoaded = () => {
    if (loading || loading2 || loading3) {
      return <div>Loading...</div>;
    }
    if (hasError || hasError2 || hasError3) {
      return <div>Error...</div>;
    }

    return (
      <>
        {data.map(animal => (
          <Card
            key={animal.animal_id}
            animal={animal}
            town={towns.find(town => town.town_id === animal.town_id).name}
            size={sizes.find(size => size.size_id === animal.size_id).name}
            color={animal.color}
            male={animal.male}
          />
        ))}
      </>
    );
  };
  console.log(data);

  return <>{returnWhenLoaded()}</>;
};

export default FetchAnimals;
