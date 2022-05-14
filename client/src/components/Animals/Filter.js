import React from 'react';
import Form from "./Form";

const Filter = () => {
    const [filter, setFilter] = React.useState(false);
    const [order, setOrder] = React.useState("Najnowsze");

    const toggleFilter = () => {
        setFilter(!filter);
    }

    return (
        <div>
            <button className={"btn btn-primary"} onClick={toggleFilter}>Pokaż filtry</button>
            {filter &&
                (<div>
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
