import React from 'react';

const CheckIfLogged = () => {
    return !!localStorage.getItem('token');
};

export default CheckIfLogged;
