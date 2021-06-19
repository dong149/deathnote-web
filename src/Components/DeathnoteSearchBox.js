import React from 'react';
import '../Styles/component/deathnoteSearch.scss';
const DeathnoteSearchBox = (props) => {
    const { data } = props;
    return (
        <div className="DeathnoteSearchWrap">
            <div className="DeathnoteSearch">
                <input
                    className="SearchBox"
                    placeholder="소환사명, 소환사명, ..."
                />
                <button className="SearchButton" onClick={() => {}}>
                    검색
                </button>
            </div>
        </div>
    );
};

export default DeathnoteSearchBox;
