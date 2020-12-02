import React from "react";


import { useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import './index.css';
//import {Button} from '../components/Button.jsx'

import {Link} from "react-router-dom";


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import FilePage from "./filepage";

import { useAuthState } from 'react-firebase-hooks/auth';



function FilePage() {
 return (
     <div>
         <h3>Welcome to Filepage</h3>
     </div>   
 )
}
export default FilePage;

