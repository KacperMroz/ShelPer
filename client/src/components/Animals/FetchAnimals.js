import Card from "../Animal/Card";
import useFetchGet from "../../hooks/useFetchGet";

const FetchAnimals = (props) => {
    const { data, hasError, loading } = useFetchGet(props.url)

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
