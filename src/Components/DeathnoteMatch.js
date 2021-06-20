import React, { useState } from 'react';
import { getChampionNamebyId } from '../champion';
import { isEmpty } from '../Functions';
import '../Styles/component/deathnoteMatch.scss';

const DeathnoteMatch = (props) => {
    const { data } = props;

    return (
        <>
            <div className="DeathnoteMatch">
                {!isEmpty(data.summonerMatch) &&
                    data.summonerMatch.map((data, key) => {
                        const championName = getChampionNamebyId(
                            String(data.matchChampion)
                        );
                        console.log(championName);
                        if (data.matchWin) {
                            return (
                                <div className="summonerMatchWin">
                                    <div className="summonerMatchImgWrap">
                                        <img
                                            className="summonerMatchImg"
                                            src={`https://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/${championName}.png`}
                                        />
                                    </div>
                                    <div className="summonerMatchRank">
                                        {data.matchRank}등
                                    </div>
                                    <div className="summonerMatchKDA">
                                        {data.matchKills}/{data.matchDeaths}/
                                        {data.matchAssists}
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="summonerMatchLose">
                                    <div className="summonerMatchImgWrap">
                                        <img
                                            className="summonerMatchImg"
                                            src={`https://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/${championName}.png`}
                                        />
                                    </div>
                                    <div className="summonerMatchRank">
                                        {data.matchRank}등
                                    </div>
                                    <div className="summonerMatchKDA">
                                        {data.matchKills}/{data.matchDeaths}/
                                        {data.matchAssists}
                                    </div>
                                </div>
                            );
                        }
                    })}
            </div>
        </>
    );
};

export default DeathnoteMatch;
