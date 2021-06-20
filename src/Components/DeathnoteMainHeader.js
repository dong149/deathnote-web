import React from 'react';
import '../Styles/component/deathnoteMainHeader.scss';
import DeathnoteSearchBox from './DeathnoteSearchBox';
const DeathnoteMainHeader = () => {
    return (
        <div className="mainHeader">
            <div className="mainLogoWrap">
                <a href="/">
                    <img className="mainLogo" src="/deathnote-title.png" />
                </a>
            </div>
            <DeathnoteSearchBox />
        </div>
    );
};

export default DeathnoteMainHeader;
