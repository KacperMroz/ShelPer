import { useState, useEffect } from "react";

const useFetchAnimalAndShelter = (url, id = null, urlSecond) => {
    const [data, setData] = useState([]);
    const [town, setTown] = useState('');
    const [size, setSize] = useState('');

    const [dataInfo, setDataInfo] = useState([]);
    const [hasError, setErrors] =  useState(false);
    const [loading, setLoading] = useState(true);
    const [owner, setOwner] = useState(false);

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
                            if ('S'+dataSecond.details === localStorage.getItem('token'))
                                setOwner(true);
                            fetch('/towns')
                                .then(response => response.json())
                                .then(dataTown => {
                                    setTown(dataTown.find(town => town.town_id === dataSecond.town_id).name);
                                })
                        })
                    fetch('/sizes')
                        .then(response => response.json())
                        .then(dataSize => {
                            setSize(dataSize.find(size => size.size_id === data.size_id).name);
                        })
                    setLoading(false);
                });

        } catch (e) {
            setErrors(true);
            setLoading(false);
            console.log(e);
        }
    }, []);

    return {data, dataInfo, town, size, hasError, loading, owner};
};

export default useFetchAnimalAndShelter;