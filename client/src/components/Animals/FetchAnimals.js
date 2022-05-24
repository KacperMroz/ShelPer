import Card from "../Animal/Card";
import useFetchGet from "../../hooks/useFetchGet";

const FetchAnimals = () => {
    const { data, hasError, loading } = useFetchGet('http://localhost:5000/animals')

    return (
        <>
            {loading ? <p>Loading...</p> : <>
                {data.map(animal => <Card key={animal.animal_id} animal={animal}/>)}

            </>}
            {hasError ? <p>{hasError}</p> : null}
        </>
    );
};

export default FetchAnimals;
