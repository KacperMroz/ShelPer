import React from 'react';
import CheckBoxes from '../AnimalSpec/CheckBoxes';
import Color from '../AnimalSpec/Color';
import Input from '../AnimalSpec/Input';
import Photo from '../AnimalSpec/Photo';
import { animalTypes, sexTypes, sizeTypes } from './utils';
import './Form.css';

const Form = () => {
  const [type, setType] = React.useState('dog');
  const [sex, setSex] = React.useState(false);
  const [color, setColor] = React.useState('black');
  const [size, setSize] = React.useState('small');
  const [age, setAge] = React.useState('');
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [photo, setPhoto] = React.useState([]);
  const [healthy, setHealthy] = React.useState(true);
  const [error, setError] = React.useState('');
  const formData = new FormData();

  const handleInputChange = (e, set) => {
    set(e.target.value);
  };

  const handleFileInput = (e) => {
    setPhoto([...photo, ...e.target.files]);
  };

  const formDataStatic = {
    name: 'Michał',
    age: '3',
    weight: '5',
    description: 'Lorem ipsum',
    healthy: true,
    male: false,
    color: 'red',
    breed_id: 5,
    size_id: 2,
    animal_type_id: 1,
  };

  const addAnimal = async () => {
    try {
      const response = await fetch('/animal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataStatic),
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
    formData.append('name', name);
    formData.append('age', age);
    formData.append('weight', weight);
    formData.append('description', description);
    formData.append('healthy', healthy);
    formData.append('male', sex);
    formData.append('color', color);
    formData.append('breed_id', 1);
    formData.append('size_id', 1);
    formData.append('animal_type_id', 1);
    console.log('Form submitted ' + formData.forEach((e) => console.log(e)));
    addAnimal();
  };

  return (
    <form className="form-container">
      <CheckBoxes
        handleChange={(e) => handleInputChange(e, setType)}
        type="radio"
        name="animals"
        value={type}
        data={animalTypes}
      />
      <CheckBoxes
        handleChange={(e) => handleInputChange(e, setSex)}
        name="sex"
        type="radio"
        value={sex}
        data={sexTypes}
      />
      <Color handleColorChange={(e) => handleInputChange(e, setColor)} type="radio" />
      <CheckBoxes
        handleChange={(e) => handleInputChange(e, setSize)}
        type="radio"
        name="size"
        value={size}
        data={sizeTypes}
      />
      <Input
        type="text"
        value={age}
        handleChange={(e) => setAge(e.target.value)}
        placeholder={'Podaj wiek zwierzaka'}
      />
      <Input
        type="text"
        value={name}
        handleChange={(e) => setName(e.target.value)}
        placeholder={'Podaj imie zwierzaka'}
      />
      <Input
        type="text"
        value={weight}
        handleChange={(e) => setWeight(e.target.value)}
        placeholder={'Podaj wagę zwierzaka (kg)'}
      />
      <textarea
        className="textarea"
        onChange={(e) => setDescription(e.target.value)}
        placeholder={'Opis zwierzaka'}
      />
      <div>
        <Photo value={photo} handlePhotoInput={handleFileInput} />
        {photo.length === 0 && <p>Zdjęcia</p>}
        {photo.map((x) => (
          <div className="file-preview" key={x.name}>
            {x.name}
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
