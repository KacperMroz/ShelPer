import React from 'react';
import NavBar from "../NavBar";
import Card from "../Animal/Card";
import Filter from "../Animals/Filter";
import "./Animals.css";
import FetchAnimals from "../Animals/FetchAnimals";

const Animals = () => {
    // TODO: replace with fetching data from server (when endpoint is ready)
    const Lola = {
        animal_id: 1,
        name: "Lola",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        description: "Poznaj Lolę lepiej. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem....",
        gender: "female",
        city: "Kraków",
        size: "Mała",
        age: "3",
        healthy: "Zdrowa",
        advert_date: "19.10.2021 19:20",
        photo_path: 'abc'
    }

    const Edgar = {
        animal_id: 2,
        name: "Edgar",
        image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        description: "Poznaj Edgara lepiej. Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem....",
        gender: "male",
        city: "Kraków",
        size: "Mały",
        age: "3",
        healthy: "Zdrowy",
        advert_date: "19.10.2021 19:20",
        photo_path: 'abc'
    }

    return (
        <div className='animals-base-container'>
            <NavBar />
            <div className='animals-content-container'>
                <Filter />
                <div className={'container'}>
                    <Card className='animal-card' key={Lola.id} animal={Lola}/>
                    <Card key={Edgar.id} animal={Edgar}/>
                    <FetchAnimals url={'/animals'}/>
                </div>
            </div>
        </div>
    );
};

export default Animals;
