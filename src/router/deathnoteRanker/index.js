import React, { useEffect, useState } from 'react';
import DeathnoteFooter from '../../Components/DeathnoteFooter';
import DeathnoteMainHeader from '../../Components/DeathnoteMainHeader';
import { isEmpty } from '../../Functions';
import { deathnoteService } from '../../Services/deathnoteService';
import '../../Styles/router/deathnoteRanker.scss';

const DeathnoteRanker = () => {
    const [rankData, setRankData] = useState({});

    useEffect(() => {
        deathnoteService.getDeathnoteTrollerRank(100).then((data) => {
            setRankData(data.rankList);
            console.log(data);
        });
    }, []);
    // const profileSrc = `https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/${data.summonerIcon}.png`;

    const getProfileSrc = (data) => {
        return `url(https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/${data}.png) 0% 0% / cover`;
    };

    return (
        <>
            <DeathnoteMainHeader />
            <div className="DeathnoteRankerAllWrap">
                <div className="DeathnoteRankerWrap">
                    <div className="DeathnoteRanker">
                        <div className="DeathnoteRankerLeft">
                            {!isEmpty(rankData) && (
                                <div
                                    key={0}
                                    className="DeathnoteRankerFirstWrap"
                                >
                                    <div className="DeathnoteRankerFirst">
                                        <div
                                            className="DeathnoteRankerFirstImg"
                                            style={{
                                                background: getProfileSrc(
                                                    rankData[0].summonerIcon
                                                ),
                                            }}
                                        ></div>
                                        <div className="DeathnoteRankerFirstContent">
                                            <span className="DeathnoteRankerFirstContentName">
                                                {rankData[0].summonerName}
                                            </span>
                                            <span className="DeathnoteRankerFirstContentScore1">
                                                {rankData[0].summonerTier}{' '}
                                                {rankData[0].summonerRank}
                                            </span>
                                            <span className="DeathnoteRankerFirstContentScore2">
                                                {rankData[0].trollerScore}점
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {!isEmpty(rankData) && (
                                <div className="DeathnoteRankerSecondAndThirdWrap">
                                    <div
                                        key={1}
                                        className="DeathnoteRankerSecondAndThird"
                                    >
                                        <div className="DeathnoteRankerSecondAndThirdBody">
                                            <div
                                                className="DeathnoteRankerSecondAndThirdImg"
                                                style={{
                                                    background: getProfileSrc(
                                                        rankData[1].summonerIcon
                                                    ),
                                                }}
                                            ></div>
                                            <div className="DeathnoteRankerSecondAndThirdContent">
                                                <span className="DeathnoteRankerSecondAndThirdName">
                                                    {rankData[1].summonerName}
                                                </span>
                                                <div className="DeathnoteRankerSecondAndThirdScoreWrap">
                                                    <span className="DeathnoteRankerSecondAndThirdScore1">
                                                        {
                                                            rankData[1]
                                                                .summonerTier
                                                        }{' '}
                                                        {
                                                            rankData[1]
                                                                .summonerRank
                                                        }
                                                    </span>
                                                    <span className="DeathnoteRankerSecondAndThirdScore2">
                                                        {
                                                            rankData[1]
                                                                .trollerScore
                                                        }
                                                        점
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        key={2}
                                        className="DeathnoteRankerSecondAndThird"
                                    >
                                        <div className="DeathnoteRankerSecondAndThirdBody">
                                            <div
                                                className="DeathnoteRankerSecondAndThirdImg"
                                                style={{
                                                    background: getProfileSrc(
                                                        rankData[2].summonerIcon
                                                    ),
                                                }}
                                            ></div>
                                            <div className="DeathnoteRankerSecondAndThirdContent">
                                                <span className="DeathnoteRankerSecondAndThirdName">
                                                    {rankData[2].summonerName}
                                                </span>
                                                <div className="DeathnoteRankerSecondAndThirdScoreWrap">
                                                    <span className="DeathnoteRankerSecondAndThirdScore1">
                                                        {
                                                            rankData[2]
                                                                .summonerTier
                                                        }{' '}
                                                        {
                                                            rankData[2]
                                                                .summonerRank
                                                        }
                                                    </span>
                                                    <span className="DeathnoteRankerSecondAndThirdScore2">
                                                        {
                                                            rankData[2]
                                                                .trollerScore
                                                        }
                                                        점
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="DeathnoteRankerRestWrap">
                                {!isEmpty(rankData) &&
                                    rankData.map((data, key) => {
                                        if (key > 2) {
                                            return (
                                                <div
                                                    key={key}
                                                    className="DeathnoteRankerRest"
                                                >
                                                    <span className="DeathnoteRankerRestRank">
                                                        {key + 1}
                                                    </span>
                                                    <div
                                                        className="DeathnoteRankerRestImg"
                                                        style={{
                                                            background:
                                                                getProfileSrc(
                                                                    data.summonerIcon
                                                                ),
                                                        }}
                                                    ></div>
                                                    <span className="DeathnoteRankerRestName">
                                                        {data.summonerName}
                                                    </span>
                                                    <span className="DeathnoteRankerRestScore1">
                                                        {data.summonerTier}{' '}
                                                        {data.summonerRank}
                                                    </span>
                                                    <span className="DeathnoteRankerRestScore2">
                                                        {data.trollerScore}점
                                                    </span>
                                                </div>
                                            );
                                        }
                                    })}
                            </div>
                        </div>
                        <div className="DeathnoteRankerRight"></div>
                    </div>
                </div>
            </div>
            <DeathnoteFooter />
        </>
    );
};

export default DeathnoteRanker;
