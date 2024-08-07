import { Table, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
    let navigate = useNavigate();
    let [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/users")
        .then(response => response.data)
        .then(data => setUsers(data))
    }, [])

    return (
        <>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
                <th>E-Mail</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((a, i)=> {
                return (
                    <Data num = {i} user={users[i]}></Data>
                )
                })
            }
            </tbody>
            </Table>
            <Button variant="primary" onClick={() => navigate("/new")}>New</Button>
        </>
    )
}


function Data(props) {
    return (
        <tr>
            <td>{props.num}</td>
            <td>{props.user.id}</td>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
        </tr>
    )
}

export default Main