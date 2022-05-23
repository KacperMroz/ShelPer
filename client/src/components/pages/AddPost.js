import React from 'react';
import NavBar from "../NavBar";
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
