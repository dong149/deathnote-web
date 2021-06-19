import React from 'react';
import '../Styles/component/deathnoteRank.scss';
import DeathnoteBanner from './DeathnoteBanner';
const DeathnoteRank = (props) => {
    const { data } = props;
    const rankImgSrc = `/ranked-emblems/Emblem_${data.summonerTier}.png`;
    return (
        <div className="Rank_Wrap">
            <div className="Rank_side_content">
                <div className="Rank_banner">
                    <div className="Rank_image_wrap">
                        <img src={rankImgSrc} className="Rank_image" />
                    </div>
                    <div className="Rank_text">
                        <div className="Rank_type">솔로랭킹</div>
                        <div className="Rank_tier"> {data.summonerTier} </div>
                        <div className="Rank_info">
                            <div className="Rank_WinLose">
                                {data.matchWin}승 {data.matchLose}패
                            </div>
                            <div className="Rank_winratio">
                                승률 {data.matchWinningRate}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DeathnoteBanner />
        </div>
    );
};

export default DeathnoteRank;
