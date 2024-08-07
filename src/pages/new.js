import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function New() {
    let nav = useNavigate()
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");

    function addPerson(name, email) {
        axios.post("http://localhost:8080/users/new", {
            name : name,
            email : email
        })
    }

    return (
        <>
            <Form>

                <Form.Label>Name</Form.Label>
                    <Form.Control className="mb-3" type="" placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                
                <Button variant="primary" onClick={() => {
                    addPerson(name, email);
                    nav('/')
                }}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default New;