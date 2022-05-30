import React from 'react';
import NavBar from '../NavBar';
import Form from '../AddPost/Form';
import './AddPost.css';

const AddPost = () => {
  return (
    <div className='add-post-container'>
      <NavBar />
      <h1 className="add-page-header">Dodaj ogłoszenie</h1>
      <Form />
    </div>
  );
};

export default AddPost;
