import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../pages/Post.css";

const Description = (props) => {
    return (
        <div className={"post-description-container"}>
            <div id='post-name-icon'>
                <div id='post-name'>{props.post.name}</div>
                <FontAwesomeIcon id='icon-heart' icon={props.heart} onClick={props.handleClickOnHeart}/>
                {props.owner ?
                    <FontAwesomeIcon id='icon-heart' icon={props.trash} onClick={props.handleClickOnTrash}/>
                    : null}
            </div>
            <div className='post-descritpion'>{props.post.description}</div>
            <div className='post-date'>{props.post.advert_date}</div>
            <div className='post-information'>
                <div id='post-city'>{props.town}</div>
                <div id='post-size'>Rozmiar: {props.size}</div>
                <div id='post-bread'>Waga: {props.post.weight} kg</div>
                <div id='post-age'>Wiek: {props.post.age}</div>
                <div id='post-health'>{  props.post.male ? "Zdrowy/a" : "Wymaga leczenia" }</div>
                <div id='post-gender'>
                    {  props.post.male ? "Samiec" : "Samica" }</div>
            </div>
        </div>
    );
};

export default Description;
