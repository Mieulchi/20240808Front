import { Table, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { listEmplyees } from "../package/UserSercvice";

function Main() {
    let navigate = useNavigate();
    let [users, setUsers] = useState([]);

    useEffect(() => {
        listEmplyees().then((response) => {
            setUsers(response.data);
            console.log('no');
        })
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
                            <Data num = {i} user={users[i]} setUsers = {setUsers} ></Data>
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
    let nav = useNavigate();

    function deleteUser(id) {
        axios.delete(`http://localhost:8080/user/${id}`)
        console.log("ㅁㄱ");
    }

    return (
        <tr>
            <td>{props.num}</td>
            <td>{props.user.id}</td>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
            <td><Button variant="danger" onClick={() => {
                deleteUser(props.user.id);
                nav('/') 
            }}>delete</Button></td>
        </tr>
    )
}

export default Main;