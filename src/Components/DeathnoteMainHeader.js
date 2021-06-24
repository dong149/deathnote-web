import React from 'react';
import '../Styles/component/deathnoteMainHeader.scss';
import DeathnoteSearchBox from './DeathnoteSearchBox';
import { Link, useLocation } from 'react-router-dom';
const DeathnoteMainHeader = () => {
    const location = useLocation();
    return (
        <div className="MainHeaderWrap">
            <div className="MainHeader">
                <div className="MainHeaderLeft">
                    <a href="/">
                        <div className="MainLogoWrap">
                            <img
                                className="MainLogo"
                                src="/deathnote-title.png"
                                alt="deathnotegg"
                            />
                        </div>
                    </a>
                    <div className="MainHeaderNavigationWrap">
                        <div className="MainHeaderNavigation">
                            <div className="MainHeaderNavigationItem">
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}
                                    to="/"
                                >
                                    검색
                                </Link>
                            </div>

                            <div className="MainHeaderNavigationItem">
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}
                                    to="/deathnote/ranker"
                                >
                                    순위표
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {location.pathname !== '/' && (
                    <div className="MainHeaderSearchBoxWrap">
                        <DeathnoteSearchBox />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeathnoteMainHeader;
