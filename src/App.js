import './App.css';
import axios from 'axios';
import { Table, Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Link, useNavigate} from 'react-router-dom';
import Main from './pages/main.js'
import New from './pages/new.js'
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Update from './pages/update.js';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
        <Routes>
          <Route path='/' element = {<Main/>} />
          <Route path='/new' element = {<New/>} />
          <Route path='/update/:id' element = {<Update/>}></Route>
        </Routes>
    </div>
  )
}

export default App;
