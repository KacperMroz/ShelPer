import React from 'react';
import Form from "../Animals/Form";
import "./Card.css";

const Card = (props) => {
    return (
        <div>
            <h1>{props.animal.name}</h1>
            <img src = {props.animal.image} alt = {props.animal.name} />
            <div className={"sex"} />
            <div className={"info"}>
                <p>{props.animal.city}</p>
                <p>Rozmiar: {props.animal.size}</p>
                <p>Wiek: {props.animal.age}</p>
                <p>Zdrowie: {props.animal.health}</p>
            </div>
            <div className={"description"}>
                {props.animal.description}
            </div>
            <div className={"date"}>
                {props.animal.date}
            </div>
        </div>
    );
};

export default Card;
