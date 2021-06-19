import React from 'react';
import '../Styles/component/deathnoteMainHeader.scss';
import DeathnoteSearchBox from './DeathnoteSearchBox';
const DeathnoteMainHeader = () => {


    return <div className="DeathnoteMainHeader">
        <img 
            src="/deathnote-title.png"
            width="300"
        />
        <DeathnoteSearchBox/>
    </div>;
};

export default DeathnoteMainHeader;