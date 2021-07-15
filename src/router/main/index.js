import React, { useEffect, useState } from 'react';
import { getChampionNamebyId } from '../../champion';
import { getTierColor, isEmpty } from '../../Functions';
import { deathnoteService } from '../../Services/deathnoteService';
import { Doughnut } from 'react-chartjs-2';
import { useHistory } from 'react-router';
import '../../Styles/router/main.scss';
import DeathnoteFooter from '../../Components/DeathnoteFooter';
import { createBrowserHistory } from 'history';
import DeathnoteMainHeader from '../../Components/DeathnoteMainHeader';
import { Helmet } from 'react-helmet';
import { ReactComponent as SearchIcon } from '../../Assets/deathnote-search-btn.svg';
import DeathnoteNoteMain from '../../Components/DeathnoteNoteMain';
const Main = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [keywordData, setKeywordData] = useState([]);
    const [recentNoteReload, setRecentNoteReload] = useState(false);
    const [recentNoteData, setRecentNoteData] = useState([]);
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
        deathnoteService.getDeathnoteRecentNote().then((data) => {
            setRecentNoteData(data.noteList);
        });
    }, []);
    useEffect(() => {
        deathnoteService.getDeathnoteByKeyword(name).then((data) => {
            setKeywordData(data.summonerKeywordDtoList);
        });
    }, [name]);

    return (
        <>
            <Helmet>
                <body className="mainBody" />
            </Helmet>
            <DeathnoteMainHeader />
            <div className="mainBox">
                <a href="https://deathnote.gg">
                    <img
                        className="mainLogo"
                        src="/deathnote.png"
                        alt="deathnote_logo"
                    />
                </a>
                <div className="mainSearchWrap">
                    <div className="mainSearchNation">GG</div>
                    <div className="mainSearch">
                        <input
                            className="mainSearchForm"
                            placeholder="소환사명, 소환사명, ..."
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={(e) => {
                                handleKeyPress(e);
                            }}
                        />
                        <SearchIcon
                            className="SearchButton"
                            onClick={() => {
                                enterEvent();
                            }}
                            width="20"
                            height="20"
                        />
                    </div>
                </div>
                <div className="mainSearchKeywordWrap">
                    {!isEmpty(keywordData) &&
                        keywordData.map((data, key) => {
                            let profileSrc = `https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/${data.summonerIcon}.png`;
                            let tierColor = getTierColor(data.summonerTier);
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
                                                    <div
                                                        className="mainSearchKeywordSummonerInfo"
                                                        style={{
                                                            color: tierColor,
                                                        }}
                                                    >
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
                {/* <a
                    href="/deathnote/function"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="mainDeathnoteDescription">
                        Powered By{' '}
                        <span style={{ color: '#FF0061', fontWeight: 'bold' }}>
                            Deathnote(x)
                        </span>
                    </div>
                </a> */}
            </div>

            {!isEmpty(recentNoteData) && (
                <DeathnoteNoteMain noteData={recentNoteData} />
            )}
            <DeathnoteFooter />
        </>
    );
};

export default Main;
