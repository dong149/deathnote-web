import React from 'react';
import {
    BrowserRouter,
    Route,
    withRouter,
    Switch,
    Router,
} from 'react-router-dom';
import Main from './main';
import '../Styles/styles.scss';
import Summoner from './summoner';

export const EntryRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/summoner/:name" component={Summoner} />
        </Switch>
    </BrowserRouter>
);
