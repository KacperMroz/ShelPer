import React from 'react';

const Type = (props) => {
    const types = [
        { name: 'dog', emoji: '🐶', label: 'Pies' },
        { name: 'car', emoji: '🐱', label: 'Kot' },
        { name: 'other', emoji: '🐹', label: 'Inne' },
        { name: 'all', emoji: '', label: 'Wszystkie' },
    ]

    const typesList = types.map((type) => {
        return (
            <p key={type.name}>
                <input type={props.type} name="type" value={type.name} id={type.name} onChange={props.handleTypeChange}/>
                <label className={"label"} htmlFor={type.name}>
                    <span>{type.label}</span>
                    {type.emoji && (<span>{type.emoji}</span>)}
                </label>
            </p>
        )
    })

    return (
        <div className={"animals checkboxes"}>
            {typesList}
        </div>
    );
};

export default Type;
