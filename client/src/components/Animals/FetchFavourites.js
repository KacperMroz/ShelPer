import Card from '../Animal/Card';
import useFetchGet from '../../hooks/useFetchGet';
import {useEffect, useState} from "react";


const FetchFavourites = (props) => {
    const { data, hasError, loading } = useFetchGet(props.url)
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        setFavourites(data.map(animal => animal.animal_id))
    }, [data])

    localStorage.setItem('favourites', JSON.stringify(favourites));
    console.log(localStorage.getItem('favourites'));
    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {data.map((animal) => (
                        <Card key={animal.animal_id} animal={animal} />
                    ))}
                </>
            )}
            {hasError ? <p>{hasError}</p> : null}
        </>
    );
};

export default FetchFavourites;
