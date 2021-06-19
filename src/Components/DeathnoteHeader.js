import React from 'react';
import '../Styles/component/deathnoteHeader.scss';
const DeathnoteHeader = (props) => {
    const { data } = props;
    console.log(data);
    const profileSrc = `https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/${data.summonerIcon}.png`;
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
                        {data.summonerLevel} Level
                    </div>
                    <button className="UpdateButton">전적 갱신</button>
                </div>
            </div>
            <div className="ProfileRight">
                {/* <div className="CommentBox">
                    <div>60점, 버스 기사입니다, 상위 10% 유저</div>
                </div> */}
            </div>
        </div>
    );
};

export default DeathnoteHeader;
