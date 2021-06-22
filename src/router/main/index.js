import React, { useEffect, useState } from 'react';
import { getChampionNamebyId } from '../../champion';
import { isEmpty } from '../../Functions';
import { deathnoteService } from '../../Services/deathnoteService';
import { Doughnut } from 'react-chartjs-2';
import { useHistory } from 'react-router';
import '../../Styles/router/main.scss';
import DeathnoteFooter from '../../Components/DeathnoteFooter';
import { createBrowserHistory } from 'history';
const Main = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [keywordData, setKeywordData] = useState([]);
    const enterEvent = async () => {
        try {
            history.push({
                pathname: `/summoner/name=${name}`,
            });
        } catch (err) {
            console.error(err);
        }
    };
    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            enterEvent();
        }
    };

    useEffect(() => {
        deathnoteService.getDeathnoteByKeyword(name).then((data) => {
            setKeywordData(data.summonerKeywordDtoList);
        });
    }, [name]);

    return (
        <>
            <div className="mainBox">
                <a href="https://deathnote.gg">
                    <img
                        className="mainLogo"
                        src="/deathnote.png"
                        alt="deathnote_logo"
                    />
                </a>
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
                <div className="mainSearchKeywordWrap">
                    {!isEmpty(keywordData) &&
                        keywordData.map((data, key) => {
                            let profileSrc = `https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/${data.summonerIcon}.png`;
                            return (
                                <div
                                    className="mainSearchKeyword"
                                    key={key}
                                    onClick={() => {
                                        history.push({
                                            pathname: `/summoner/name=${data.summonerName}`,
                                        });
                                    }}
                                >
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img
                                                        className="mainSearchKeywordImg"
                                                        src={profileSrc}
                                                        alt={data.summonerIcon}
                                                    />
                                                </td>
                                                <td className="mainSearchKeywordContent">
                                                    <div className="mainSearchKeywordSummonerName">
                                                        {data.summonerName}
                                                    </div>
                                                    <div className="mainSearchKeywordSummonerInfo">
                                                        {data.summonerTier}{' '}
                                                        {data.summonerRank}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}
                </div>
                <a
                    href="/deathnote/function"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="mainDeathnoteDescription">
                        Powered By{' '}
                        <span style={{ color: '#FF0061', fontWeight: 'bold' }}>
                            Deathnote(x)
                        </span>
                    </div>
                </a>
                {/* <DeathnoteFooter /> */}
            </div>
        </>
    );
};

export default Main;
// {!isEmpty(summonerInfo) && (
//     <div className="summonerInfo">
//         <div className="summonerInfoHeader">
//             <img
//                 src={`https://ddragon.leagueoflegends.com/cdn/10.8.1/img/profileicon/${summonerInfo.summonerIcon}.png`}
//                 alt="소환사 프로필 이미지"
//             />
//             <div className="summonerInfoHeaderLeft">
//                 <div className="summonerInfoHeaderLeftName">
//                     {summonerInfo.summonerName}
//                 </div>
//                 <div className="summonerInfoHeaderLeftLevel">
//                     {summonerInfo.summonerLevel} Level
//                 </div>
//             </div>
//         </div>
//         <div className="summonerSubInfo">
//             <img
//                 className="tierImg"
//                 src={`/ranked-emblems/Emblem_${summonerInfo.summonerTier}.png`}
//             />
//             <div className="summonerSubInfoHeaderLeft">
//                 <div className="summonerSubInfoHeaderLeftTier">
//                     {summonerInfo.summonerTier}{' '}
//                     {summonerInfo.summonerRank}
//                 </div>
//                 <div className="summonerSubInfoHeaderLeftWinningRate">
//                     승률{summonerInfo.matchWinningRate}%
//                 </div>
//                 <div className="summonerSubInfoHeaderLeftWinningRate">
//                     {summonerInfo.matchWin}승{' '}
//                     {summonerInfo.matchLose}패
//                 </div>
//             </div>
//             <div className="summonerSubInfoHeaderRight">
//                 <div className="summonerSubInfoHeaderRightCount">
//                     최근 {summonerInfo.matchCount}경기
//                 </div>
//                 <div className="summonerSubInfoHeaderRightScore">
//                     <span style={{ color: 'red' }}>
//                         {summonerInfo.trollerScore}
//                     </span>
//                     점
//                 </div>
//             </div>
//         </div>

//         <ReportChart />
//         <div className="summoner-review">
//             <span className="summoner-review-text">REVIEW</span>

//             <div className="summoner-review-type">
//                 <span className="summoner-review-type-text">
//                     MODE :{' '}
//                 </span>
//                 <div
//                     className="summoner-review-type-bad-wrap"
//                     onClick={() => setReportType(!reportType)}
//                 >
//                     <span className="summoner-review-type-bad">
//                         리폿
//                     </span>
//                 </div>
//                 <div
//                     className="summoner-review-type-good-wrap"
//                     onClick={() => setReportType(!reportType)}
//                 >
//                     <span className="summoner-review-type-good">
//                         칭찬
//                     </span>
//                 </div>
//             </div>
//             {reportType ? (
//                 <>
//                     <div className="summoner-review-good-input-wrap">
//                         <textarea
//                             className="summoner-review-good-input"
//                             onChange={(e) =>
//                                 setReportDescription(e.target.value)
//                             }
//                             rows="4"
//                             value={reportDescription}
//                             placeholder="소환사의 리뷰를 작성해주세요."
//                             // onKeyPress={onReviewGoodKeyPress}
//                         />
//                     </div>
//                     <div className="summoner-review-btn-wrap">
//                         <span
//                             className="summoner-review-submit-btn"
//                             // onClick={() => onReviewSubmit('good')}
//                         >
//                             작성하기
//                         </span>
//                         <span className="summoner-review-close-btn">
//                             닫기
//                         </span>
//                     </div>
//                 </>
//             ) : (
//                 <>
//                     <div className="summoner-review-bad-input-wrap">
//                         <textarea
//                             className="summoner-review-bad-input"
//                             onChange={(e) =>
//                                 setReportDescription(e.target.value)
//                             }
//                             rows="4"
//                             value={reportDescription}
//                             placeholder="소환사의 리뷰를 작성해주세요."
//                             // onKeyPress={onReviewBadKeyPress}
//                         />
//                     </div>
//                     <div className="summoner-review-btn-wrap">
//                         <span
//                             className="summoner-review-submit-btn"
//                             // onClick={() => onReviewSubmit('bad')}
//                         >
//                             작성하기
//                         </span>
//                         <span className="summoner-review-close-btn">
//                             닫기
//                         </span>
//                     </div>
//                 </>
//             )}
//             {/* 소환사 리뷰 view */}
//             <div
//                 className="review-view"
//                 style={{
//                     overflow: reportViewOpen ? 'visible' : 'hidden',
//                     height: reportViewOpen ? 'auto' : '300px',
//                     // backgroundColor: reviewViewOpen ? "white" : "rgba(0,0,0,0.8)",
//                 }}
//             >
//                 {!isEmpty(reports) &&
//                     reports.map((data, key) => {
//                         if (data.report) {
//                             return (
//                                 <div
//                                     key={key}
//                                     className="review-view-bad"
//                                 >
//                                     <div className="review-view-date-bad-wrap">
//                                         <span className="review-view-date-bad">
//                                             {/* {handleDate(
//                                             data.date
//                                         )} */}
//                                             10개월 전
//                                         </span>
//                                     </div>
//                                     <div className="review-view-content-bad-wrap">
//                                         <span className="review-view-content-bad">
//                                             {data.description}
//                                         </span>
//                                     </div>
//                                 </div>
//                             );
//                         } else {
//                             return (
//                                 <div
//                                     key={key}
//                                     className="review-view-good"
//                                 >
//                                     <div className="review-view-date-good-wrap">
//                                         <span className="review-view-date-good">
//                                             10개월 전
//                                             {/* {handleDate(
//                                             data.date
//                                         )} */}
//                                         </span>
//                                     </div>
//                                     <div className="review-view-content-good-wrap">
//                                         <span className="review-view-content-good">
//                                             {data.description}
//                                         </span>
//                                     </div>
//                                 </div>
//                             );
//                         }
//                     })}
//             </div>

//             {!isEmpty(reports) ? (
//                 <>
//                     {reportViewOpen ? (
//                         <div
//                             className="review-view-close-btn-wrap"
//                             onClick={() => {
//                                 setReportViewOpen(!reportViewOpen);
//                             }}
//                         >
//                             <span className="review-view-close-btn">
//                                 닫기
//                             </span>
//                         </div>
//                     ) : (
//                         <div
//                             className="review-view-open-btn-wrap"
//                             onClick={() => {
//                                 setReportViewOpen(!reportViewOpen);
//                             }}
//                         >
//                             <span className="review-view-open-btn">
//                                 펼치기
//                             </span>
//                         </div>
//                     )}
//                 </>
//             ) : (
//                 <div className="review-none-wrap">
//                     <span>비어있습니다. 작성해주세요!</span>
//                 </div>
//             )}
//         </div>
//         {!isEmpty(summonerInfo.summonerMatch) &&
//             summonerInfo.summonerMatch.map((data, key) => {
//                 const championName = getChampionNamebyId(
//                     String(data.matchChampion)
//                 );

//                 if (data.matchWin) {
//                     return (
//                         <div className="summonerMatchWin">
//                             <img
//                                 src={`https://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${championName}.png`}
//                             />
//                             <div className="summonerMatchKDA">
//                                 {data.matchKills}/{data.matchDeaths}
//                                 /{data.matchAssists}
//                             </div>
//                             <div className="summonerMatchRank">
//                                 {data.matchRank}등
//                             </div>
//                         </div>
//                     );
//                 } else {
//                     return (
//                         <div className="summonerMatchLose">
//                             <img
//                                 src={`https://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${championName}.png`}
//                             />
//                             <div className="summonerMatchKDA">
//                                 {data.matchKills}/{data.matchDeaths}
//                                 /{data.matchAssists}
//                             </div>
//                             <div className="summonerMatchRank">
//                                 {data.matchRank}등
//                             </div>
//                         </div>
//                     );
//                 }
//             })}
//     </div>
// )}
