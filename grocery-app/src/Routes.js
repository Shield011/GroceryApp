import React from 'react'
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import LoginPage from './module /login/LoginPage';
import Dashboard from './module /dashboard/Dashboard';
import Vegetables from './module /dashboard/Vegetables';
import Fruits from './module /dashboard/Fruits';
import Snacks from './module /dashboard/Snacks';
import Beverages from './module /dashboard/Beverages';

function Routes() {
    return (
        <div>
             <Router history={history}>
                <Switch>
                    <Route exact path="/"  component={LoginPage} />
                    <Route exact path="/dashboard" module={Dashboard} />
                    <Route path="/all" component={Vegetables} />
                    <Route path="/fruits" component={Fruits} />

                   
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
