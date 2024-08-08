import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Update() {
    let nav = useNavigate();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");

    let id = useParams().id;

    useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}`)
        .then((response) => {
            setName(response.data.name);
            setEmail(response.data.email);
        })
    }, [])

    function updateUser(name, email) {
        axios.patch(`http://localhost:8080/user/${id}`, {
            name : name,
            email : email
        })
    }

    return (
        <>
            <Form>
                <Form.Label>name</Form.Label>
                    <Form.Control className="mb-3" type="" placeholder="Name" defaultValue = {name} onChange={(e) => {setName(e.target.value)}}/>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" defaultValue={email} onChange={(e) => {setEmail(e.target.value)}} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>;

                <Button variant="primary" onClick={() => {
                    console.log('update clicked')
                    console.log(name + email);
                    if (name != "" && email != "") {
                        nav('/')
                        updateUser(name, email);
                        window.location.reload();
                    }
                }}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Update;