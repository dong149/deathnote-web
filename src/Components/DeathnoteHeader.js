import React from 'react';
import '../Styles/component/deathnoteHeader.scss';
const DeathnoteHeader = () => {
    /*
비즈니스 로직
*/

    return (
        <div className="HeaderBox">
            <img className="ProfileImg"
                src="https://ddragon.leagueoflegends.com/cdn/11.12.1/img/profileicon/4833.png"
                alt="소환사 프로필 이미지" />
            <div className="ProfileBlock">
                <div className="SummonerName">
                    hide on bush
                </div>
                <div className="SummonerLevel">
                    427 Level
                </div>
                <button className="UpdateButton">
                    전적 갱신
                </button>
            </div>
            <div className="CommentBox">
                <div>
                    60점, 버스 기사입니다, 상위 10% 유저
                         </div>
            </div>
        </div>
    );
};

export default DeathnoteHeader;
