import React from 'react';
import Type from "../AnimalSpec/Type";
import Sex from "../AnimalSpec/Sex";
import Color from "../AnimalSpec/Color";
import Size from "../AnimalSpec/Size";
import Photo from "../AnimalSpec/Photo";

const Form = () => {
    const [type, setType] = React.useState('');
    const [sex, setSex] = React.useState('');
    const [color, setColor] = React.useState('');
    const [size, setSize] = React.useState('');
    const [age, setAge] = React.useState('');
    const [name, setName] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [photo, setPhoto] = React.useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }

    const handleInputChange = (e, set) => {
        set(e.target.value);
    }

    const handleFileInput = (e) => {
        console.log(e.target.files);
        setPhoto([...photo, ...e.target.files]);
    };

    return (
        <form>
            <Type handleTypeChange={(e) => handleInputChange(e, setType)}type="radio" />
            <Sex handleSexChange={(e) => handleInputChange(e, setSex)} type="radio" />
            <Color handleColorChange={(e) => handleInputChange(e, setColor)} type="radio" />
            <Size handleSizeChange = {(e) => handleInputChange(e, setSize)} type="radio" />
            <input type="text" onChange={e => setAge(e.target.value)}  placeholder={"Podaj wiek zwierzaka"}/>
            <input type="text" onChange={e => setName(e.target.value)} placeholder={"Podaj imie zwierzaka"}/>
            <input type="text" onChange={e => setWeight(e.target.value)} placeholder={"Podaj wagę zwierzaka (kg)"}/>
            <textarea type="text" onChange={e => setDescription(e.target.value)} placeholder={"Opis zwierzaka"}/>
            <div>
                <Photo value={photo} handlePhotoInput={handleFileInput} />
                {photo.length === 0 && <p>Zdjęcia</p>}
                {photo.map(x =>
                    <div className="file-preview" key={x.name}> {x.name} </div>
                )}
            </div>

            <button type="submit" onClick={handleSubmit}>Dodaj ogłoszenie</button>
        </form>
    );
};

export default Form;
