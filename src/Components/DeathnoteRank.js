import React from 'react';
import '../Styles/component/deathnoteRank.scss';
import DeathnoteBanner from './DeathnoteBanner';
import DeathnoteMatch from './DeathnoteMatch';
const DeathnoteRank = (props) => {
    const { data } = props;
    const rankImgSrc = `/ranked-emblems/Emblem_${data.summonerTier}.png`;

    let tierColor;
    const getTier = (tier) => {
        let temp;

        if (tier === 'CHALLENGER') {
            temp = '#FF0061';
        } else if (tier === 'DIAMOND') {
            temp = '#00B3FC';
        } else if (tier === 'PLATINUM') {
            temp = '#28E3A3';
        } else if (tier === 'GOLD') {
            temp = '#EC9A01';
        } else if (tier === 'SILVER') {
            temp = '#435F7A';
        } else {
            temp = '#AE5701';
        }
        tierColor = temp;
    };
    getTier(data.summonerTier);

    return (
        <div className="Rank_Wrap">
            <div className="Rank_side_content">
                <div className="Rank_banner">
                    <div className="Rank_image_wrap">
                        <img src={rankImgSrc} className="Rank_image" />
                    </div>
                    <div className="Rank_text">
                        <div className="Rank_type">솔로랭크</div>
                        <div
                            style={{ color: `${tierColor}` }}
                            className="Rank_tier"
                        >
                            {' '}
                            {data.summonerTier}{' '}
                        </div>
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
            <DeathnoteMatch data={data} />
            {/* <DeathnoteBanner /> */}
        </div>
    );
};

export default DeathnoteRank;
