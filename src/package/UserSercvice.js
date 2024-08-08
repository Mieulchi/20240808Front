import axios from "axios";


export const listEmplyees = () => axios.get(`http://localhost:8080/users`)