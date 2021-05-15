import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AdminDashboard from './components/pages/AdminDashboard';
import Subscribers from './components/pages/Subscribers';
import AddPatient from './components/pages/AddPatient';
import Signin from "./components/pages/Signin";
import {PrivateRoute} from './config/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Signin} />
        <PrivateRoute path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/subscribers/:id" component={Subscribers} />
        <Route path="/add-subscribers" component={AddPatient} />
      </Switch>
    </div>
  );
}

export default App;
