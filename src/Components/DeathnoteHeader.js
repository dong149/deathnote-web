import React, { useState } from 'react';
import '../Styles/component/deathnoteHeader.scss';
const DeathnoteHeader = (props) => {
    const { data } = props;
    let tierColor;
    let tierName;
    let tierNick;

    const profileSrc = `https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/${data.summonerIcon}.png`;

    const getTier = (score) => {
        let temp;
        let name;
        let nick;

        if (score >= 80) {
            temp = '#FF0061';
            name = 'Challenger';
            nick = '최고의 버스기사';
        } else if (score >= 70) {
            temp = '#00B3FC';
            name = 'Diamond';
            nick = '버스기사';
        } else if (score >= 60) {
            temp = '#28E3A3';
            name = 'Platinum';
            nick = '좀 잘하는 사람';
        } else if (score >= 50) {
            temp = '#EC9A01';
            name = 'Gold';
            nick = '1인분';
        } else if (score >= 40) {
            temp = '#435F7A';
            name = 'Silver';
            nick = '못하는 사람';
        } else {
            temp = '#AE5701';
            name = 'Bronze';
            nick = '완전 트롤러';
        }
        // setTierColor(temp);
        // setTierName(name);
        // setTierNick(nick);
        tierColor = temp;
        tierName = name;
        tierNick = nick;
    };
    getTier(data.trollerScore);
    return (
        <div className="HeaderBox">
            <div className="ProfileLeft">
                <img
                    className="ProfileImg"
                    src={profileSrc}
                    alt="소환사 프로필 이미지"
                />

                <div className="ProfileBlock">
                    <div className="SummonerName">{data.summonerName}</div>
                    <div className="SummonerLevel">
                        Level {data.summonerLevel}
                    </div>
                    <button
                        style={{ backgroundColor: `${tierColor}` }}
                        className="UpdateButton"
                    >
                        전적 갱신
                    </button>
                </div>
            </div>
            <div className="ProfileRight">
                <div className="DeathnoteScoreWrap">
                    <div className="DeathnoteTierWrap">
                        <div
                            style={{ color: `${tierColor}` }}
                            className="DeathnoteTier"
                        >
                            {tierName}
                        </div>
                        <div className="DeathnotePercentage">상위 0.54%</div>
                    </div>
                    <div
                        style={{ backgroundColor: `${tierColor}` }}
                        className="DeathnoteTierBoxWrap"
                    >
                        {data.trollerScore}
                    </div>
                    <div className="DeathnoteCommentWrap">
                        <div className="DeathnoteComment">
                            {'"'} 당신은{' '}
                            <span style={{ color: `${tierColor}` }}>
                                {tierNick}
                            </span>
                            입니다. {'"'}
                        </div>
                        <div className="DeathnotePower">
                            Powered by DEATHNOTE(x)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeathnoteHeader;
