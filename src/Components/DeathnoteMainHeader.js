import React from 'react';
import '../Styles/component/deathnoteMainHeader.scss';
import DeathnoteSearchBox from './DeathnoteSearchBox';
const DeathnoteMainHeader = (props) => {
    const { data } = props;
    return (
        <div className="mainHeader">
            <div className="mainLogoWrap">
                <a href="/">
                    <img className="mainLogo" src="/deathnote-title.png" />
                </a>
            </div>
            <DeathnoteSearchBox data={data} />
        </div>
    );
};

export default DeathnoteMainHeader;
