import { Table, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { listEmplyees } from "../package/UserSercvice";

function Main() {
    let navigate = useNavigate();
    let [users, setUsers] = useState([]);
    let [flag, setFlag] = useState(1);

    useEffect(() => {
        if (flag == 1) {
            listEmplyees().then((response) => {
                console.log('get');
                console.log(response.data);
                setUsers([...response.data]);
            })
        }
        setFlag(0);
    })

    function deleteUser(id) {
        axios.delete(`http://localhost:8080/user/${id}`);
        setFlag(1);
        console.log("delete");
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>E-Mail</th>
                    <th>ETC</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user)=> {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button variant="primary" onClick={()=>{
                                        navigate(`/update/${user.id}`);
                                    }}>UPDATE</Button>
                                    <Button variant="danger" onClick={() => {
                                    navigate('/');
                                    console.log('delete button clicked');
                                    deleteUser(user.id);
                                    window.location.reload();
                                }}>DELETE</Button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
            <Button variant="primary" onClick={() => {
                navigate("/new"); setFlag(1);
            }}>New</Button>
        </>
    )
}

export default Main;