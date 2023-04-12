import React from "react";


const MySelect = ({options, defaultValue, value, onChenge}) => {
    return (
    <select
    value={value}
    onChange={event => onChenge(event.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {options.map(option =>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        )}
    </select>
    );
};

export default MySelect;