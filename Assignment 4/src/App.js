/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other
* source (including web sites) or distributed to other students.
*
* Name: Cindy Le        Student ID:          Date: June 27, 2019
*
********************************************************************************/

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Overview from './components/Overview.js';
import Projects from './components/Projects.js';
import Teams from './components/Teams.js';
import Employees from './components/Employees.js';
import NotFound from './components/NotFound.js';

class App extends React.Component {
  render() {
    let url = "https://sleepy-inlet-67076.herokuapp.com/"
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview dataSource={url}/>
        )}/>
        <Route exact path='/projects' render={() => (
          <Projects dataSource={url + "projects"}/>
        )}/>
        <Route exact path='/teams' render={() => (
          <Teams dataSource={url + "teams"}/>
        )}/>
        <Route exact path='/employees' render={() => (
          <Employees dataSource={url + "employees"}/>
        )}/>
        <Route render={() => (
          <NotFound />
        )}/>
      </Switch>
    );
  }
}

export default App;
