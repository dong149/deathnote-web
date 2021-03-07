import React, { useEffect, useState } from 'react';
import { getChampionNamebyId } from '../../champion';
import { isEmpty } from '../../Functions';
import { deathnoteService } from '../../Services/deathnoteService';
import { Doughnut } from 'react-chartjs-2';
import '../../Styles/router/main.scss';

const Main = () => {
    const [name, setName] = useState('');
    const [summonerInfo, setSummonerInfo] = useState(test);
    const [reportGood, setReportGood] = useState(1);
    const [reportBad, setReportBad] = useState(1);
    const [reportType, setReportType] = useState(false);
    const [reportDescription, setReportDescription] = useState('');
    const [reportViewOpen, setReportViewOpen] = useState(false);
    const [reports, setReports] = useState(reportTest);
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

    let ReportChart = () => {
        let data = {
            datasets: [
                {
                    data: [reportBad, reportGood],

                    backgroundColor: ['rgba(0,0,0, 1)', 'rgba(0,0,0,0.1)'],
                    borderColor: ['#ffffff', '#ffffff'],
                    hoverBackgroundColor: ['#FF0100', '#56C1FF'],
                },
            ],
            labels: ['리폿', '칭찬'],
        };
        let options = {
            animation: false,
        };
        return <Doughnut data={data} options={options} className="mainChart" />;
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
                    <div className="summonerInfoHeader">
                        <img
                            src={`https://ddragon.leagueoflegends.com/cdn/10.8.1/img/profileicon/${summonerInfo.summonerIcon}.png`}
                            alt="소환사 프로필 이미지"
                        />
                        <div className="summonerInfoHeaderLeft">
                            <div className="summonerInfoHeaderLeftName">
                                {summonerInfo.summonerName}
                            </div>
                            <div className="summonerInfoHeaderLeftLevel">
                                {summonerInfo.summonerLevel} Level
                            </div>
                        </div>
                        {/* <div className="summonerInfoHeaderRight">
                            버스기사입니다.
                        </div> */}
                    </div>
                    <div className="summonerSubInfo">
                        <img
                            className="tierImg"
                            src={`/ranked-emblems/Emblem_${summonerInfo.summonerTier}.png`}
                        />
                        <div className="summonerSubInfoHeaderLeft">
                            <div className="summonerSubInfoHeaderLeftTier">
                                {summonerInfo.summonerTier}{' '}
                                {summonerInfo.summonerRank}
                            </div>
                            <div className="summonerSubInfoHeaderLeftWinningRate">
                                승률{summonerInfo.matchWinningRate}%
                            </div>
                            <div className="summonerSubInfoHeaderLeftWinningRate">
                                {summonerInfo.matchWin}승{' '}
                                {summonerInfo.matchLose}패
                            </div>
                        </div>
                        <div className="summonerSubInfoHeaderRight">
                            <div className="summonerSubInfoHeaderRightCount">
                                최근 {summonerInfo.matchCount}경기
                            </div>
                            <div className="summonerSubInfoHeaderRightScore">
                                <span style={{ color: 'red' }}>
                                    {summonerInfo.trollerScore}
                                </span>
                                점
                            </div>
                        </div>
                    </div>

                    <ReportChart />
                    <div className="summoner-review">
                        <span className="summoner-review-text">REVIEW</span>

                        <div className="summoner-review-type">
                            <span className="summoner-review-type-text">
                                MODE :{' '}
                            </span>
                            <div
                                className="summoner-review-type-bad-wrap"
                                onClick={() => setReportType(!reportType)}
                            >
                                <span className="summoner-review-type-bad">
                                    리폿
                                </span>
                            </div>
                            <div
                                className="summoner-review-type-good-wrap"
                                onClick={() => setReportType(!reportType)}
                            >
                                <span className="summoner-review-type-good">
                                    칭찬
                                </span>
                            </div>
                        </div>
                        {reportType ? (
                            <>
                                <div className="summoner-review-good-input-wrap">
                                    <textarea
                                        className="summoner-review-good-input"
                                        onChange={(e) =>
                                            setReportDescription(e.target.value)
                                        }
                                        rows="4"
                                        value={reportDescription}
                                        placeholder="소환사의 리뷰를 작성해주세요."
                                        // onKeyPress={onReviewGoodKeyPress}
                                    />
                                </div>
                                <div className="summoner-review-btn-wrap">
                                    <span
                                        className="summoner-review-submit-btn"
                                        // onClick={() => onReviewSubmit('good')}
                                    >
                                        작성하기
                                    </span>
                                    <span className="summoner-review-close-btn">
                                        닫기
                                    </span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="summoner-review-bad-input-wrap">
                                    <textarea
                                        className="summoner-review-bad-input"
                                        onChange={(e) =>
                                            setReportDescription(e.target.value)
                                        }
                                        rows="4"
                                        value={reportDescription}
                                        placeholder="소환사의 리뷰를 작성해주세요."
                                        // onKeyPress={onReviewBadKeyPress}
                                    />
                                </div>
                                <div className="summoner-review-btn-wrap">
                                    <span
                                        className="summoner-review-submit-btn"
                                        // onClick={() => onReviewSubmit('bad')}
                                    >
                                        작성하기
                                    </span>
                                    <span className="summoner-review-close-btn">
                                        닫기
                                    </span>
                                </div>
                            </>
                        )}
                        {/* 소환사 리뷰 view */}
                        <div
                            className="review-view"
                            style={{
                                overflow: reportViewOpen ? 'visible' : 'hidden',
                                height: reportViewOpen ? 'auto' : '300px',
                                // backgroundColor: reviewViewOpen ? "white" : "rgba(0,0,0,0.8)",
                            }}
                        >
                            {!isEmpty(reports) &&
                                reports.map((data, key) => {
                                    if (data.report) {
                                        return (
                                            <div
                                                key={key}
                                                className="review-view-bad"
                                            >
                                                <div className="review-view-date-bad-wrap">
                                                    <span className="review-view-date-bad">
                                                        {/* {handleDate(
                                                        data.date
                                                    )} */}
                                                        10개월 전
                                                    </span>
                                                </div>
                                                <div className="review-view-content-bad-wrap">
                                                    <span className="review-view-content-bad">
                                                        {data.description}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                key={key}
                                                className="review-view-good"
                                            >
                                                <div className="review-view-date-good-wrap">
                                                    <span className="review-view-date-good">
                                                        10개월 전
                                                        {/* {handleDate(
                                                        data.date
                                                    )} */}
                                                    </span>
                                                </div>
                                                <div className="review-view-content-good-wrap">
                                                    <span className="review-view-content-good">
                                                        {data.description}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                        </div>

                        {!isEmpty(reports) ? (
                            <>
                                {reportViewOpen ? (
                                    <div
                                        className="review-view-close-btn-wrap"
                                        onClick={() => {
                                            setReportViewOpen(!reportViewOpen);
                                        }}
                                    >
                                        <span className="review-view-close-btn">
                                            닫기
                                        </span>
                                    </div>
                                ) : (
                                    <div
                                        className="review-view-open-btn-wrap"
                                        onClick={() => {
                                            setReportViewOpen(!reportViewOpen);
                                        }}
                                    >
                                        <span className="review-view-open-btn">
                                            펼치기
                                        </span>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="review-none-wrap">
                                <span>비어있습니다. 작성해주세요!</span>
                            </div>
                        )}
                    </div>
                    {!isEmpty(summonerInfo.summonerMatch) &&
                        summonerInfo.summonerMatch.map((data, key) => {
                            const championName = getChampionNamebyId(
                                String(data.matchChampion)
                            );

                            if (data.matchWin) {
                                return (
                                    <div className="summonerMatchWin">
                                        <img
                                            src={`https://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${championName}.png`}
                                        />
                                        <div className="summonerMatchKDA">
                                            {data.matchKills}/{data.matchDeaths}
                                            /{data.matchAssists}
                                        </div>
                                        <div className="summonerMatchRank">
                                            {data.matchRank}등
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="summonerMatchLose">
                                        <img
                                            src={`https://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${championName}.png`}
                                        />
                                        <div className="summonerMatchKDA">
                                            {data.matchKills}/{data.matchDeaths}
                                            /{data.matchAssists}
                                        </div>
                                        <div className="summonerMatchRank">
                                            {data.matchRank}등
                                        </div>
                                    </div>
                                );
                            }
                        })}
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

const reportTest = [
    {
        id: 2,
        summonerName: 'hideonbush',
        description: '너무 반갑구~~',
        createdDate: '2021-03-05T20:45:03.405415',
        report: true,
    },
    {
        id: 5,
        summonerName: 'hideonbush',
        description: '너무 반가엉ㅎㅎ',
        createdDate: '2021-03-07T20:44:00.26224',
        report: false,
    },
];

const test = {
    summonerName: 'Hide on bush',
    trollerScore: 60,
    matchCount: 21,
    matchWinningRate: 52,
    matchWin: 238,
    matchLose: 217,
    summonerLevel: 425,
    summonerIcon: 6,
    summonerTier: 'GRANDMASTER',
    summonerRank: 'I',
    summonerMatch: [
        {
            matchRank: 3,
            matchWin: false,
            matchChampion: 236,
            matchKills: 8,
            matchDeaths: 6,
            matchAssists: 10,
            matchDealRank: 1,
            matchTankRank: 9,
            matchKdaScoreRank: 5,
            matchTowerDealRank: 1,
        },
        {
            matchRank: 3,
            matchWin: true,
            matchChampion: 236,
            matchKills: 9,
            matchDeaths: 3,
            matchAssists: 5,
            matchDealRank: 2,
            matchTankRank: 10,
            matchKdaScoreRank: 4,
            matchTowerDealRank: 2,
        },
        {
            matchRank: 9,
            matchWin: false,
            matchChampion: 235,
            matchKills: 3,
            matchDeaths: 7,
            matchAssists: 8,
            matchDealRank: 8,
            matchTankRank: 7,
            matchKdaScoreRank: 9,
            matchTowerDealRank: 5,
        },
        {
            matchRank: 2,
            matchWin: false,
            matchChampion: 134,
            matchKills: 6,
            matchDeaths: 3,
            matchAssists: 8,
            matchDealRank: 2,
            matchTankRank: 10,
            matchKdaScoreRank: 3,
            matchTowerDealRank: 3,
        },
        {
            matchRank: 2,
            matchWin: true,
            matchChampion: 112,
            matchKills: 3,
            matchDeaths: 0,
            matchAssists: 6,
            matchDealRank: 2,
            matchTankRank: 10,
            matchKdaScoreRank: 2,
            matchTowerDealRank: 1,
        },
        {
            matchRank: 9,
            matchWin: false,
            matchChampion: 104,
            matchKills: 1,
            matchDeaths: 5,
            matchAssists: 5,
            matchDealRank: 7,
            matchTankRank: 5,
            matchKdaScoreRank: 9,
            matchTowerDealRank: 6,
        },
        {
            matchRank: 7,
            matchWin: false,
            matchChampion: 517,
            matchKills: 2,
            matchDeaths: 5,
            matchAssists: 3,
            matchDealRank: 8,
            matchTankRank: 2,
            matchKdaScoreRank: 8,
            matchTowerDealRank: 6,
        },
        {
            matchRank: 4,
            matchWin: true,
            matchChampion: 134,
            matchKills: 3,
            matchDeaths: 2,
            matchAssists: 5,
            matchDealRank: 1,
            matchTankRank: 9,
            matchKdaScoreRank: 5,
            matchTowerDealRank: 4,
        },
        {
            matchRank: 9,
            matchWin: true,
            matchChampion: 134,
            matchKills: 2,
            matchDeaths: 5,
            matchAssists: 7,
            matchDealRank: 7,
            matchTankRank: 10,
            matchKdaScoreRank: 9,
            matchTowerDealRank: 7,
        },
        {
            matchRank: 3,
            matchWin: true,
            matchChampion: 39,
            matchKills: 10,
            matchDeaths: 4,
            matchAssists: 9,
            matchDealRank: 5,
            matchTankRank: 5,
            matchKdaScoreRank: 2,
            matchTowerDealRank: 3,
        },
        {
            matchRank: 9,
            matchWin: true,
            matchChampion: 77,
            matchKills: 4,
            matchDeaths: 5,
            matchAssists: 13,
            matchDealRank: 9,
            matchTankRank: 1,
            matchKdaScoreRank: 7,
            matchTowerDealRank: 7,
        },
        {
            matchRank: 10,
            matchWin: false,
            matchChampion: 134,
            matchKills: 3,
            matchDeaths: 5,
            matchAssists: 6,
            matchDealRank: 5,
            matchTankRank: 10,
            matchKdaScoreRank: 9,
            matchTowerDealRank: 7,
        },
        {
            matchRank: 2,
            matchWin: true,
            matchChampion: 134,
            matchKills: 7,
            matchDeaths: 3,
            matchAssists: 12,
            matchDealRank: 1,
            matchTankRank: 10,
            matchKdaScoreRank: 2,
            matchTowerDealRank: 3,
        },
        {
            matchRank: 8,
            matchWin: false,
            matchChampion: 134,
            matchKills: 1,
            matchDeaths: 5,
            matchAssists: 5,
            matchDealRank: 6,
            matchTankRank: 10,
            matchKdaScoreRank: 9,
            matchTowerDealRank: 3,
        },
        {
            matchRank: 3,
            matchWin: true,
            matchChampion: 235,
            matchKills: 8,
            matchDeaths: 5,
            matchAssists: 25,
            matchDealRank: 6,
            matchTankRank: 10,
            matchKdaScoreRank: 2,
            matchTowerDealRank: 2,
        },
        {
            matchRank: 9,
            matchWin: false,
            matchChampion: 203,
            matchKills: 7,
            matchDeaths: 6,
            matchAssists: 3,
            matchDealRank: 7,
            matchTankRank: 1,
            matchKdaScoreRank: 6,
            matchTowerDealRank: 10,
        },
        {
            matchRank: 2,
            matchWin: true,
            matchChampion: 61,
            matchKills: 8,
            matchDeaths: 2,
            matchAssists: 12,
            matchDealRank: 3,
            matchTankRank: 10,
            matchKdaScoreRank: 2,
            matchTowerDealRank: 3,
        },
        {
            matchRank: 8,
            matchWin: false,
            matchChampion: 134,
            matchKills: 4,
            matchDeaths: 6,
            matchAssists: 7,
            matchDealRank: 5,
            matchTankRank: 10,
            matchKdaScoreRank: 8,
            matchTowerDealRank: 7,
        },
        {
            matchRank: 9,
            matchWin: false,
            matchChampion: 235,
            matchKills: 4,
            matchDeaths: 9,
            matchAssists: 12,
            matchDealRank: 8,
            matchTankRank: 8,
            matchKdaScoreRank: 10,
            matchTowerDealRank: 6,
        },
        {
            matchRank: 4,
            matchWin: false,
            matchChampion: 777,
            matchKills: 1,
            matchDeaths: 2,
            matchAssists: 1,
            matchDealRank: 5,
            matchTankRank: 4,
            matchKdaScoreRank: 6,
            matchTowerDealRank: 5,
        },
        {
            matchRank: 4,
            matchWin: true,
            matchChampion: 142,
            matchKills: 1,
            matchDeaths: 1,
            matchAssists: 6,
            matchDealRank: 4,
            matchTankRank: 8,
            matchKdaScoreRank: 5,
            matchTowerDealRank: 4,
        },
    ],
};
