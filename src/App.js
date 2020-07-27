import React, {Component} from 'react';
import './css/style.css';
import GuestList from "./GuestList";
import Counter from "./Counter";
import Header from "./Header";

class App extends Component {
    // guestInput = React.createRef();
    state = {
        isFilterOn: false,
        pendingGuest: '',
        guests: [
            {
                name: 'Guest A',
                isConfirmed: false,
                isEdited: false
            },
            {
                name: 'Guest B',
                isConfirmed: true,
                isEdited: false
            },
            {
                name: 'Guest C',
                isConfirmed: true,
                isEdited: false
            },
            {
                name: 'Guest D',
                isConfirmed: true,
                isEdited: false
            }
        ]
    }

    componentDidMount() {
        let guests = this.state.guests;
        this.assignGuestsIds(guests);
    }

    assignGuestsIds(guests) {
        let idCounter = 0;
        for (let i = 0; i < guests.length; i++) {
            guests[i].id = idCounter;
            idCounter++;
        }

        this.setState({
            guests
        });
    }

    toggleGuestProperty = (guestId, property) => {
        let updatedGuestsArr = this.state.guests.map((guest, index) => {
            if (index === guestId) {
                return {
                    ...guest,
                    [property]: !guest[property]
                }
            }
            return guest;
        });

        this.setState({
            guests: updatedGuestsArr
        });
    }

    toggleConfirmation = (index) => {
        this.toggleGuestProperty(index, 'isConfirmed');
    }

    toggleEditing = (index) => {
        this.toggleGuestProperty(index, 'isEdited');
    }

    toggleOnlyConfirmedGuests = () => {
        this.setState({
            isFilterOn: !this.state.isFilterOn
        });
    }

    setGuestName = (guestId, newName) => {
        let updatedGuestsArr = this.state.guests.map((guest, index) => {
            if (index === guestId) {
                return {
                    ...guest,
                    name: newName
                }
            }
            return guest;
        });

        this.setState({
            guests: updatedGuestsArr
        });
    }

    getTotalGuests() {
        return this.state.guests.length;
    }

    getAttendingGuests() {
        let attendees = this.state.guests.filter(guest => guest.isConfirmed);
        return attendees.length;
    }

    getUnconfirmedGuests() {
        let unconfirmed = this.state.guests.filter(guest => !guest.isConfirmed);
        return unconfirmed.length;
    }

    handleOnGuestInputChange = (event) => {
        this.setState({
            pendingGuest: event.target.value.trim()
        })
    }

    handleOnFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.pendingGuest !== '') {
            this.insertNewGuest(this.state.pendingGuest);
        }
    }

    insertNewGuest = (name) => {
        let maxIndex = Math.max.apply(Math, this.state.guests.map(guest => guest.id));
        let newGuest = {
            id: ++maxIndex,
            name: name,
            isConfirmed: false,
            isEdited: false
        }

        this.setState({
            guests: [
                ...this.state.guests,
                newGuest
            ],
            pendingGuest: ''
        });
    }

    guestRemoval = (guestId) => {
        this.state.guests.splice(guestId, 1);
        this.assignGuestsIds(this.state.guests);
    }

    render() {
        return (
            <>
                <div className="App">
                    <Header
                    formSubmit={this.handleOnFormSubmit}
                    inputChange={this.handleOnGuestInputChange}
                    pendingGuest={this.state.pendingGuest}/>
                    <div className="main">
                        <div>
                            <h2>Invitees</h2>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={this.toggleOnlyConfirmedGuests}
                                /> Hide those who haven't responded
                            </label>
                        </div>
                        <Counter
                            confirmed={this.getAttendingGuests()}
                            unconfirmed={this.getUnconfirmedGuests()}
                            total={this.getTotalGuests()}
                        />
                        <GuestList
                            guests={this.state.guests}
                            guestConfirmation={this.toggleConfirmation}
                            guestEditing={this.toggleEditing}
                            guestRemoval={this.guestRemoval}
                            setName={this.setGuestName}
                            isFilterOn={this.state.isFilterOn}
                            pendingGuest={this.state.pendingGuest}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default App;
