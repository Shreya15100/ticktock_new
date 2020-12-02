import React, { useState, Component } from 'react';
import './App.css';
//import { app } from 'firebase';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
//pages
import MainPage from "./pages";
import FilePage from "./pages/filepage";
import TaskPage from "./pages/taskpage";
import CalendarPage from "./pages/calendar";
//import Nav from './Nav';
class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
      <Route exact path = "/" component = {MainPage} />
      <Route exact path = "/filepage" component = {FilePage} />
      <Route exact path = "/taskpage" component = {TaskPage} />
      <Route exact path = "/calendarpage" component = {CalendarPage} />
      </Switch>
    </Router>
    )
  }
}
export default App;