import React from "react";


import { useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import './index.css';
//import {Button} from '../components/Button.jsx'

import {Link} from "react-router-dom";


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import CalendarPage from "./calendarpage";

import { useAuthState } from 'react-firebase-hooks/auth';
import { Component } from "react";


const auth = firebase.auth();
const firestore = firebase.firestore();

function CalendarPage(props) {

    return (
      <iframe id="googleCalendar"
        title="Google Calendar"
        width="700"
        height="700"
        src={"https://calendar.google.com/calendar/u/0/embed?src=" + this.props.email}>
      </iframe>
    )
}

export default CalendarPage;




