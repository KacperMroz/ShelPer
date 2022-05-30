import React from 'react';
import CheckBoxes from '../AnimalSpec/CheckBoxes';
import Color from '../AnimalSpec/Color';
import {animalTypes, sexTypes} from "../AddPost/utils";
import './Form.css'

<<<<<<< HEAD
const Form = props => {
  const [type, setType] = useState([]);
  const [male, setMale] = useState([]);
  const [color, setColor] = useState([]);
=======
const Form = () => {
  const [type, setType] = React.useState([]);
  const [male, setMale] = React.useState([]);
  const [localization, setLocalization] = React.useState('');
  const [color, setColor] = React.useState([]);
>>>>>>> cb930ec1e528c319b8073850093af5a06ea5a32c

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const handleTypeChange = (e) => {
    if (e.target.checked) {
      setType([...type, e.target.value]);
    } else {
      setType(type.filter((type) => type !== e.target.value));
    }
  };

  const handleSexChange = (e) => {
    if (e.target.checked) {
      setMale([...male, e.target.value]);
    } else {
      setMale(type.filter((sex) => sex !== e.target.value));
    }
  };

  const handleLocalizationChange = (e) => {
    setLocalization(e.target.value);
  };

  const handleColorChange = (e) => {
    if (e.target.checked) {
      setColor([...color, e.target.value]);
    } else {
      setColor(type.filter((color) => color !== e.target.value));
    }
  };

  return (
    <form>
      <CheckBoxes handleChange={handleTypeChange}
                  type="checkbox"
                  value={type}
                  name="type"
                  data={animalTypes}/>
      <CheckBoxes handleChange={handleSexChange}
                  type="checkbox"
                  value={male}
                  data={sexTypes}
      />
<<<<<<< HEAD
      <Color handleColorChange={handleColorChange} type='checkbox' />
      <button className='button-filter' type='submit' onClick={handleSubmit}>
=======
      <Location handleLocalizationChange={handleLocalizationChange} type="checkbox" value={localization}/>
      <Color handleColorChange={handleColorChange} type="checkbox" />
      <button className='submit_btn' type="submit" onClick={handleSubmit}>
>>>>>>> cb930ec1e528c319b8073850093af5a06ea5a32c
        Wyszukaj
      </button>
    </form>
  );
};

export default Form;
