import React, {useEffect, useState} from 'react';
import Card from "../Animal/Card";

const FetchAnimals = () => {

    // TODO: better loading and error handling
    const [animals, setAnimals] = useState([]);
    const [hasError, setErrors] =  useState(false);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:5000/animals')
                .then(response => response.json())
                .then(data => {
                    setAnimals(data);
                    console.log(data);
                    setLoading(false);

                });
        } catch (e) {
            setErrors(true);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            {loading ? <p>Loading...</p> : <>
                {animals.map(animal => <Card key={animal.animal_id} animal={animal}/>)}

            </>}
            {hasError ? <p>{hasError}</p> : null}
        </>
    );
};

export default FetchAnimals;
