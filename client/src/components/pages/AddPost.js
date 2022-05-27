import React from 'react';
import NavBar from '../NavBar';
import Form from '../AddPost/Form';
import './AddPost.css';

const AddPost = () => {
  return (
    <>
      <NavBar />
      <h1 className="add-page-header">Dodaj ogłoszenie</h1>
      <Form />
    </>
  );
};

export default AddPost;
