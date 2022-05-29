import React from 'react';

const Photo = (props) => {
    return (
        <>
            <input type="file" onChange={e => props.handlePhotoInput(e)}/>
        </>
    );
};

export default Photo;
