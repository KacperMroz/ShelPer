import React, {useState} from 'react';
import CheckBoxes from '../AnimalSpec/CheckBoxes';
import Color from '../AnimalSpec/Color';
import Input from '../AnimalSpec/Input';
import Photo from '../AnimalSpec/Photo';
import {healthyTypes, sexTypes} from './utils';
import './Form.css';
import {useNavigate} from 'react-router-dom';
import useFetchGetParam from "../../hooks/useFetchGetParam";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
    const navigate = useNavigate();
    const [photo, setPhoto] = React.useState('');
    const [error, setError] = React.useState('Please fill in all fields');
    const [validated, setValidated] = React.useState(false);
    const [sizes, setSizes] = useState('');
    const [loading3, setLoading3] = useState(true);
    const [hasError3, setError3] = useState(false);
    const [type, setType] = useState('');
    const [loading2, setLoading2] = useState(true);
    const [hasError2, setError2] = useState(false);
    const [model, setModel] = React.useState({
        name: '',
        age: '',
        weight: '',
        description: '',
        healthy: 1,
        male: 1,
        color: '',
        breed_id: 1,
        size_id: 1,
        animal_type_id: '',
    });

    useFetchGetParam('/sizes', setSizes, setLoading3, setError3);
    useFetchGetParam('/types', setType, setLoading2, setError2);

    const reformatData = (arrays) => {
        return arrays.map((data) => {
            return {
                name: data.size_id,
                label: data.name,
            };
        });
    }

    const addEmojiToTypeNames = (newArray) => {
        newArray.map((data) => {
            if (data.label === 'Kot')
                data.label = data.label + ' 🐱';
            if (data.label === 'Pies')
                data.label = data.label + ' 🐶';
            if (data.label === 'Inne')
                data.label = data.label + ' 🐹';
        });
    }

    const reformatDataType = (arrays) => {
        const newArray =  arrays.map((data) => {
            return {
                name: data.animal_type_id,
                label: data.name,
            };
        });
        addEmojiToTypeNames(newArray);
        return newArray;
    }

    const handleFileInput = (e) => {
        setPhoto(e.target.files[0]);
    };

    const addAnimal = async (fetchData, photo) => {
        try {
            let formData = new FormData();
            formData.set("Info", JSON.stringify(fetchData))
            formData.set("Photo", photo)
            const response = await fetch('/animal', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data.message) {
                setError(data.message);
            }
            else navigate('/animals');
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validated) {
            addAnimal(model, photo);
        } else alert(error);

    };

    const handleChange = (e) => {
        checkIfNumber(e);
        checkIfNotEmpty();
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
        <>
            { !loading3 && !loading2 ?
                <>
                    <form className="form-container">
                        <CheckBoxes
                            handleChange={handleChange}
                            type="radio"
                            name="animal_type_id"
                            value={model.type}
                            data={reformatDataType(type)}
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
                            data={reformatData(sizes)}
                        />
                        <CheckBoxes
                            handleChange={handleChange}
                            type="radio"
                            name="healthy"
                            value={model.healthy}
                            data={healthyTypes}
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

                        <div id="file" className="custom-file-upload">
                            <label htmlFor="file-custom" id="label-file">
                                <FontAwesomeIcon icon={faPlus} />
                                {photo === '' && <div className="file-name">Zdjęcie</div>}
                                {photo !== '' && <div className="file-name">{photo.name.toString()}</div>}
                            </label>
                            <input id="file-custom" name="file" type="file" onChange={e => handleFileInput(e)}/>
                        </div>
                        <button type="submit" className="log-sign-button" onClick={handleSubmit}>
                            Dodaj ogłoszenie
                        </button>
                    </form>
                </> : null }
        </>
    );
};

export default Form;