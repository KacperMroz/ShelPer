import React from 'react';
import {Button} from "../UI/Button";
import FormType from "./FormType";
import FormSex from "./FormSex";
import FormLocation from "./FormLocation";
import FormColor from "./FormColor";

const Form = () => {
    const [type, setType] = React.useState([]);
    const [sex, setSex] = React.useState([]);
    const [localization, setLocalization] = React.useState('');
    const [color, setColor] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }

    const handleTypeChange = (e) => {
        if (e.target.checked) {
            setType([...type, e.target.value]);
        } else {
            setType(type.filter(type => type !== e.target.value));
        }
    }

    const handleSexChange = (e) => {
        if (e.target.checked) {
            setSex([...sex, e.target.value]);
        } else {
            setSex(type.filter(sex => sex !== e.target.value));
        }
    }

    const handleLocalizationChange = (e) => {
        setLocalization(e.target.value);
    }

    const handleColorChange = (e) => {
        if (e.target.checked) {
            setColor([...color, e.target.value]);
        } else {
            setColor(type.filter(color => color !== e.target.value));
        }
    }

    return (
        <form>
            <FormType handleTypeChange={handleTypeChange}/>
            <FormSex handleSexChange={handleSexChange} />
            <FormLocation handleLocalizationChange={handleLocalizationChange} />
            <FormColor handleColorChange={handleColorChange}/>
            <button type="submit" onClick={handleSubmit}>Wyszukaj</button>
        </form>
    );
};

export default Form;
