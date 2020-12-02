import React from "react";


import { useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import './index.css';
//import {Button} from '../components/Button.jsx'

import {Link} from "react-router-dom";


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import TaskPage from "./taskpage";

import { useAuthState } from 'react-firebase-hooks/auth';



function TaskPage() {
 return (
     <div>
         <h3>Welcome to TaskPage</h3>
     </div>   
 )
}
export default TaskPage;

