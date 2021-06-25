import React from 'react';
import '../Styles/component/deathnoteSummoner.scss';

const DeathnoteSummoner = (props) => {
    const { data } = props;

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
                            KR
                        </span>
                    </div>
                    <div className="DeathnoteSummonerInfoBottom">
                        <button className="DeathnoteSummonerInfoBottomButton1">
                            <span className="DeathnoteSummonerInfoBottomButton1Text">
                                전적갱신
                            </span>
                        </button>
                        <button className="DeathnoteSummonerInfoBottomButton2">
                            <span className="DeathnoteSummonerInfoBottomButton2Text">
                                공유하기
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </header>
    );
};

export default DeathnoteSummoner;
