import React from 'react';

const Size = (props) => {
    return (
        <div className={"animals color"}>
            <input type={props.type} name="size" value="small" id="small" onChange={props.handleSizeChange}/>
            <label className={"label"} htmlFor="small">
                <span>Mały</span>
            </label>

            <input type={props.type} name="size" value="average" id="average" onChange={props.handleSizeChange}/>
            <label className={"label"} htmlFor="average">
                <span>Średni</span>
            </label>

            <input type={props.type} name="size" value="big" id="big" onChange={props.handleSizeChange}/>
            <label className={"label"} htmlFor="big">
                <span>Duży</span>
            </label>
        </div>
    );
};

export default Size;
