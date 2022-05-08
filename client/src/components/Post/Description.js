import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Description = (props) => {
    return (
        <div className={""}>
            <div>{props.post.name}</div>
            <FontAwesomeIcon icon={props.heart} onClick={props.handleClickOnHeart}/>
            <div>{props.post.description}</div>
            <div>{props.post.date}</div>
            <div>
                <div>{props.post.city}</div>
                <div>Rozmiar: {props.post.size}</div>
                <div>{props.post.breed}</div>
                <div>Wiek: {props.post.age}</div>
                <div>Zdrowie: {props.post.health}</div>
                <div>{props.post.gender}</div>
            </div>
        </div>
    );
};

export default Description;
