import React, { useState } from 'react';

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default function RegistrationForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("")

    function validateFormFields() {
        return firstName.length > 0 && lastName.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert("Thanks for registering!")
    }

    return (
        <div className="Registration">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="FirstName" bsSize="large">
                    <FormLabel>First Name:  </FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId="LastName" bsSize="large">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="DOB" bsSize="large">
                    <FormLabel>Date of birth</FormLabel>
                    <FormControl
                        type="text"
                        value={dob}
                        onChange={e => setDob(e.target.value)}
                    />
                </FormGroup>

                <Button  disabled={!validateFormFields()} type="submit">
                    Sign Up
                </Button>

            </form>

        </div>

    );

}

