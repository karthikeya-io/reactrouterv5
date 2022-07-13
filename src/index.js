import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Visit from './Visit';
import User from './User';
import Notfound from './Notfound';

const routing = (
  <Router>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/user" component={User}/>
    <Route path="/visit" component={Visit}/>
    <Route component={Notfound}></Route>
  </Switch>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    routing
);

