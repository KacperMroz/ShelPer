import { useState, useEffect } from "react";

const useFetchGet = (url, id = null) => {
    const [data, setData] = useState([]);
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
                    setLoading(false);
                    console.log(data);
                });
        } catch (e) {
            setErrors(true);
            setLoading(false);
            console.log(e);
        }
    }, []);

    return {data, hasError, loading};
};

export default useFetchGet;