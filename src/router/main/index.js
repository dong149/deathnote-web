import React, { useEffect, useState } from 'react';
import { getChampionNamebyId } from '../../champion';
import { isEmpty } from '../../Functions';
import { deathnoteService } from '../../Services/deathnoteService';
import '../../Styles/router/main.scss';

const Main = () => {
    const [name, setName] = useState('');
    const [summonerInfo, setSummonerInfo] = useState(test);
    const enterEvent = async () => {
        try {
            const res = await deathnoteService.getDeathnoteByName(name);
            console.log(res);
            setSummonerInfo(res);
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
            {!isEmpty(summonerInfo) && (
                <div className="summonerInfo">
                    <img
                        src={`https://ddragon.leagueoflegends.com/cdn/10.8.1/img/profileicon/${summonerInfo.summonerIcon}.png`}
                        alt="소환사 프로필 이미지"
                    />
                    {!isEmpty(summonerInfo.summonerMatch) &&
                        summonerInfo.summonerMatch.map((data, key) => {
                            const championName = getChampionNamebyId(
                                String(data.matchChampion)
                            );
                            console.log(championName);
                            return (
                                <div>
                                    {data.matchRank}
                                    <img
                                        src={`https://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${championName}.png`}
                                    />
                                </div>
                            );
                        })}

                    <p>{summonerInfo.trollerScore}</p>
                </div>
            )}
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

const test = {
    trollerScore: 70,
    matchCount: 21,
    matchWin: 8,
    matchLose: 13,
    summonerIcon: 6,
    summonerTier: 'GRANDMASTER',
    summonerRank: 'I',
    summonerMatch: [
        {
            matchRank: 1,
            matchWin: true,
            matchChampion: 39,
            matchKills: 10,
            matchDeaths: 2,
            matchAssists: 6,
        },
        {
            matchRank: 2,
            matchWin: true,
            matchChampion: 142,
            matchKills: 5,
            matchDeaths: 3,
            matchAssists: 13,
        },
        {
            matchRank: 5,
            matchWin: false,
            matchChampion: 238,
            matchKills: 3,
            matchDeaths: 5,
            matchAssists: 2,
        },
        {
            matchRank: 6,
            matchWin: false,
            matchChampion: 876,
            matchKills: 5,
            matchDeaths: 6,
            matchAssists: 10,
        },
        {
            matchRank: 6,
            matchWin: false,
            matchChampion: 238,
            matchKills: 5,
            matchDeaths: 5,
            matchAssists: 7,
        },
        {
            matchRank: 4,
            matchWin: false,
            matchChampion: 238,
            matchKills: 9,
            matchDeaths: 5,
            matchAssists: 6,
        },
        {
            matchRank: 7,
            matchWin: true,
            matchChampion: 142,
            matchKills: 3,
            matchDeaths: 2,
            matchAssists: 5,
        },
        {
            matchRank: 2,
            matchWin: false,
            matchChampion: 142,
            matchKills: 7,
            matchDeaths: 5,
            matchAssists: 8,
        },
        {
            matchRank: 6,
            matchWin: false,
            matchChampion: 236,
            matchKills: 3,
            matchDeaths: 5,
            matchAssists: 6,
        },
        {
            matchRank: 7,
            matchWin: false,
            matchChampion: 142,
            matchKills: 5,
            matchDeaths: 5,
            matchAssists: 9,
        },
        {
            matchRank: 10,
            matchWin: false,
            matchChampion: 142,
            matchKills: 0,
            matchDeaths: 11,
            matchAssists: 1,
        },
        {
            matchRank: 3,
            matchWin: true,
            matchChampion: 61,
            matchKills: 8,
            matchDeaths: 5,
            matchAssists: 7,
        },
        {
            matchRank: 7,
            matchWin: false,
            matchChampion: 236,
            matchKills: 3,
            matchDeaths: 10,
            matchAssists: 7,
        },
        {
            matchRank: 4,
            matchWin: true,
            matchChampion: 4,
            matchKills: 5,
            matchDeaths: 8,
            matchAssists: 13,
        },
        {
            matchRank: 9,
            matchWin: false,
            matchChampion: 85,
            matchKills: 2,
            matchDeaths: 9,
            matchAssists: 0,
        },
        {
            matchRank: 2,
            matchWin: true,
            matchChampion: 236,
            matchKills: 3,
            matchDeaths: 0,
            matchAssists: 9,
        },
        {
            matchRank: 1,
            matchWin: true,
            matchChampion: 61,
            matchKills: 4,
            matchDeaths: 5,
            matchAssists: 5,
        },
        {
            matchRank: 6,
            matchWin: false,
            matchChampion: 235,
            matchKills: 0,
            matchDeaths: 3,
            matchAssists: 4,
        },
        {
            matchRank: 4,
            matchWin: true,
            matchChampion: 134,
            matchKills: 4,
            matchDeaths: 4,
            matchAssists: 4,
        },
        {
            matchRank: 4,
            matchWin: false,
            matchChampion: 236,
            matchKills: 7,
            matchDeaths: 7,
            matchAssists: 2,
        },
        {
            matchRank: 9,
            matchWin: false,
            matchChampion: 236,
            matchKills: 1,
            matchDeaths: 2,
            matchAssists: 2,
        },
    ],
};
