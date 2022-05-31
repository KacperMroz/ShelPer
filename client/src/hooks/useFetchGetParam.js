import React from 'react';
import { useEffect } from "react";

const useFetchGetParam = (url, setData, setLoading, setErrors, id = null) => {
    useEffect( () => {
        try {
            if (id && !isNaN(id))
                url = `${url}/${id}`;
            if(isNaN(id) && id !== null)
                throw new Error("Id must be a number");

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    setLoading(false);
                });
        } catch (e) {
            setErrors(true);
            setLoading(false);
            console.log(e);
        }
    }, []);
};

export default useFetchGetParam;
