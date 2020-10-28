import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginPage from "../pages/LoginPage"
import DashboardRoute from './DashboardRoute';


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/Login" component={ LoginPage } />
                <Route path="/" component={ DashboardRoute } />
            </Switch>
        </Router>
    )
}
