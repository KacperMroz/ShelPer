import React from 'react';

const Photo = (props) => {
    return (
        <div className={""} >
            <div className={""}>
                {props.post.name}
            </div>
            <div className={props.post.gender}></div>
            <img src={props.post.image} />
        </div>
    );
};

export default Photo;
