import React from "react";
import propTypes from "prop-types";

function PendingGuest(props) {
    return (
        <li className="pending">
            <span>{props.name}</span>
        </li>
    )
}

PendingGuest.propTypes = {
    name: propTypes.string.isRequired
}

export default PendingGuest;
