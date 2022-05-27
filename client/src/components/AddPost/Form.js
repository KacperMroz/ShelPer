import React from 'react';
import CheckBoxes from '../AnimalSpec/CheckBoxes';
import Color from '../AnimalSpec/Color';
import Input from '../AnimalSpec/Input';
import Photo from '../AnimalSpec/Photo';
import { animalTypes, sexTypes, sizeTypes } from './utils';
import './Form.css';

const Form = () => {
  const [photo, setPhoto] = React.useState([]);
  const [error, setError] = React.useState('Please fill in all fields');
  const [validated, setValidated] = React.useState(false);
  const [model, setModel] = React.useState({
    name: '',
    type: '',
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

  const handleFileInput = (e) => {
    setPhoto([...photo, ...e.target.files]);
  };

  const addAnimal = async (fetchData) => {
    try {
      const response = await fetch('/animal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fetchData),
      });
      const data = await response.json();
      if (data.message) {
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkIfNotEmpty();
    console.log(model);
    validated ? addAnimal(model) : console.log(error);
  };

  const handleChange = (e) => {
    checkIfNumber(e);
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  };

  // form validation
  const checkIfNotEmpty = () => {
    const values = Object.values(model);
    const isEmpty = values.some((value) => value === '');
    const isSpaces = values.some((value) => value === ' ');
    if (isEmpty || isSpaces) {
      setValidated(false);
      setError('Please fill in all fields');
    } else {
      setValidated(true);
    }
  };

  const checkIfNumber = (e) => {
    const inputName = 'model.' + e.target.name;
    if (isNaN(eval(inputName)) && (e.target.name === 'age' || e.target.name === 'weight')) {
      setValidated(false);
      setError(e.target.name + ' not a number');
    }
  };

  return (
    <form className="form-container">
      <CheckBoxes
        handleChange={handleChange}
        type="radio"
        name="type"
        value={model.type}
        data={animalTypes}
      />
      <CheckBoxes
        handleChange={handleChange}
        name="male"
        type="radio"
        value={model.male}
        data={sexTypes}
      />
      <Color handleColorChange={handleChange} type="radio" />
      <CheckBoxes
        handleChange={handleChange}
        type="radio"
        name="size"
        value={model.size}
        data={sizeTypes}
      />
      <Input
        type="text"
        name="age"
        value={model.age}
        handleChange={handleChange}
        placeholder={'Podaj wiek zwierzaka'}
      />
      <Input
        type="text"
        name="name"
        value={model.name}
        handleChange={handleChange}
        placeholder={'Podaj imie zwierzaka'}
      />
      <Input
        type="text"
        name="weight"
        value={model.weight}
        handleChange={handleChange}
        placeholder={'Podaj wagę zwierzaka (kg)'}
      />
      <textarea
        className="textarea"
        name="description"
        onChange={handleChange}
        placeholder={'Opis zwierzaka'}
      />
      <div>
        <Photo value={photo} handlePhotoInput={handleFileInput} />
        {photo.length === 0 && <p>Zdjęcia</p>}
        {photo.map((x) => (
          <div className="file-preview" key={x.name}>
            {' '}
            {x.name}{' '}
          </div>
        ))}
      </div>
      <button type="submit" className="log-sign-button" onClick={handleSubmit}>
        Dodaj ogłoszenie
      </button>
    </form>
  );
};

export default Form;
