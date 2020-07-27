import React from "react";
import GuestInputForm from "./GuestInputForm";

export default function Header(props) {
    return(
        <header>
            <h1>RSVP</h1>
            <GuestInputForm
            formSubmit={props.formSubmit}
            inputChange={props.inputChange}
            pendingGuest={props.pendingGuest}/>
        </header>
    )
}
