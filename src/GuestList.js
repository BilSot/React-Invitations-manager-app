import React from "react";
import propTypes from "prop-types";
import Guest from "./Guest";
import PendingGuest from "./PendingGuest";

function GuestList({guests, guestConfirmation, guestEditing, setName, isFilterOn, guestRemoval, pendingGuest}) {
    return (
        <ul>
            {guests
                .filter(guest => {
                    if(isFilterOn === false || guest.isConfirmed){
                        return true;
                    }
                    return false;
                })
                .map((guest, index) =>
                    <Guest
                        guest={guest}
                        key={index}
                        isEditing={guest.isEdited}
                        guestConfirmation={guestConfirmation}
                        guestEditing={guestEditing}
                        guestRemoval={guestRemoval}
                        setName={setName}
                    />
                )}
            {pendingGuest !== "" ? <PendingGuest name={pendingGuest}></PendingGuest> : null}
        </ul>
    )
}

GuestList.propTypes = {
    guests: propTypes.array.isRequired,
    guestConfirmation: propTypes.func,
    guestEditing: propTypes.func,
    guestRemoval: propTypes.func,
    setName: propTypes.func,
    isFilterOn: propTypes.bool
}
export default GuestList;
