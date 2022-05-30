import React from 'react';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Photo = (props) => {
    const checkGender = () => {
        if (props.male) {
            return <FontAwesomeIcon icon={faMars} />
        }
        else
            return <FontAwesomeIcon icon={faVenus} />
    }

    return (
        <div className={"post-carousel"}>
            <div id={"image-row"} >
                <div id={"photo-name"}>
                    {props.name}
                </div>
                <div id={"photo-male"} className={props.male ? "male" : "female"}>
                    {checkGender()}
                </div>
            </div>
            <img src={props.url} alt="post" id={"post-image"}/>
        </div>
    );
};

export default Photo;
