import React from 'react';
import NavBar from "../NavBar";
import Filter from "../Animals/Filter";
import "./Animals.css";
import FetchAnimals from "../Animals/FetchAnimals";

const Favourites = () => {
    return (
        <div className='animals-base-container'>
            <NavBar />
            <div className='animals-content-container'>
                <Filter />
                <div className={'container'}>
                    <FetchAnimals url={'/favourites'}/>
                </div>
            </div>
        </div>
    );
};

export default Favourites;
