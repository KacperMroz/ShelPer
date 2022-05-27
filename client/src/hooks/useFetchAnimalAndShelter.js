import { useState, useEffect } from "react";

const useFetchAnimalAndShelter = (url, id = null, urlSecond) => {
    const [data, setData] = useState([]);
    const [dataInfo, setDataInfo] = useState([]);
    const [hasError, setErrors] =  useState(false);
    const [loading, setLoading] = useState(true);


    useEffect( () => {
        try {
            if (id && !isNaN(id))
                url = `${url}/${id}`;
            if(isNaN(id))
                throw new Error("Id must be a number");

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    fetch(urlSecond+data.shelter_id)
                        .then(response => response.json())
                        .then(dataSecond => {
                            setDataInfo(dataSecond);
                            setLoading(false);
                            console.log(dataSecond);
                        })
                });
        } catch (e) {
            setErrors(true);
            setLoading(false);
            console.log(e);
        }
    }, []);

    return {data, dataInfo, hasError, loading};
};

export default useFetchAnimalAndShelter;