import React from 'react';
import Form from "./Form";
import './Filter.css'

const Filter = () => {
    const [filter, setFilter] = React.useState(false);
    const [order, setOrder] = React.useState("Najnowsze");

    const toggleFilter = () => {
        setFilter(!filter);
    }

    return (
        <div>
            <button className={"btn-primary"} onClick={toggleFilter}>Pokaż filtry</button>
            {filter &&
                (<div class_name='filter_box'>
                    <Form />
                </div>)}
            <select className={"order"} onChange={(e) => setOrder(e.target.value)}>
                <option>Najnowsze</option>
                <option>Najstarsze</option>
            </select>
        </div>
    );
};

export default Filter;
