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

    const [files, setFiles] = useState([]);

    const handleFilesChange = (e) => {
        setFiles(Array.from(e.target.files));
    }

    const uploadFiles = (e) => {
        e.preventDefault();
        const formData = new FormData();
    
        files.map((file) => {
          formData.append("files", file);
        });
    
        console.log(Array.from(formData));
    
        axios.post('http://localhost:8080/file/uploads', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.error(err);
        });
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
                </Form.Group>;

                <Button variant="primary" onClick={() => {
                    if (name != "" && email != "") {
                        nav('/')
                        addPerson(name, email);
                    }
                }}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default New;