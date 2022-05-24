import { useState, useEffect } from "react";

const useFetchGet = (url) => {
    const [data, setData] = useState([]);
    const [hasError, setErrors] =  useState(false);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        try {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    console.log(data);
                    setLoading(false);
                });
        } catch (e) {
            setErrors(true);
        }
    }, [url]);

    return {data, hasError, loading};
};

export default useFetchGet;