import React from 'react';
import CheckBoxes from '../AnimalSpec/CheckBoxes';
import Location from '../AnimalSpec/Location';
import Color from '../AnimalSpec/Color';

const Form = () => {
  const [type, setType] = React.useState([]);
  const [sex, setSex] = React.useState([]);
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
      setSex([...sex, e.target.value]);
    } else {
      setSex(type.filter((sex) => sex !== e.target.value));
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
      <CheckBoxes handleChange={handleTypeChange} type="checkbox" />
      <CheckBoxes handleChange={handleSexChange} type="checkbox" />
      <Location handleLocalizationChange={handleLocalizationChange} type="checkbox" />
      <Color handleColorChange={handleColorChange} type="checkbox" />
      <button type="submit" onClick={handleSubmit}>
        Wyszukaj
      </button>
    </form>
  );
};

export default Form;
