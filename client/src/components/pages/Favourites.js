import React from 'react';
import NavBar from "../NavBar";
import Filter from "../Animals/Filter";
import "./Animals.css";
import FetchFavourites from "../Animals/FetchFavourites";

const Favourites = () => {
    return (
        <div className='animals-base-container'>
            <NavBar />
            <div className='animals-content-container'>
                <Filter />
                <div className={'container'}>
                    <FetchFavourites url={'/favourites'}/>
                </div>
            </div>
        </div>
    );
};

export default Favourites;
