import React from "react";

export default function GuestInputForm(props) {
    return(
        <form onSubmit={(event) => props.formSubmit(event)}>
            <input
                type="text"
                value={props.pendingGuest}
                onChange={(event) => props.inputChange(event)}
                placeholder="Invite Someone"/>
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
    )
}
