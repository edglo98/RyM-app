import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Navbar from "../components/Navbar"
import HomePage from "../pages/HomePage"
import CharacterPage from '../pages/CharacterPage';
import EpisodePage from '../pages/EpisodePage';
import LocationPage from '../pages/LocationPage';
import BackgroundMain from '../components/BackgroundMain';


export default function DashboardRoute() {
    return (
        <>
            <Navbar />
            <BackgroundMain />
            <Switch>
                {/* <Route path="/character/:heroId" component={ CharacterPage } /> */}
                <Route path="/character/" component={ CharacterPage } />
                <Route path="/episode/" component={ EpisodePage } />
                <Route path="/location/" component={ LocationPage } />
                <Route path="/home" component={ HomePage } />

                <Redirect to="/home" />
            </Switch>
        </>
    )
}
