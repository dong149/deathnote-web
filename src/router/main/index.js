import React, { useEffect, useState } from 'react';
import '../../Styles/router/main.scss';

const Main = () => {
    const [name, setName] = useState('');

    const enterEvent = async () => {
        // try {
        //   const temp = await getSummonerByName(summoners);
        //   getLeagueByEncryptedId(temp);
        // }
        // catch (err) {
        //   console.error(err);
        // }
    };
    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            enterEvent();
        }
    };

    return (
        <>
            <div className="mainBox">
                <img
                    className="mainLogo"
                    src="/deathnote.png"
                    alt="deathnote_logo"
                />
                <div className="mainSearch">
                    <input
                        className="mainSearchForm"
                        placeholder="소환사명, 소환사명, ..."
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            handleKeyPress(e);
                        }}
                    />
                    <button
                        className="mainSearchFormButton"
                        onClick={() => {
                            enterEvent();
                        }}
                    >
                        검색
                    </button>
                </div>
            </div>
            {/* {summonersLeague ? (
                <div className="summoner-info-box">
                    <Logo
                        src={require(`../public/ranked-emblems/Emblem_${summonersLeague[0].tier}.png`)}
                        alt="summonersTierImg"
                    />
                </div>
            ) : null} */}
        </>
    );
};

export default Main;
