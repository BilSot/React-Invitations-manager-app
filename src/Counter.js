import React from "react";

function Counter(props) {
    return (
        <table className="counter">
            <tbody>
            <tr>
                <td>Attending:</td>
                <td>{props.confirmed}</td>
            </tr>
            <tr>
                <td>Unconfirmed:</td>
                <td>{props.unconfirmed}</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>{props.total}</td>
            </tr>
            </tbody>
        </table>
    )
}

export default Counter;
