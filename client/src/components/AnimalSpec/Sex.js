import React from 'react';

const Sex = (props) => {
    return (
        <div className={"animals sex"}>
            <input type={props.type} name="sex" value="female" id="sex1" onChange={props.handleSexChange}/>
            <label className={"label"} htmlFor="sex1">
                <span>Samica</span>
            </label>

            <input type={props.type} name="sex" value="male" id="sex2" onChange={props.handleSexChange}/>
            <label className={"label"} htmlFor="sex2">
                <span>Samica</span>
            </label>
        </div>
    );
};

export default Sex;