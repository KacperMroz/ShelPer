import React from 'react';
import NavBar from "../NavBar";
import Type from "../AnimalSpec/Type";
import Sex from "../AnimalSpec/Sex";
import Color from "../AnimalSpec/Color";
import Form from "../AddPost/Form";

const AddPost = () => {
    return (
        <div>
            <NavBar />
            <h1>Dodaj ogłoszenie</h1>
            <Form />
        </div>
    );
};

export default AddPost;
