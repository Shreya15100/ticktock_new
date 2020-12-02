import React, { useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import './index.css';
import {Button} from '../components/Button.jsx'

import {Link} from "react-router-dom";


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import FilePage from "./filepage";

import { useAuthState } from 'react-firebase-hooks/auth';
//import { useCollectionData } from 'react-firebase-hooks/firestore';
//Boostrap 

import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function WelcomePage() {
    return (
      
        <div class="container-fluid">
          <Navbar bg="light">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
        </div> 
    )
  }
