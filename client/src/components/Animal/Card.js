import React from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={"/animals/"+props.animal.animal_id} className = {"card"}>
            <h1 className = {"name"}>{props.animal.name}</h1>
            <img src = {props.animal.photo_path.substring('/public'.length)} alt = {props.animal.photo_path} />
            <div className={"sex"} />
            <div className={"info"}>
                <p>{props.animal.city}</p>
                <p>Rozmiar: {props.animal.size}</p>
                <p>Wiek: {props.animal.age}</p>
                <p>Zdrowie: {props.animal.healthy}</p>
            </div>
            <div className={"description"}>
                {props.animal.description}
            </div>
            <div className={"date"}>
                {props.animal.advert_date}
            </div>
        </Link>
    );
};

export default Card;
