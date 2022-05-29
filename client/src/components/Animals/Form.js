import { useState } from 'react';
import CheckBoxes from '../AnimalSpec/CheckBoxes';
import Location from '../AnimalSpec/Location';
import Color from '../AnimalSpec/Color';
import { animalTypes, sexTypes } from '../AddPost/utils';

const Form = () => {
  const [type, setType] = useState([]);
  const [male, setMale] = useState([]);
  const [localization, setLocalization] = useState('');
  const [color, setColor] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted');
    console.log(type, male, localization, color);
  };

  const handleTypeChange = e => {
    const newType = [...type];
    if (e.target.checked) {
      newType.push(e.target.value);
    } else {
      newType.splice(newType.indexOf(e.target.value), 1);
    }
    setType(newType);
  };

  const handleSexChange = e => {
    const newSex = e.target.value;
    setMale(newSex);
  };

  const handleLocalizationChange = e => {
    const newLocalization = e.target.value;
    setLocalization(newLocalization);
  };

  const handleColorChange = e => {
    const newColor = e.target.value;
    setColor(newColor);
  };

  return (
    <form>
      <CheckBoxes
        handleChange={handleTypeChange}
        type='checkbox'
        value={type}
        name='type'
        data={animalTypes}
      />
      <CheckBoxes
        handleChange={handleSexChange}
        type='checkbox'
        value={male}
        data={sexTypes}
      />
      <Location
        handleLocalizationChange={handleLocalizationChange}
        type='checkbox'
        value={localization}
      />
      <Color handleColorChange={handleColorChange} type='checkbox' />
      <button type='submit' onClick={handleSubmit}>
        Wyszukaj
      </button>
    </form>
  );
};

export default Form;
