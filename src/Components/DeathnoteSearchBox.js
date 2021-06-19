import React from 'react';
import '../Styles/component/deathnoteSearch.scss';
const DeathnoteSearchBox = () => {


    return <div className="DeathnoteSearch">
        
        <input
            className="SearchBox"
            placeholder="소환사명, 소환사명, ..."
        />
        <button
            className="SearchButton"
            onClick={() => {
            }}
        >
        검색
        </button>

    </div>;
};

export default DeathnoteSearchBox;
