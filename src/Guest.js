import React, {Component} from "react";
import GuestName from "./GuestName";
import propTypes from "prop-types";

class Guest extends Component {
    handleOnChange = () => {
        this.props.guestConfirmation(this.props.guest.id);
    }

    handleOnEdit = () => {
        this.props.guestEditing(this.props.guest.id);
    }

    handleOnRemove = () => {
        this.props.guestRemoval(this.props.guest.id);
    }

    render() {
        return (
            <li className="responded">
                <GuestName
                    isEditing={this.props.isEditing}
                    setName={(newName) => this.props.setName(this.props.guest.id, newName)}
                >
                    {this.props.guest.name}
                </GuestName>
                <label>
                    <input type="checkbox" checked={this.props.guest.isConfirmed}
                           onChange={this.handleOnChange}/> Confirmed
                </label>
                <button onClick={this.handleOnEdit}>{this.props.isEditing ? "save" : "edit"}</button>
                <button onClick={this.handleOnRemove}>remove</button>
            </li>
        );
    }
}

Guest.propTypes = {
    guest: propTypes.shape({
        id: propTypes.number,
        name: propTypes.string.isRequired,
        isConfirmed: propTypes.bool.isRequired
    }),
    guestConfirmation: propTypes.func,
    guestRemoval: propTypes.func
}

export default Guest;
