import React from 'react';
import Type from '../AnimalSpec/Type';
import Sex from '../AnimalSpec/Sex';
import Color from '../AnimalSpec/Color';
import Size from '../AnimalSpec/Size';
import Photo from '../AnimalSpec/Photo';

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
            <Type
                handleTypeChange = {handleChange}
                type='radio'
            />
            <Sex handleSexChange = {handleChange}
                 type='radio' />
            <Color
                handleColorChange = {handleChange}
                type='radio'
            />
            <Size
                handleSizeChange = {handleChange}
                type='radio'
            />
            <input
                name={'age'}
                type='text'
                onChange={handleChange}
                placeholder={'Podaj wiek zwierzaka'}
                required={true}
            />
            <input
                name={'name'}
                type='text'
                onChange={handleChange}
                placeholder={'Podaj imie zwierzaka'}
                required={true}
            />
            <input
                name={'weight'}
                type='text'
                onChange={handleChange}
                placeholder={'Podaj wagę zwierzaka (kg)'}
                required={true}
            />
            <textarea
                name={'description'}
                onChange={handleChange}
                placeholder={'Opis zwierzaka'}
                required={true}
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
