import React from 'react';

const Color = (props) => {

    const colors = ["black", "gray", "brown", "orange", "white", "all"];
    const colorOptions = colors.map((color) => {
        return (
            <p key={color}>
                <input type={props.type} name="color" value={color} id={color} onChange={props.handleColorChange}/>
                <label className="whatever" className="no-backgroud" htmlFor={color} >
                    <span className="text-type"></span>
                </label>
            </p>
        )
    })

    return (
        <div id="color">
            {colorOptions}
        </div>
    );
};

export default Color;
