import React from 'react';
import '../Styles/component/deathnoteSearch.scss';
const DeathnoteSearch = () => {
    /*
비즈니스 로직
*/
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

export default DeathnoteSearch;
