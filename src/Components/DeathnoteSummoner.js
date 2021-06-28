import React from 'react';
import '../Styles/component/deathnoteSummoner.scss';
import {
    EmailShareButton,
    FacebookShareButton,
    LineShareButton,
    TwitterShareButton,
    FacebookIcon,
    EmailIcon,
    TwitterIcon,
    LineIcon,
} from 'react-share';
import { handleDate, isEmpty } from '../Functions';
const DeathnoteSummoner = (props) => {
    const { data, url, setReload } = props;

    const profileSrc = `https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/${data.summonerIcon}.png`;
    return (
        <header className="DeathnoteSummonerWrap">
            <header className="DeathnoteSummoner">
                <div className="DeathnoteSummonerProfileIconWrap">
                    <img
                        className="DeathnoteSummonerProfileIcon"
                        src={profileSrc}
                        alt="profileIcon"
                    />
                </div>
                <div className="DeathnoteSummonerInfo">
                    <div className="DeathnoteSummonerInfoTop">
                        <span className="DeathnoteSummonerInfoTopName">
                            {data.summonerName}
                        </span>
                        <span className="DeathnoteSummonerInfoTopLevel">
                            Level {data.summonerLevel}
                        </span>
                    </div>

                    <div className="DeathnoteSummonerInfoBottom">
                        <button
                            className="DeathnoteSummonerInfoBottomButton1"
                            onClick={() => setReload()}
                        >
                            <span className="DeathnoteSummonerInfoBottomButton1Text">
                                전적갱신
                            </span>
                        </button>
                        {/* <button className="DeathnoteSummonerInfoBottomButton2">
                            <span className="DeathnoteSummonerInfoBottomButton2Text">
                                전적갱신
                            </span>
                        </button> */}
                        <FacebookShareButton
                            url={url}
                            quote={'DEATHNOTE'}
                            className="DeathnoteSummonerInfoBottomShareButton"
                        >
                            <FacebookIcon size={40} round />
                        </FacebookShareButton>
                        <EmailShareButton
                            url={url}
                            quote={'DEATHNOTE'}
                            className="DeathnoteSummonerInfoBottomShareButton"
                        >
                            <EmailIcon size={40} round />
                        </EmailShareButton>
                        <LineShareButton
                            url={url}
                            quote={'DEATHNOTE'}
                            className="DeathnoteSummonerInfoBottomShareButton"
                        >
                            <LineIcon size={40} round />
                        </LineShareButton>
                        <TwitterShareButton
                            url={url}
                            quote={'DEATHNOTE'}
                            className="DeathnoteSummonerInfoBottomShareButton"
                        >
                            <TwitterIcon size={40} round />
                        </TwitterShareButton>
                    </div>
                    {!isEmpty(data.updatedAt) ? (
                        <span className="DeathnoteSummonerInfoBottomUpdateTime">
                            {handleDate(data.updatedAt)} 업데이트
                        </span>
                    ) : (
                        <span className="DeathnoteSummonerInfoBottomUpdateTime">
                            방금 전 업데이트
                        </span>
                    )}
                </div>
            </header>
        </header>
    );
};

export default DeathnoteSummoner;
