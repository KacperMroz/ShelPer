import Card from '../Animal/Card';
import {useEffect, useState} from "react";
import useFetchGetParam from "../../hooks/useFetchGetParam";


const FetchFavourites = (props) => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const [towns, setTowns] = useState('');
    const [loading2, setLoading2] = useState(true);
    const [hasError2, setError2] = useState(false);
    const [sizes, setSizes] = useState('');
    const [loading3, setLoading3] = useState(true);
    const [hasError3, setError3] = useState(false);
    useFetchGetParam(props.url, setData, setLoading, setError);
    useFetchGetParam('/towns', setTowns, setLoading2, setError2);
    useFetchGetParam('/sizes', setSizes, setLoading3, setError3);

    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        if (data) {
            setFavourites(data.map(animal => animal.animal_id))
        }
    }, [data])
    localStorage.setItem('favourites', JSON.stringify(favourites));

    const returnWhenLoaded = () => {
        if (loading || loading2 || loading3) {
            return <div>Loading...</div>;
        }
        if (hasError || hasError2 || hasError3) {
            return <div>Error...</div>;
        }
        return (
            <>
                {data.map((animal) => (
                    //TODO: add town after backend is done

                    // <Card key={animal.animal_id} animal={animal} town={towns.find(townItem => townItem.town_id === animal.town_id).name} size ={sizes.find(sizeItem => sizeItem.size_id === animal.size_id).name}/>
                    <Card key={animal.animal_id} animal={animal} size ={sizes.find(sizeItem => sizeItem.size_id === animal.size_id).name}/>

                    ))}
            </>
        );
    };

    return (
        <>
            {returnWhenLoaded()}
        </>
    );
};

export default FetchFavourites;
