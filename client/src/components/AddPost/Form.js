import React, {useEffect} from 'react';
import Type from '../AnimalSpec/Type';
import Sex from '../AnimalSpec/Sex';
import Color from '../AnimalSpec/Color';
import Size from '../AnimalSpec/Size';
import Photo from '../AnimalSpec/Photo';

const Form = () => {
  const [photo, setPhoto] = React.useState([]);
  const [error, setError] = React.useState('');
  const [model, setModel] = React.useState({
      name: '',
      age: '',
      weight: '',
      description: '',
      healthy: true,
      male: true,
      color: '',
      breed_id: 1,
      size_id: 1,
      animal_type_id: 1,
  });

  const handleFileInput = e => {
    setPhoto([...photo, ...e.target.files]);
  };

  const addAnimal = async () => {
    try {
      const response = await fetch('/animal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(model),
      });
      const data = await response.json();
      if (data.message) {
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addAnimal();
  };

  return (
    <form>
      <Type
        handleTypeChange = {e => setModel({...model, type: e.target.value})}
        type='radio'
      />
      <Sex handleSexChange = {e => setModel({...model, sex: e.target.value})}
           type='radio' />
      <Color
        handleColorChange = {e => setModel({...model, color: e.target.value})}
        type='radio'
      />
      <Size
        handleSizeChange = {e => setModel({...model, size_id: 2})}
        type='radio'
      />
      <input
        type='text'
        onChange={e => setModel({...model, age: e.target.value})}
        placeholder={'Podaj wiek zwierzaka'}
      />
      <input
        type='text'
        onChange={e => setModel({...model, name: e.target.value})}
        placeholder={'Podaj imie zwierzaka'}
      />
      <input
        type='text'
        onChange={e => setModel({...model, weight: e.target.value})}
        placeholder={'Podaj wagę zwierzaka (kg)'}
      />
      <textarea
          onChange={e => setModel({...model, description: e.target.value})}
        placeholder={'Opis zwierzaka'}
      />
      <div>
        <Photo value={photo} handlePhotoInput={handleFileInput} />
        {photo.length === 0 && <p>Zdjęcia</p>}
        {photo.map(x => (
          <div className='file-preview' key={x.name}>
            {' '}
            {x.name}{' '}
          </div>
        ))}
      </div>

      <button type='submit' onClick={handleSubmit}>
        Dodaj ogłoszenie
      </button>
    </form>
  );
};

export default Form;
