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

    const handleSubmit = e => {
        e.preventDefault();
        checkIfNotEmpty();
        validated ? addAnimal(model) : console.log(error);
    };

    const handleChange = e => {
        console.log(e.target.name);
        checkIfNumber(e);
        setModel({
            ...model,
            [e.target.name]: e.target.value,
        });
    };


    // form validation
    const checkIfNotEmpty = () => {
        const values = Object.values(model);
        const isEmpty = values.some(value => value === '');
        const isSpaces = values.some(value => value === ' ');
        if (isEmpty || isSpaces) {
            setValidated(false);
            setError('Please fill in all fields');
        } else {
            setValidated(true);
        }
    };

    const checkIfNumber = (e) => {
        const inputName = "model." + e.target.name;
        if (isNaN(eval(inputName)) && (e.target.name === 'age' || e.target.name === 'weight')) {
            setValidated(false);
            setError(e.target.name + ' not a number');
        }
    };

    return (
        <form>
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
        </form>
    );
};

export default Form;
