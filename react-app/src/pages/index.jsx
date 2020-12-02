import React, { useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import './index.css';
import {Button} from '../components/Button.jsx'
import '../components/Navbar.css'


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


firebase.initializeApp({
  apiKey: "AIzaSyD349CglAXQrNoOYVJXJJrMyzM9R6MY7gM",
  authDomain: "react-app-d06db.firebaseapp.com",
  databaseURL: "https://react-app-d06db.firebaseio.com",
  projectId: "react-app-d06db",
  storageBucket: "react-app-d06db.appspot.com",
  messagingSenderId: "655791175737",
  appId: "1:655791175737:web:340f4bd3920e9b043375e8",
  measurementId: "G-8C6198BLSQ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();



var gapi = window.gapi
var CLIENT_ID = "655791175737-6l63p9pjg6m4fmc79u335kioa2pgvl0k.apps.googleusercontent.com"
var API_KEY = "AIzaSyD349CglAXQrNoOYVJXJJrMyzM9R6MY7gM"
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
var SCOPES = "https://www.googleapis.com/auth/calendar.events"
function MainPage() {

  const [user] = useAuthState(auth);
  gapi.load('client:auth2', () => {
    console.log("loaded client");

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    });
   
    gapi.client.load('calendar', 'v3', () => console.log("loaded calendar"))
  })
  return (
    <div className="app">
      <section>
        {user ? <WelcomePage /> : <SignIn />}
        {<SignOut/>}
        {<DirectToFiles/>}
        {<DirectToTask/>}
        {<DirectToCalendar user = {user}/>}
      </section>
    </div>
  )
}


function SignIn() {
  const signInWithGoogle = async () => {
    const GoogleUser = await gapi.auth2.getAuthInstance().signIn()

    const token = GoogleUser.getAuthResponse().id_token;
    const credential = firebase.auth.GoogleAuthProvider.credential(token);

    await firebase.auth().signInWithCredential(credential);
  }
  return (
    <div>
      <Button onClick ={signInWithGoogle} type="button"
    buttonStyle="btn--primary--solid"
    buttonSize="btn--large"
    buttonPosition="btn--centercenter">
      Sign in with Google</Button>
    </div>

  )
}
function SignOut() {
  return auth.currentUser && (
    <div>
      <Button onClick={() => auth.signOut()} type="button"
    buttonStyle="btn--primary--solid"
    buttonSize="btn--medium"
    buttonPosition="btn--topright">
      Sign Out</Button>
    </div>
  )
}
function DirectToFiles() {
  let history = useHistory();
  const routeChange = () =>{ 
    let path = `/filepage`; 
    history.push(path);
  }

  return  (
    <Button onClick= {routeChange} type="button"
    buttonStyle="btn--primary--solid"
    buttonSize="btn--medium"
    buttonPosition="btn--topcenter">
      FilesPage</Button>
    //<Link to = "/filepage">linking to filepage</Link>
  )
}

function DirectToCalendar(props) {

  /**
   * let history = useHistory();
  const routeChange = () =>{ 
    let path = `/calendarpage`;  
    history.push(path);
  }
   */

  return  (
    <Button onClick= { <Link to={{
      pathname: `/calendarpage`,
      state: {props}
      }}>GO
    </Link>} 
    type="button"
    buttonStyle="btn--primary--solid"
    buttonSize="btn--medium"
    buttonPosition="btn--topleft">
    CalendarPage</Button>
      
    //<Link to = "/filepage">linking to filepage</Link>
  )
}

function DirectToTask() {
  let history = useHistory();
  const routeChange = () =>{ 
    let path = `/taskpage`; 
    history.push(path);
  }
  return  (
    <Button onClick= {routeChange} type="button"
    buttonStyle="btn--primary--solid"
    buttonSize="btn--medium"
    buttonPosition="btn--topcenter">
      TaskPage</Button>
  )
}

function WelcomePage() {
  return (
    <div className="background">
      <div className="text">Welcome to TickTock!</div>
    </div>
  )
}

export default MainPage;
