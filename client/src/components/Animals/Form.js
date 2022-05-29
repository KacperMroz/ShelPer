import React from 'react';
import CheckBoxes from '../AnimalSpec/CheckBoxes';
import Color from '../AnimalSpec/Color';
import {animalTypes, sexTypes} from "../AddPost/utils";

const Form = () => {
  const [type, setType] = React.useState([]);
  const [male, setMale] = React.useState([]);
  const [localization, setLocalization] = React.useState('');
  const [color, setColor] = React.useState([]);

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
      {/*<Location handleLocalizationChange={handleLocalizationChange} type="checkbox" value={localization}/>*/}
      <Color handleColorChange={handleColorChange} type="checkbox" />
      <button type="submit" onClick={handleSubmit}>
        Wyszukaj
      </button>
    </form>
  );
};

export default Form;
