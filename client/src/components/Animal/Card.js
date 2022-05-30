import React from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
    const checkGender = () => {
        if (props.male) {
            return <FontAwesomeIcon icon={faMars} />
        }
        else
            return <FontAwesomeIcon icon={faVenus} />
    }
    return (
        <Link to={"/animals/"+props.animal.animal_id} className = {"card"}>
            <div id={"image-row"} className={"animals"}>
                <div id={"photo-name"}>
                    {props.animal.name}
                </div>
                <div id={"photo-male"} className={props.animal.male ? "male" : "female"}>
                    {checkGender()}
                </div>
            </div>
            <img src = {props.animal.photo_path.substring('/public'.length)} alt = {props.animal.photo_path} />
            <div className={"sex"} />
            <div className={"info"}>
                <p>{props.town}</p>
                <p>Rozmiar: {props.size}</p>
                <p>Wiek: {props.animal.age}</p>
                <p>Zdrowie: {props.animal.healthy ? "Zdrowy" : "Wymaga leczenia"}</p>
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
