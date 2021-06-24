import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import '../Styles/component/deathnoteSearch.scss';
import { ReactComponent as SearchIcon } from '../Assets/deathnote-search-btn.svg';
import { getTierColor, isEmpty } from '../Functions';
import { deathnoteService } from '../Services/deathnoteService';
const DeathnoteSearchBox = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [keywordData, setKeywordData] = useState([]);
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
    useEffect(() => {
        deathnoteService.getDeathnoteByKeyword(name).then((data) => {
            setKeywordData(data.summonerKeywordDtoList);
        });
    }, [name]);

    return (
        <div className="DeathnoteSearchWrap">
            <div className="DeathnoteSearchNation">GG</div>
            <div className="DeathnoteSearch">
                <input
                    className="SearchBox"
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
            <div className="DeathnoteSearchKeywordWrap">
                {!isEmpty(keywordData) &&
                    keywordData.map((data, key) => {
                        let profileSrc = `https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/${data.summonerIcon}.png`;
                        let tierColor = getTierColor(data.summonerTier);
                        return (
                            <div
                                className="DeathnoteSearchKeyword"
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
                                                    className="DeathnoteSearchKeywordImg"
                                                    src={profileSrc}
                                                    alt={data.summonerIcon}
                                                />
                                            </td>
                                            <td className="DeathnoteSearchKeywordContent">
                                                <div className="DeathnoteSearchKeywordName">
                                                    {data.summonerName}
                                                </div>
                                                <div
                                                    className="DeathnoteSearchKeywordSummonerInfo"
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
        </div>
    );
};

export default DeathnoteSearchBox;

// const keywordData = [
//     {
//         summonerName: 'Hide on bush',
//         summonerLevel: 464,
//         summonerIcon: 6,
//         summonerTier: 'CHALLENGER',
//         summonerRank: 'I',
//     },
//     {
//         summonerName: 'Hide in secs',
//         summonerLevel: 143,
//         summonerIcon: 4765,
//         summonerTier: 'SILVER',
//         summonerRank: 'IV',
//     },
//     {
//         summonerName: 'Hide 0k bush',
//         summonerLevel: 65,
//         summonerIcon: 4881,
//         summonerTier: 'SILVER',
//         summonerRank: 'I',
//     },
//     {
//         summonerName: 'Hide 0n bush',
//         summonerLevel: 118,
//         summonerIcon: 3478,
//         summonerTier: 'BRONZE',
//         summonerRank: 'III',
//     },
// ];
