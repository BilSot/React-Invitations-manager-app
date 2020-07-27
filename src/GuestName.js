import React from "react";
import propTypes from "prop-types";

function GuestName(props){
    if(props.isEditing) {
        return (
            <input type="text"
                   value={props.children}
                   onChange={(event) => props.setName(event.target.value)}
            />
        )
    }

    return(
        <span>{props.children}</span>
    )
}

GuestName.propTypes = {
    isEditing: propTypes.bool.isRequired,
    setName: propTypes.func
}

export default GuestName;
