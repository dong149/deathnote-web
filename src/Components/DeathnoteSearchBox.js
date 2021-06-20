import React, { useState } from 'react';
import { useHistory } from 'react-router';
import '../Styles/component/deathnoteSearch.scss';
const DeathnoteSearchBox = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const enterEvent = async () => {
        try {
            history.push({
                pathname: `/summoner/name=${name}`,
            });
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };
    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            enterEvent();
        }
    };
    return (
        <div className="DeathnoteSearchWrap">
            <div className="DeathnoteSearch">
                <input
                    className="SearchBox"
                    placeholder="소환사명, 소환사명, ..."
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                        handleKeyPress(e);
                    }}
                />
                <button
                    className="SearchButton"
                    onClick={() => {
                        enterEvent();
                    }}
                >
                    검색
                </button>
            </div>
        </div>
    );
};

export default DeathnoteSearchBox;
