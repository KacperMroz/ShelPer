import React from 'react';

const FormLocation = (props) => {
    return (
        <div className={"location"}>
            <input type={"text"} name="location" placeholder="Podaj lokalizację" onChange={props.handleLocalizationChange}/>
        </div>
    );
};

export default FormLocation;
