import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';
export default function Update() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);
    const sendDataToAPI = () => {
        axios.put(`https://6347a6a7db76843976af5270.mockapi.io/Crud/${ID}`, {
            firstName,
            lastName
        }).then(() => {
            navigate.push('/read')
        })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setID(localStorage.getItem('ID'))
    }, [])

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        name="lname"
                        value={lastName}
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    )
}
