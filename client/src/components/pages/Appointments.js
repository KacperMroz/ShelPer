import React from 'react'
import DatePicker from '../DatePicker';
import NavBar from '../NavBar';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg'

import './Appointments.css'

const Appointments = () => {
  return (
    <div className="appointments">
      <NavBar />
      <h1 className='appointments-title'>Wybierz datę</h1>
      <div className='datepicker-container'>
        <DatePicker />
      </div>
      <button className='next-step'>
      <ArrowIcon />
      </button>
    </div>
  );
};

export default Appointments;