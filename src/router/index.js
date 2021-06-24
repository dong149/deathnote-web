import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './main';
import '../Styles/styles.scss';
import Summoner from './summoner';
import DeathnoteFunction from './deathnoteFunction';
import withTracker from './withTracker';
import DeathnoteRanker from './deathnoteRanker';
export const EntryRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={withTracker(Main, {})} />
                <Route
                    path="/summoner/:name"
                    component={withTracker(Summoner, {})}
                />
                <Route
                    path="/deathnote/function"
                    component={withTracker(DeathnoteFunction, {})}
                />
                <Route
                    path="/deathnote/ranker"
                    component={withTracker(DeathnoteRanker, {})}
                />
            </Switch>
        </BrowserRouter>
    );
};
