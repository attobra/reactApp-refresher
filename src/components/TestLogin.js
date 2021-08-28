import React, { useState } from 'react';

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default function Login(props) {

    const [username, setUserName] = useState("");

    const [password, setPassword] = useState("");

    function validateFormFields() {

        return username.length > 0 && password.length > 0;

    }

    function handleSubmit(event) {

        event.preventDefault();
        alert("Thanks for login")

    }

    return (

        <div className="Login">

            <form onSubmit={handleSubmit}>

                <FormGroup controlId="Username" bsSize="large">

                    <FormLabel>username  </FormLabel>

                    <FormControl

                        autoFocus

                        type="text"

                        value={username}

                        onChange={e => setUserName(e.target.value)}

                    />

                </FormGroup>

                <FormGroup controlId="password" bsSize="large">

<FormLabel>Password</FormLabel>

                    <FormControl

                        value={password}

                        onChange={e => setPassword(e.target.value)}

                        type="password"

                    />

                </FormGroup>

                <Button  disabled={!validateFormFields()} type="submit">

                    Login

                </Button>

            </form>

        </div>

    );

}

