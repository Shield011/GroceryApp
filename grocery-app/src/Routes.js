import React from 'react'
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import LoginPage from './module /login/LoginPage';
import Dashboard from './module /dashboard/Dashboard';
import Vegetables from './common/Vegetables';
import Fruits from './common/Fruits';
import Snacks from './common/Snacks';
import Beverages from './common/Beverages';

function Routes() {
    return (
        <div>
             <Router history={history}>
                <Switch>
                    <Route exact path="/"  component={LoginPage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route path="/all" component={Vegetables} />
                    <Route path="/fruits" component={Fruits} />
                   
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
