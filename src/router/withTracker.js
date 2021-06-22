import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize({ trackingId: process.env.REACT_APP_TRACKING_ID });

export default (WrappedComponent, options = {}) => {
    const trackPage = (page) => {
        ReactGA.set({
            page,
            ...options,
        });
        ReactGA.pageview(page);
    };

    const HOC = (props) => {
        // console.log(props);
        useEffect(
            () => trackPage(props.location.pathname),
            [props.location.pathname]
        );
        return <WrappedComponent {...props} />;
    };

    return HOC;
};
