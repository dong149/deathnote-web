import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './main';
import '../Styles/styles.scss';
import Summoner from './summoner';
import DeathnoteFunction from './deathnoteFunction';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
export const EntryRoute = () => {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID, { debug: true });
    const history = createBrowserHistory();
    history.listen((location) => {
        ReactGA.set({ set: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/summoner/:name" component={Summoner} />
                <Route
                    path="/deathnote/function"
                    component={DeathnoteFunction}
                />
            </Switch>
        </BrowserRouter>
    );
};
