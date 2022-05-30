import React from 'react';
import NavBar from "../NavBar";
import Filter from "../Animals/Filter";
import "./Animals.css";
import FetchAnimals from "../Animals/FetchAnimals";

const Animals = () => {
    return (
        <div className='animals-base-container'>
            <NavBar />
            <div className='animals-content-container'>
                <Filter />
                <div className={'container'}>
                    <FetchAnimals url={'/animals'}/>
                </div>
            </div>
        </div>
    );
};

export default Animals;
